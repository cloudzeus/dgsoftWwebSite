module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const prismaClientSingleton = ()=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
        datasources: {
            db: {
                // Append connection pool params directly so they survive .env parsing
                url: process.env.DATABASE_URL
            }
        },
        log: ("TURBOPACK compile-time truthy", 1) ? [
            'error',
            'warn'
        ] : "TURBOPACK unreachable"
    });
};
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
const __TURBOPACK__default__export__ = prisma;
if ("TURBOPACK compile-time truthy", 1) globalThis.prismaGlobal = prisma;
}),
"[project]/auth.config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
                token.id = user.id;
            }
            return token;
        },
        session ({ session, token }) {
            if (token && session.user) {
                session.user.role = token.role;
                session.user.id = token.id || token.sub;
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
"[project]/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/prisma-adapter/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.config.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authConfig"],
    adapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]),
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                const email = credentials.email;
                const password = credentials.password;
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                    where: {
                        email
                    }
                });
                if (!user || !user.password) return null;
                const passwordsMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
                if (passwordsMatch) return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                };
                return null;
            }
        })
    ]
});
}),
"[project]/app/api/admin/eu-programs/upload-kads/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
;
;
;
async function POST(req) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
        if (!session || session.user?.role !== "ADMIN") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            });
        }
        const formData = await req.formData();
        const file = formData.get("file");
        if (!file) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "No file provided"
        }, {
            status: 400
        });
        const name = file.name.toLowerCase();
        console.log(`[upload-kads] File: ${name}, size: ${file.size} bytes`);
        const buffer = Buffer.from(await file.arrayBuffer());
        let rows = [];
        // ── Parse ──────────────────────────────────────────────────────────────
        if (name.endsWith(".csv")) {
            const text = buffer.toString("utf-8");
            for (const [i, line] of text.split(/\r?\n/).entries()){
                const trimmed = line.trim();
                if (!trimmed) continue;
                const cols = parseCSVLine(trimmed);
                if (cols.length < 2) continue;
                const dotcode = cols[0].trim();
                const nameEL = cols[1].trim();
                if (!dotcode || !nameEL) continue;
                if (i === 0 && [
                    "code",
                    "kad",
                    "κωδικός",
                    "κωδικοσ"
                ].includes(dotcode.toLowerCase())) continue;
                rows.push({
                    dotcode,
                    nameEL
                });
            }
        } else if (name.endsWith(".xlsx") || name.endsWith(".xls")) {
            // SheetJS handles both legacy .xls (BIFF8) and modern .xlsx
            const XLSX = await __turbopack_context__.A("[project]/node_modules/xlsx/xlsx.mjs [app-route] (ecmascript, async loader)");
            const workbook = XLSX.read(buffer, {
                type: "buffer"
            });
            const sheetName = workbook.SheetNames[0];
            if (!sheetName) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "No sheets found in the workbook."
                }, {
                    status: 400
                });
            }
            const sheet = workbook.Sheets[sheetName];
            // Convert to array of arrays (raw, no header)
            const aoa = XLSX.utils.sheet_to_json(sheet, {
                header: 1,
                defval: ""
            });
            for(let i = 0; i < aoa.length; i++){
                const row = aoa[i];
                if (!row || row.length < 2) continue;
                const dotcode = String(row[0] ?? "").trim();
                const nameEL = String(row[1] ?? "").trim();
                if (!dotcode || !nameEL) continue;
                // Skip header row if detected
                if (i === 0 && [
                    "code",
                    "kad",
                    "κωδικός",
                    "κωδικοσ"
                ].includes(dotcode.toLowerCase())) continue;
                rows.push({
                    dotcode,
                    nameEL
                });
            }
            console.log(`[upload-kads] SheetJS parsed ${rows.length} rows from ${name}`);
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unsupported format. Upload .xlsx, .xls or .csv — Column A = KAD code (e.g. 62.01), Column B = Greek description."
            }, {
                status: 400
            });
        }
        if (rows.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No data found. Ensure Column A = KAD code with dots (e.g. 62.01) and Column B = Greek description."
            }, {
                status: 400
            });
        }
        console.log(`[upload-kads] Inserting ${rows.length} KADs into DB...`);
        // ── Insert into DB ─────────────────────────────────────────────────────
        let count = 0;
        const errors = [];
        for (const item of rows){
            try {
                const rawCode = item.dotcode.replace(/\./g, "").trim();
                const dotcode = item.dotcode.trim();
                if (!rawCode) continue;
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].kad.upsert({
                    where: {
                        code: rawCode
                    },
                    update: {
                        dotcode,
                        nameEL: item.nameEL.trim()
                    },
                    create: {
                        code: rawCode,
                        dotcode,
                        nameEL: item.nameEL.trim()
                    }
                });
                count++;
            } catch (err) {
                errors.push(`${item.dotcode}: ${err.message}`);
            }
        }
        console.log(`[upload-kads] Done. Inserted: ${count}, Errors: ${errors.length}`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            count,
            total: rows.length,
            errors: errors.slice(0, 5)
        });
    } catch (error) {
        console.error("[upload-kads] Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
function parseCSVLine(line) {
    const result = [];
    let inQuote = false, current = "";
    for (const ch of line){
        if (ch === '"') inQuote = !inQuote;
        else if (ch === "," && !inQuote) {
            result.push(current);
            current = "";
        } else current += ch;
    }
    result.push(current);
    return result;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6e3d0675._.js.map