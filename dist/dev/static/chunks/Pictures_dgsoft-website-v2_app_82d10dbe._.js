(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navLinksConfig = {
    el: [
        {
            name: "Αρχική",
            href: "/"
        },
        {
            name: "Λύσεις",
            href: "/services"
        },
        {
            name: "Έργα",
            href: "/works"
        },
        {
            name: "Ευρωπαϊκά",
            href: "/eu-programs"
        },
        {
            name: "Καριέρα",
            href: "/careers"
        },
        {
            name: "Νέα",
            href: "/blog"
        },
        {
            name: "Λήψεις",
            href: "/downloads"
        }
    ],
    en: [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Solutions",
            href: "/services"
        },
        {
            name: "Work",
            href: "/works"
        },
        {
            name: "EU Grants",
            href: "/eu-programs"
        },
        {
            name: "Careers",
            href: "/careers"
        },
        {
            name: "News",
            href: "/blog"
        },
        {
            name: "Downloads",
            href: "/downloads"
        }
    ]
};
function Navigation() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("el");
    const navLinks = navLinksConfig[lang];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["Navigation.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    y: -100,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-monks-black/90 backdrop-blur-md" : "bg-transparent"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1800px] mx-auto px-6 md:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-20 md:h-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "relative z-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex items-center",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo.svg",
                                        alt: "DGSOFT Logo",
                                        className: "h-[35px]"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-10",
                                children: [
                                    navLinks.map((link)=>{
                                        const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                                        // Ensure home route highlighting is exact
                                        const isExact = pathname === "/" && link.href === "/";
                                        const activeVal = isActive && !isExact ? true : isExact ? true : false;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: `text-sm font-bold tracking-wider transition-colors line-animation ${activeVal ? "text-monks-accent" : "text-monks-light hover:text-white"}`,
                                            children: link.name
                                        }, link.name, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 border-l border-white/20 pl-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setLang(lang === "el" ? "en" : "el"),
                                                className: "text-sm font-semibold text-monks-light hover:text-white transition-colors",
                                                children: lang === "el" ? "EN" : "EL"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                className: "px-6 py-3 bg-white text-monks-black font-semibold text-sm rounded-full hover:bg-monks-accent hover:text-white transition-colors",
                                                children: lang === "el" ? "Επικοινωνία" : "Get in Touch"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "md:hidden relative z-50 p-2",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "fixed inset-0 z-40 bg-monks-black",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-full gap-8",
                        children: [
                            navLinks.map((link, index)=>{
                                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                                const isExact = pathname === "/" && link.href === "/";
                                const activeVal = isActive && !isExact ? true : isExact ? true : false;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    transition: {
                                        delay: index * 0.1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: `text-5xl font-black transition-colors ${activeVal ? "text-monks-accent" : "text-white hover:text-monks-light"}`,
                                        children: link.name
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this)
                                }, link.name, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                    lineNumber: 136,
                                    columnNumber: 19
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-col items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setLang(lang === "el" ? "en" : "el");
                                            setIsMenuOpen(false);
                                        },
                                        className: "text-xl font-bold text-monks-light py-2 px-6 border border-white/20 rounded-full",
                                        children: lang === "el" ? "Switch to English" : "Αλλαγή σε Ελληνικά"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        transition: {
                                            delay: 0.4
                                        },
                                        className: "px-8 py-4 bg-monks-accent text-white font-semibold rounded-full",
                                        children: lang === "el" ? "Επικοινωνία" : "Get in Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navigation, "CUo2WuL7Y7vd0itoNHZi2qxCItA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
"use client";
;
;
;
const footerLinks = {
    solutions: [
        {
            name: "Real-Time Platforms",
            href: "#"
        },
        {
            name: "Digital Orchestration",
            href: "#"
        },
        {
            name: "Immersive Experiences",
            href: "#"
        },
        {
            name: "AI Integration",
            href: "#"
        }
    ],
    company: [
        {
            name: "About Us",
            href: "#about"
        },
        {
            name: "Our Work",
            href: "#work"
        },
        {
            name: "Careers",
            href: "#"
        },
        {
            name: "Contact",
            href: "#contact"
        }
    ],
    resources: [
        {
            name: "Blog / Νέα",
            href: "/blog"
        },
        {
            name: "Downloads",
            href: "/downloads"
        },
        {
            name: "Documentation",
            href: "/services"
        },
        {
            name: "Privacy Policy",
            href: "#"
        }
    ]
};
const socialLinks = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        href: "#",
        label: "LinkedIn"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        href: "#",
        label: "Twitter"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: "#",
        label: "Instagram"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
        href: "#",
        label: "GitHub"
    }
];
function Footer() {
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-monks-black border-t border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1800px] mx-auto px-6 md:px-12 py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "inline-block mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "DG"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gradient-text",
                                                children: "SOFT"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-monks-light max-w-sm mb-8",
                                    children: "Accelerating growth through technology and creative innovation. Your trusted partner for digital transformation."
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: socialLinks.map((social, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: social.href,
                                            "aria-label": social.label,
                                            className: "w-10 h-10 rounded-full bg-monks-gray flex items-center justify-center text-monks-light hover:bg-monks-accent hover:text-white transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white font-semibold mb-6",
                                    children: "Solutions"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: footerLinks.solutions.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-monks-light hover:text-white transition-colors text-sm",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white font-semibold mb-6",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: footerLinks.company.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-monks-light hover:text-white transition-colors text-sm",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white font-semibold mb-6",
                                    children: "Resources"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: footerLinks.resources.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-monks-light hover:text-white transition-colors text-sm",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-monks-light text-sm",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " DGSOFT. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollToTop,
                            className: "flex items-center gap-2 text-monks-light hover:text-white transition-colors group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: "Back to top"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-monks-accent group-hover:border-monks-accent transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "w-4 h-4 -rotate-45"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/app/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const blog = [
    {
        slug: "supply-chain-transformation",
        author: "DGSOFT Team",
        published: "2024-10-20",
        imageUrl: "/blog/supply-chain.jpg",
        title: "Ο Μετασχηματισμός της Εφοδιαστικής μέσα από το ERP",
        category: "Digital Strategy",
        excerpt: "Μάθετε πώς ένα σύγχρονο ERP σύστημα μπορεί να αναδιαμορφώσει την εφοδιαστική αλυσίδα και να μειώσει τα κόστη. Αναλύουμε περιπτώσεις πελατών μας."
    },
    {
        slug: "crm-sales-growth",
        author: "Sales Team",
        published: "2024-12-05",
        imageUrl: "/blog/crm-growth.jpg",
        title: "Πώς το CRM αυξάνει τις πωλήσεις κατά 40%",
        category: "Sales Automation",
        excerpt: "Η αυτοματοποίηση των διαδικασιών πωλήσεων μέσω Soft1 CRM Series 6, προσφέρει μια πανοραμική εικόνα 360° του πελατολογίου, διευκολύνοντας την παραγωγικότητα."
    },
    {
        slug: "ai-in-business-2025",
        author: "Tech Staff",
        published: "2025-01-10",
        imageUrl: "/blog/ai-future.jpg",
        title: "Ο ρόλος του AI στις ελληνικές επιχειρήσεις το 2025",
        category: "Τεχνητή Νοημοσύνη",
        excerpt: "Μια ματιά στο μέλλον: Πώς οι υπηρεσίες τεχνητής νοημοσύνης μπαίνουν ραγδαία στο οργανόγραμμα των επιχειρήσεων μέσω εργαλείων αυτοματισμού."
    }
];
function BlogPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-monks-black flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pt-48 pb-24 overflow-hidden border-b border-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-[600px] h-[600px] bg-monks-accent/10 rounded-full blur-[150px] -translate-y-1/2"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#0A3D73]/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] z-0"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1500px] mx-auto px-6 md:px-12 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                ease: "easeOut"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-monks-accent font-medium tracking-widest mb-4 block text-sm",
                                    children: "Ειδήσεις & Insights"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl lg:text-[6rem] font-bold text-white mb-6 leading-[1.1]",
                                    children: [
                                        "Τεχνολογικά ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-transparent bg-clip-text bg-gradient-to-r from-monks-light to-white/50",
                                            children: "Νέα"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-monks-light max-w-2xl leading-relaxed",
                                    children: "Μάθετε πρώτοι για τις τεχνολογικές εξελίξεις, μελέτες επιτυχίας και τρόπους ανάπτυξης μέσα από τις τελευταίες μας δημοσιεύσεις."
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 relative flex-grow bg-[#0a0f18] z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1500px] mx-auto px-6 md:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: blog.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${post.slug}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 40
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.1
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: index * 0.1
                                    },
                                    className: "group relative h-full flex flex-col overflow-hidden rounded-[2rem] bg-monks-black border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-64 w-full bg-monks-gray relative overflow-hidden flex items-center justify-center border-b border-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-tr from-monks-accent/20 to-transparent mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1/2 h-full absolute flex space-x-2 -skew-x-[30deg] bg-white/5 group-hover:bg-monks-accent/5 transition-colors duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/20 font-black text-4xl opacity-50 group-hover:scale-110 transition-transform duration-700 blur-sm",
                                                    children: post.category.substring(0, 3).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 flex flex-col flex-grow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-4 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-4 py-1.5 rounded-full text-xs font-bold text-monks-accent bg-monks-accent/10",
                                                            children: post.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-xs text-monks-light font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 49
                                                                }, this),
                                                                new Date(post.published).toLocaleDateString('el-GR', {
                                                                    day: '2-digit',
                                                                    month: 'short',
                                                                    year: 'numeric'
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-white mb-4 group-hover:text-monks-accent transition-colors duration-500 line-clamp-3",
                                                    children: post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-monks-light text-sm leading-relaxed flex-grow mb-8 line-clamp-4",
                                                    children: post.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-6 mt-auto border-t border-white/5 flex items-center justify-between text-white text-sm font-bold group-hover:text-monks-light transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-full bg-monks-gray border border-white/10 flex items-center justify-center text-xs",
                                                                    children: "DG"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white/60 font-medium text-xs",
                                                                    children: post.author
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-monks-accent group-hover:gap-4 transition-all",
                                                            children: [
                                                                "Άρθρο",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                                    lineNumber: 115,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 33
                                }, this)
                            }, index, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                                lineNumber: 73,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/dgsoft-website-v2/app/blog/page.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Pictures_dgsoft-website-v2_app_82d10dbe._.js.map