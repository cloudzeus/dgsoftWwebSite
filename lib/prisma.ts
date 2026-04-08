import { PrismaClient } from "@prisma/client";
import { getPrismaDatabaseUrl } from "@/lib/database-url";

/**
 * MySQL: same `DATABASE_URL` as `prisma db push` / CI. Pool size defaults to 1 per process — see
 * `lib/database-url.ts` (set `DATABASE_CONNECTION_LIMIT` higher only if the server allows it).
 *
 * Retry policy: if MySQL rejects a connection due to `max_user_connections` (error 1203),
 * each query automatically retries up to 3 times with exponential back-off (600ms, 1200ms, 2400ms).
 * This handles transient spikes where one PM2 worker briefly exhausts the per-user connection limit.
 *
 * ROOT FIX (server-side): run on MySQL to permanently raise the limit —
 *   ALTER USER 'root'@'%' WITH MAX_USER_CONNECTIONS 50;
 *   FLUSH PRIVILEGES;
 */
const prismaClientSingleton = () => {
  const url = getPrismaDatabaseUrl();
  const base = new PrismaClient({
    datasources: {
      db: {
        url: url ?? process.env.DATABASE_URL,
      },
    },
    log:
      process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

  return base.$extends({
    query: {
      $allModels: {
        async $allOperations({ args, query }) {
          const MAX_ATTEMPTS = 3;
          let attempt = 0;
          // eslint-disable-next-line no-constant-condition
          while (true) {
            try {
              return await query(args);
            } catch (e: unknown) {
              attempt++;
              const msg = e instanceof Error ? e.message : String(e);
              const isConnectionLimit =
                msg.includes("max_user_connections") ||
                msg.includes("1203") ||
                msg.includes("Too many connections");
              if (isConnectionLimit && attempt < MAX_ATTEMPTS) {
                // Exponential back-off: 600ms, 1200ms, 2400ms
                await new Promise((r) => setTimeout(r, 600 * attempt));
                continue;
              }
              throw e;
            }
          }
        },
      },
    },
  });
};

declare global {
  // eslint-disable-next-line no-var -- Prisma Next.js singleton pattern
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// Always reuse one client per process (dev HMR + production workers)
if (!globalThis.prismaGlobal) {
  globalThis.prismaGlobal = prisma;
}
