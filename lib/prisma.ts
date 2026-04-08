import { PrismaClient } from "@prisma/client";

/**
 * MySQL: each Node process must use a small pool or many workers / serverless
 * invocations will hit "max_user_connections". Set DATABASE_CONNECTION_LIMIT
 * (e.g. 3–5) if you still exhaust the server; optionally raise MySQL max_user_connections.
 */
function getPooledDatabaseUrl(): string | undefined {
  const raw = process.env.DATABASE_URL;
  if (!raw) return undefined;
  if (/[?&]connection_limit=/.test(raw)) return raw;
  const limit = process.env.DATABASE_CONNECTION_LIMIT ?? "5";
  const sep = raw.includes("?") ? "&" : "?";
  return `${raw}${sep}connection_limit=${limit}`;
}

const prismaClientSingleton = () => {
  const url = getPooledDatabaseUrl();
  return new PrismaClient({
    datasources: {
      db: {
        url: url ?? process.env.DATABASE_URL,
      },
    },
    log:
      process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
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
