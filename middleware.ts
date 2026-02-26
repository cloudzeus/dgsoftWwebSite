import NextAuth from "next-auth"
import { authConfig } from "@/auth.config"

// Use the edge-compatible authConfig (JWT only, no Prisma adapter)
// Full auth.ts uses PrismaAdapter which cannot run in Edge middleware
export const { auth: middleware } = NextAuth(authConfig)

export const config = {
    matcher: ["/admin/:path*"],
}
