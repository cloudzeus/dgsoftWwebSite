import { auth } from "@/auth"

/** Same NextAuth instance as API routes — avoids JWT decode mismatch with a second NextAuth(authConfig). */
export default auth

export const config = {
    // Only run auth middleware on /admin routes — skip public pages entirely
    matcher: ["/admin/:path*"],
}

