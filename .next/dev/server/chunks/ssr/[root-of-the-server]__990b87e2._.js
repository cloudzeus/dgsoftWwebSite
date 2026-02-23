module.exports = [
"[project]/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/auth.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/prisma-adapter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authConfig"],
    adapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
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
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                    where: {
                        email
                    }
                });
                if (!user || !user.password) return null;
                const passwordsMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
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
"[project]/app/lib/actions/eu-program.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00116c22092b0c530ad64fb4a07d25af5fc66ef7af":"getAllPeriferies","0063a62f9ea8b8375c5b04a6f0c599f0d5d78d5667":"getEuPrograms","008bc656ad4e5dd4de1365153fbb37679aff7c0212":"importKallikratis","00bdd672b18ec7bc2ae05573cdf9f9bc623c3af3c4":"getAllKadsList","00c1935136d03117487018c1f21e3f4576fe5bd57b":"translateAllPeriferies","401d646556b39791242085901bf87d4f043cba09d1":"createKad","405316f9c36befdec8ce4b78a28374eaf44c95649d":"bulkCreateKads","40741f0c5dc01796159a2356eadd2b80f5ada28124":"deleteEuProgram","407d7e3fde0ace304e8947b21af5134a958fc73015":"createPeriferia","40c416403db5b6ce81cc33dda66e220f2ae1d84da8":"createEuProgram","40ef297a087d802c46220fde701544ca62f770c99a":"deleteKad","40f9ec73bb28f0dc7702468fb83561de9d426c8075":"deletePeriferia","6008a34e21e7f36ce288397005600e52a938e7a9bf":"updateEuProgram","6061249de8e3727f4af61f2be056e1516530582528":"updatePeriferia","606183dab3653add98ab4a84dec49add0ea87871f3":"linkKadToProgram","60701c9ee39caaa0471c98fc8813c268e9237b1e4b":"unlinkKadFromProgram","6082e80850b424f230348130a37cc5f34d2d5fb5e6":"unlinkPeriferiaFromProgram","6084ada550f7bab9065ced9ea4ae817ebf555d430e":"processOcrAndCreateKads","60b0520c25e1fb26d2b85dd17b5d4e8fc908680fe7":"updateKad","60f64cbc01bca536008caa41e303125922fb8f35b7":"linkPeriferiaToProgram"},"",""] */ __turbopack_context__.s([
    "bulkCreateKads",
    ()=>bulkCreateKads,
    "createEuProgram",
    ()=>createEuProgram,
    "createKad",
    ()=>createKad,
    "createPeriferia",
    ()=>createPeriferia,
    "deleteEuProgram",
    ()=>deleteEuProgram,
    "deleteKad",
    ()=>deleteKad,
    "deletePeriferia",
    ()=>deletePeriferia,
    "getAllKadsList",
    ()=>getAllKadsList,
    "getAllPeriferies",
    ()=>getAllPeriferies,
    "getEuPrograms",
    ()=>getEuPrograms,
    "importKallikratis",
    ()=>importKallikratis,
    "linkKadToProgram",
    ()=>linkKadToProgram,
    "linkPeriferiaToProgram",
    ()=>linkPeriferiaToProgram,
    "processOcrAndCreateKads",
    ()=>processOcrAndCreateKads,
    "translateAllPeriferies",
    ()=>translateAllPeriferies,
    "unlinkKadFromProgram",
    ()=>unlinkKadFromProgram,
    "unlinkPeriferiaFromProgram",
    ()=>unlinkPeriferiaFromProgram,
    "updateEuProgram",
    ()=>updateEuProgram,
    "updateKad",
    ()=>updateKad,
    "updatePeriferia",
    ()=>updatePeriferia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getEuPrograms() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].euProgram.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include: {
                kads: {
                    include: {
                        kad: true
                    }
                },
                periferies: {
                    include: {
                        periferia: true
                    }
                }
            }
        });
    } catch (error) {
        console.error("GET EU PROGRAMS Error:", error);
        throw new Error(error.message);
    }
}
async function createEuProgram(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");
    try {
        const { kads, ...programData } = data;
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].euProgram.create({
            data: {
                ...programData,
                active: programData.active ?? true,
                minimumCompanyYears: programData.minimumCompanyYears ? parseInt(programData.minimumCompanyYears, 10) : null,
                minimumEmployees: programData.minimumEmployees ? parseInt(programData.minimumEmployees, 10) : null,
                maxBudget: programData.maxBudget ? parseFloat(programData.maxBudget) : null,
                announcedDate: programData.announcedDate ? new Date(programData.announcedDate) : null,
                submissionDate: programData.submissionDate ? new Date(programData.submissionDate) : null,
                endDate: programData.endDate ? new Date(programData.endDate) : null
            },
            include: {
                kads: {
                    include: {
                        kad: true
                    }
                },
                periferies: {
                    include: {
                        periferia: true
                    }
                }
            }
        });
    } catch (error) {
        console.error("CREATE EU PROGRAM Error:", error);
        throw new Error(error.message);
    }
}
async function updateEuProgram(id, data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");
    try {
        const { kads, ...programData } = data;
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].euProgram.update({
            where: {
                id
            },
            data: {
                ...programData,
                active: programData.active ?? true,
                minimumCompanyYears: programData.minimumCompanyYears ? parseInt(programData.minimumCompanyYears, 10) : null,
                minimumEmployees: programData.minimumEmployees ? parseInt(programData.minimumEmployees, 10) : null,
                maxBudget: programData.maxBudget ? parseFloat(programData.maxBudget) : null,
                announcedDate: programData.announcedDate ? new Date(programData.announcedDate) : null,
                submissionDate: programData.submissionDate ? new Date(programData.submissionDate) : null,
                endDate: programData.endDate ? new Date(programData.endDate) : null
            },
            include: {
                kads: {
                    include: {
                        kad: true
                    }
                },
                periferies: {
                    include: {
                        periferia: true
                    }
                }
            }
        });
    } catch (error) {
        console.error("UPDATE EU PROGRAM Error:", error);
        throw new Error(error.message);
    }
}
async function deleteEuProgram(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].euProgram.delete({
            where: {
                id
            }
        });
    } catch (error) {
        console.error("DELETE EU PROGRAM Error:", error);
        throw new Error(error.message);
    }
}
async function getAllKadsList() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].kad.findMany({
            orderBy: {
                code: 'asc'
            }
        });
    } catch (error) {
        console.error("GET KADS Error:", error);
        throw new Error(error.message);
    }
}
async function linkKadToProgram(programId, kadId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].kadEuProgram.create({
            data: {
                euProgramId: programId,
                kadId: kadId
            }
        });
    } catch (e) {
        if (e.code !== 'P2002') throw new Error(e.message); // ignore duplicate entry
    }
}
async function unlinkKadFromProgram(programId, kadId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].kadEuProgram.deleteMany({
            where: {
                euProgramId: programId,
                kadId: kadId
            }
        });
    } catch (e) {
        throw new Error(e.message);
    }
}
async function getAllPeriferies() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].periferia.findMany({
            where: {
                parentCode: null
            },
            include: {
                children: {
                    orderBy: {
                        nameEL: 'asc'
                    },
                    include: {
                        children: {
                            orderBy: {
                                nameEL: 'asc'
                            },
                            include: {
                                children: {
                                    orderBy: {
                                        nameEL: 'asc'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: {
                nameEL: 'asc'
            }
        });
    } catch (error) {
        console.error("GET PERIFERIES Error:", error);
        throw new Error(error.message);
    }
}
async function linkPeriferiaToProgram(programId, periferiaId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].euProgramPeriferia.create({
            data: {
                euProgramId: programId,
                periferiaId: periferiaId
            }
        });
    } catch (e) {
        if (e.code !== 'P2002') throw new Error(e.message);
    }
}
async function unlinkPeriferiaFromProgram(programId, periferiaId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].euProgramPeriferia.deleteMany({
            where: {
                euProgramId: programId,
                periferiaId: periferiaId
            }
        });
    } catch (e) {
        throw new Error(e.message);
    }
}
async function processOcrAndCreateKads(programId, extractedKads) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        // Iterate over extracted KADs, upsert them if they don't exist, and link them to the program
        let count = 0;
        for (const k of extractedKads){
            if (!k.code) continue;
            // Upsert Kad
            const kad = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].kad.upsert({
                where: {
                    code: k.code.trim()
                },
                update: {},
                create: {
                    code: k.code.trim(),
                    nameEL: k.desc.trim()
                }
            });
            // Link Kad to Program (ignore if exists)
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].kadEuProgram.create({
                    data: {
                        euProgramId: programId,
                        kadId: kad.id
                    }
                });
                count++;
            } catch (err) {
                if (err.code !== 'P2002') throw err;
            }
        }
        return {
            success: true,
            count
        };
    } catch (e) {
        console.error("PROCESS OCR Error:", e);
        throw new Error(e.message);
    }
}
async function createPeriferia(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].periferia.create({
            data
        });
    } catch (error) {
        throw new Error(error.message);
    }
}
async function updatePeriferia(id, data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].periferia.update({
            where: {
                id
            },
            data
        });
    } catch (error) {
        throw new Error(error.message);
    }
}
async function deletePeriferia(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].periferia.delete({
            where: {
                id
            }
        });
    } catch (error) {
        throw new Error(error.message);
    }
}
async function importKallikratis() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        const url = "https://raw.githubusercontent.com/eellak/Greek-perfectures-municipalities-settlements-name-directory/master/dioikhtikh_diairesh_kallikraths_elstat.csv";
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch Kallikratis dataset.");
        const csvText = await res.text();
        const lines = csvText.split('\n');
        const validRecords = [];
        /**
         * CSV structure (after 6 header rows):
         * col0 = serial, col1 = level (1-8), col2 = code1 (always the Periferia code e.g. "111"),
         * col3 = Kallikratis sub-code (e.g. "01" for level4, "0101" for level5), col4 = name
         *
         * We capture levels 3, 4, 5:
         *  Level 3 (Periferia):          code = code1.trim()             parentCode = null
         *  Level 4 (Perifereiaki Enotita): code = code1.trim()+code2.trim()  parentCode = code1.trim()
         *  Level 5 (Dimos):              code = code1.trim()+code2.trim()  parentCode = code1.trim()+code2.trim().slice(0,-2)
         */ const parseCSVLine = (line)=>{
            const result = [];
            let inQuote = false;
            let current = "";
            for(let c = 0; c < line.length; c++){
                const ch = line[c];
                if (ch === '"') {
                    inQuote = !inQuote;
                } else if (ch === ',' && !inQuote) {
                    result.push(current.trim());
                    current = "";
                } else {
                    current += ch;
                }
            }
            result.push(current.trim());
            return result;
        };
        for(let i = 6; i < lines.length; i++){
            const line = lines[i].trim();
            if (!line) continue;
            // Use the correct quote-aware parser
            const cols = parseCSVLine(line);
            if (cols.length < 5) continue;
            const level = parseInt(cols[1], 10);
            if (isNaN(level)) continue;
            if (![
                3,
                4,
                5
            ].includes(level)) continue;
            const cp1 = cols[2].trim();
            const cp2 = cols[3].trim();
            // Strip Greek grammatical suffix after comma inside the name e.g. "Κομοτηνή,η"
            const nameEL = cols[4].replace(/,\s*\S+$/, "").trim();
            if (!cp1 || !nameEL) continue;
            let code;
            let parentCode;
            if (level === 3) {
                code = cp1;
                parentCode = null;
            } else if (level === 4) {
                code = cp1 + cp2; // e.g. "111"+"01" = "11101"
                parentCode = cp1; // parent = Periferia
            } else {
                code = cp1 + cp2; // e.g. "111"+"0101" = "1110101"
                parentCode = cp1 + cp2.slice(0, -2); // strip last 2 digits → Ενότητα
            }
            validRecords.push({
                code,
                nameEL,
                level,
                parentCode
            });
        }
        // Insert level 3 first (roots), then 4, then 5 to respect FK constraints
        let count = 0;
        for (const targetLevel of [
            3,
            4,
            5
        ]){
            const batch = validRecords.filter((r)=>r.level === targetLevel);
            for (const rec of batch){
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].periferia.upsert({
                        where: {
                            code: rec.code
                        },
                        update: {
                            nameEL: rec.nameEL,
                            level: rec.level,
                            parentCode: rec.parentCode
                        },
                        create: {
                            code: rec.code,
                            nameEL: rec.nameEL,
                            level: rec.level,
                            parentCode: rec.parentCode
                        }
                    });
                    count++;
                } catch (_err) {
                // Skip FK violations or duplicates silently
                }
            }
        }
        return {
            success: true,
            count
        };
    } catch (e) {
        throw new Error(e.message);
    }
}
async function translateAllPeriferies() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        // Fetch all Periferies that lack English names
        const untranslated = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].periferia.findMany({
            where: {
                OR: [
                    {
                        nameEN: null
                    },
                    {
                        nameEN: ""
                    }
                ]
            },
            take: 50 // Limit batch size to avoid timeouts
        });
        if (untranslated.length === 0) return {
            success: true,
            count: 0,
            message: "No untranslated regions found."
        };
        const isDeepseek = !!process.env.DEEPSEEK_API_KEY;
        const apiUrl = isDeepseek ? process.env.DEEPSEEK_API_URL || "https://api.deepseek.com/v1/chat/completions" : "https://api.openai.com/v1/chat/completions";
        const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;
        const model = isDeepseek ? "deepseek-chat" : "gpt-4o-mini";
        if (!apiKey) throw new Error("No Translation API Key Available");
        let translatedCount = 0;
        for (const region of untranslated){
            const prompt = `Translate the following Greek region/municipality name to English. Reply ONLY with the English translation. No quotes, no intro.\n\nText: ${region.nameEL}`;
            try {
                const res = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model,
                        messages: [
                            {
                                role: "user",
                                content: prompt
                            }
                        ],
                        temperature: 0.1
                    })
                });
                if (res.ok) {
                    const data = await res.json();
                    const translatedText = data.choices[0]?.message?.content?.trim();
                    if (translatedText) {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].periferia.update({
                            where: {
                                id: region.id
                            },
                            data: {
                                nameEN: translatedText
                            }
                        });
                        translatedCount++;
                    }
                }
            } catch (err) {
                console.error("Translation fail for", region.nameEL, err);
            }
        }
        return {
            success: true,
            count: translatedCount,
            remaining: untranslated.length - translatedCount
        };
    } catch (e) {
        throw new Error(e.message);
    }
}
async function createKad(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].kad.create({
            data
        });
    } catch (error) {
        throw new Error(error.message);
    }
}
async function updateKad(id, data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].kad.update({
            where: {
                id
            },
            data
        });
    } catch (error) {
        throw new Error(error.message);
    }
}
async function deleteKad(id) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].kad.delete({
            where: {
                id
            }
        });
    } catch (error) {
        throw new Error(error.message);
    }
}
async function bulkCreateKads(data) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
    try {
        let count = 0;
        for (const item of data){
            if (!item.dotcode) continue;
            // The unformatted code is exactly the dotcode without the dots
            const rawCode = item.dotcode.replace(/\./g, "").trim();
            const dotCodeSaved = item.dotcode.trim();
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].kad.upsert({
                where: {
                    code: rawCode
                },
                update: {
                    dotcode: dotCodeSaved,
                    nameEL: item.nameEL.trim()
                },
                create: {
                    code: rawCode,
                    dotcode: dotCodeSaved,
                    nameEL: item.nameEL.trim()
                }
            });
            count++;
        }
        return {
            success: true,
            count
        };
    } catch (error) {
        console.error("BULK KAD ERROR", error);
        throw new Error(error.message);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getEuPrograms,
    createEuProgram,
    updateEuProgram,
    deleteEuProgram,
    getAllKadsList,
    linkKadToProgram,
    unlinkKadFromProgram,
    getAllPeriferies,
    linkPeriferiaToProgram,
    unlinkPeriferiaFromProgram,
    processOcrAndCreateKads,
    createPeriferia,
    updatePeriferia,
    deletePeriferia,
    importKallikratis,
    translateAllPeriferies,
    createKad,
    updateKad,
    deleteKad,
    bulkCreateKads
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEuPrograms, "0063a62f9ea8b8375c5b04a6f0c599f0d5d78d5667", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEuProgram, "40c416403db5b6ce81cc33dda66e220f2ae1d84da8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEuProgram, "6008a34e21e7f36ce288397005600e52a938e7a9bf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEuProgram, "40741f0c5dc01796159a2356eadd2b80f5ada28124", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllKadsList, "00bdd672b18ec7bc2ae05573cdf9f9bc623c3af3c4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(linkKadToProgram, "606183dab3653add98ab4a84dec49add0ea87871f3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(unlinkKadFromProgram, "60701c9ee39caaa0471c98fc8813c268e9237b1e4b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllPeriferies, "00116c22092b0c530ad64fb4a07d25af5fc66ef7af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(linkPeriferiaToProgram, "60f64cbc01bca536008caa41e303125922fb8f35b7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(unlinkPeriferiaFromProgram, "6082e80850b424f230348130a37cc5f34d2d5fb5e6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processOcrAndCreateKads, "6084ada550f7bab9065ced9ea4ae817ebf555d430e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPeriferia, "407d7e3fde0ace304e8947b21af5134a958fc73015", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePeriferia, "6061249de8e3727f4af61f2be056e1516530582528", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletePeriferia, "40f9ec73bb28f0dc7702468fb83561de9d426c8075", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importKallikratis, "008bc656ad4e5dd4de1365153fbb37679aff7c0212", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(translateAllPeriferies, "00c1935136d03117487018c1f21e3f4576fe5bd57b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createKad, "401d646556b39791242085901bf87d4f043cba09d1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateKad, "60b0520c25e1fb26d2b85dd17b5d4e8fc908680fe7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteKad, "40ef297a087d802c46220fde701544ca62f770c99a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkCreateKads, "405316f9c36befdec8ce4b78a28374eaf44c95649d", null);
}),
"[project]/.next-internal/server/app/admin/eu-programs/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/lib/actions/eu-program.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/actions/eu-program.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/eu-programs/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/lib/actions/eu-program.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00116c22092b0c530ad64fb4a07d25af5fc66ef7af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPeriferies"],
    "0063a62f9ea8b8375c5b04a6f0c599f0d5d78d5667",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEuPrograms"],
    "008bc656ad4e5dd4de1365153fbb37679aff7c0212",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importKallikratis"],
    "00bdd672b18ec7bc2ae05573cdf9f9bc623c3af3c4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllKadsList"],
    "00c1935136d03117487018c1f21e3f4576fe5bd57b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translateAllPeriferies"],
    "401d646556b39791242085901bf87d4f043cba09d1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createKad"],
    "405316f9c36befdec8ce4b78a28374eaf44c95649d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bulkCreateKads"],
    "40741f0c5dc01796159a2356eadd2b80f5ada28124",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEuProgram"],
    "407d7e3fde0ace304e8947b21af5134a958fc73015",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPeriferia"],
    "40c416403db5b6ce81cc33dda66e220f2ae1d84da8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEuProgram"],
    "40ef297a087d802c46220fde701544ca62f770c99a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKad"],
    "40f9ec73bb28f0dc7702468fb83561de9d426c8075",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePeriferia"],
    "6008a34e21e7f36ce288397005600e52a938e7a9bf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEuProgram"],
    "6061249de8e3727f4af61f2be056e1516530582528",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updatePeriferia"],
    "606183dab3653add98ab4a84dec49add0ea87871f3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["linkKadToProgram"],
    "60701c9ee39caaa0471c98fc8813c268e9237b1e4b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unlinkKadFromProgram"],
    "6082e80850b424f230348130a37cc5f34d2d5fb5e6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unlinkPeriferiaFromProgram"],
    "6084ada550f7bab9065ced9ea4ae817ebf555d430e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processOcrAndCreateKads"],
    "60b0520c25e1fb26d2b85dd17b5d4e8fc908680fe7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateKad"],
    "60f64cbc01bca536008caa41e303125922fb8f35b7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["linkPeriferiaToProgram"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$eu$2d$programs$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/eu-programs/page/actions.js { ACTIONS_MODULE0 => "[project]/app/lib/actions/eu-program.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$eu$2d$program$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/actions/eu-program.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__990b87e2._.js.map