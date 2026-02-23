(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__149481f3._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Pictures/dgsoft-website-v2/auth.config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authConfig",
    ()=>authConfig
]);
const authConfig = {
    pages: {
        signIn: '/admin/login'
    },
    providers: [],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt ({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        session ({ session, token }) {
            if (token && session.user) {
                session.user.role = token.role;
            }
            return session;
        },
        authorized ({ auth, request: { nextUrl } }) {
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
        }
    }
};
}),
"[project]/Pictures/dgsoft-website-v2/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/auth.config.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$auth$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authConfig"]).auth;
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png$).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__149481f3._.js.map