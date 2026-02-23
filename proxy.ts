import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
    // Only run auth middleware on /admin routes — skip public pages entirely
    matcher: ['/admin/:path*'],
};
