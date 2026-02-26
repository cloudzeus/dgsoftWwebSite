import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

// Use the edge-compatible authConfig (JWT only, no Prisma adapter)
const { auth } = NextAuth(authConfig)


export default auth

export const config = {
    // Only run auth middleware on /admin routes — skip public pages entirely
    matcher: ["/admin/:path*"],
}

