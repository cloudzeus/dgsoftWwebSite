import { PrismaClient } from "@prisma/client";
import { getPrismaDatabaseUrl } from "@/lib/database-url";

/**
 * MySQL: same `DATABASE_URL` as `prisma db push` / CI; optional `connection_limit` on that URL
 * (or appended here) to avoid max_user_connections. See `lib/database-url.ts`.
 */
const prismaClientSingleton = () => {
  const url = getPrismaDatabaseUrl();
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
