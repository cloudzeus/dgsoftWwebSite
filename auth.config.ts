import type { NextAuthConfig, DefaultSession } from 'next-auth';
import { AuthError, JWTSessionError } from '@auth/core/errors';

function logAuthError(error: Error) {
    const red = '\x1b[31m';
    const reset = '\x1b[0m';
    const name = error instanceof AuthError ? error.type : error.name;
    console.error(`${red}[auth][error]${reset} ${name}: ${error.message}`);
    if (
        error.cause &&
        typeof error.cause === 'object' &&
        'err' in error.cause &&
        (error.cause as { err?: unknown }).err instanceof Error
    ) {
        const { err, ...data } = error.cause as { err: Error; [k: string]: unknown };
        console.error(`${red}[auth][cause]${reset}:`, err.stack);
        if (Object.keys(data).length) {
            console.error(`${red}[auth][details]${reset}:`, JSON.stringify(data, null, 2));
        }
    } else if (error.stack) {
        console.error(error.stack.replace(/.*/, '').substring(1));
    }
}

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            role: string;
        } & DefaultSession['user'];
    }
}

export const authConfig = {
    pages: {
        signIn: '/admin/login',
    },
    providers: [],
    session: { strategy: "jwt" },
    trustHost: true,
    /** Quieter logs for expected stale cookies after AUTH_SECRET rotation; other errors use full detail. */
    logger: {
        error(error) {
            if (error instanceof JWTSessionError) {
                console.warn(
                    '[auth] Session cookie could not be decrypted (invalid or stale). Cookie cleared. Set a stable AUTH_SECRET in .env and sign in again.'
                );
                return;
            }
            logAuthError(error);
        },
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role
                token.id = user.id
            }
            return token
        },
        session({ session, token }) {
            if (token && session.user) {
                session.user.role = token.role as string
                session.user.id = (token.id as string) || (token.sub as string)
            }
            return session
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');
            const isLoginPage = nextUrl.pathname === '/admin/login';

            if (isOnAdmin && !isLoginPage) {
                if (isLoggedIn) return true;
                return false; // Redirects to signIn page automatically
            }
            if (isLoginPage && isLoggedIn) {
                return Response.redirect(new URL('/admin/dashboard', nextUrl));
            }
            return true;
        },
    },
} satisfies NextAuthConfig;
