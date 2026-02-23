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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navLinks = [
    {
        name: "Solutions",
        href: "#solutions"
    },
    {
        name: "Work",
        href: "#work"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Contact",
        href: "#contact"
    }
];
function Navigation() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-12",
                                children: [
                                    navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "text-sm font-medium text-monks-light hover:text-white transition-colors line-animation",
                                            children: link.name
                                        }, link.name, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        className: "px-6 py-3 bg-white text-monks-black font-semibold text-sm rounded-full hover:bg-monks-accent hover:text-white transition-colors",
                                        children: "Get in Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "md:hidden relative z-50 p-2",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                lineNumber: 29,
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
                            navLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        className: "text-4xl font-bold text-white hover:text-monks-accent transition-colors",
                                        children: link.name
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this)
                                }, link.name, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this)),
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
                                className: "mt-8 px-8 py-4 bg-monks-accent text-white font-semibold rounded-full",
                                children: "Get in Touch"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/components/Navigation.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navigation, "PYTXP+Ba4zUSToikH9IFTduq6jI=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-monks-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.2,
                                1
                            ],
                            opacity: [
                                0.3,
                                0.5,
                                0.3
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "absolute top-1/4 -left-32 w-[600px] h-[600px] bg-monks-accent/30 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.3,
                                1
                            ],
                            opacity: [
                                0.2,
                                0.4,
                                0.2
                            ]
                        },
                        transition: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        },
                        className: "absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-monks-red-dark/30 rounded-full blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 py-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                className: "flex items-center gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-[1px] bg-monks-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    "Από το ERP στο ολοκληρωμένο ψηφιακό σου οικοσύστημα"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.4,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                className: "text-display-md font-bold text-white mb-8 leading-[1.1]",
                                children: [
                                    "Business ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "Forward"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                        lineNumber: 61,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.6
                                },
                                className: "text-xl md:text-2xl text-monks-light max-w-3xl mb-12 leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "DGSOFT"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    ": Ο επίσημος και πιστοποιημένος συνεργάτης SoftOne που συνδέει ERP, CRM, CTI & Cloud τηλεφωνία σε μία ενιαία εμπειρία, με φυσική παρουσία σε Αθήνα, Θεσσαλονίκη, Κύπρο, Ιωάννινα και Βόλο."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.8
                                },
                                className: "flex flex-wrap items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#contact",
                                        className: "group px-8 py-4 bg-white text-monks-black font-semibold rounded-full hover:bg-monks-accent hover:text-white transition-all duration-300 flex items-center gap-3",
                                        children: [
                                            "Κλείσε Παρουσίαση",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                animate: {
                                                    x: [
                                                        0,
                                                        4,
                                                        0
                                                    ]
                                                },
                                                transition: {
                                                    duration: 1.5,
                                                    repeat: Infinity
                                                },
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "group flex items-center gap-3 text-white hover:text-monks-accent transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-monks-accent transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "Ζητήστε αξιολόγηση ψηφιακής ωριμότητας"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            delay: 1
                        },
                        className: "absolute bottom-12 left-6 md:left-12 right-6 md:right-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-white/10",
                            children: [
                                {
                                    number: "150+",
                                    label: "Projects Delivered"
                                },
                                {
                                    number: "10+",
                                    label: "Years Experience"
                                },
                                {
                                    number: "50+",
                                    label: "Global Clients"
                                },
                                {
                                    number: "25+",
                                    label: "Team Members"
                                }
                            ].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl md:text-4xl font-bold text-white mb-1",
                                            children: stat.number
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-monks-light",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.2
                },
                className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        y: [
                            0,
                            8,
                            0
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    className: "flex flex-col items-center gap-2 text-monks-light",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs tracking-widest uppercase",
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Hero.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/dgsoft-website-v2/app/hooks/useScrollAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useScrollAnimation(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollAnimation.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useScrollAnimation.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                }
            }["useScrollAnimation.useEffect"], {
                threshold
            });
            const currentRef = ref.current;
            if (currentRef) {
                observer.observe(currentRef);
            }
            return ({
                "useScrollAnimation.useEffect": ()=>{
                    if (currentRef) {
                        observer.unobserve(currentRef);
                    }
                }
            })["useScrollAnimation.useEffect"];
        }
    }["useScrollAnimation.useEffect"], [
        threshold
    ]);
    return {
        ref,
        isVisible
    };
}
_s(useScrollAnimation, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Solutions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/app/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const solutions = [
    {
        number: "01",
        title: "Soft1 Cloud ERP",
        description: "Το Soft1 Cloud ERP αποτελεί μία από τις πλέον σύγχρονες λύσεις business λογισμικού, σχεδιασμένη με υψηλές τεχνικές προδιαγραφές. Μέσα από ένα ενιαίο περιβάλλον διαχειρίζεστε οικονομικά, αποθήκη, εμπορική διαχείριση, παραγωγή, service και reporting.",
        tags: [
            "ERP",
            "Cloud",
            "Business"
        ]
    },
    {
        number: "02",
        title: "Soft1 Cloud CRM",
        description: "Με το Soft1 Cloud CRM σχεδιάζετε και παρακολουθείτε όλο το ταξίδι του πελάτη. Αυτοματοποιείτε follow-ups, διαχειρίζεστε leads, οργανώνετε καμπάνιες marketing και ενοποιείτε όλα τα δεδομένα σε μία κεντρική πλατφόρμα.",
        tags: [
            "CRM",
            "Sales",
            "Marketing"
        ]
    },
    {
        number: "03",
        title: "CTI – Contact Center Manager",
        description: "Το CCM/CTI της DGSOFT συνδέει το τηλεφωνικό σας κέντρο με το ERP/CRM. Προσφέρει αυτοματοποιημένη διαχείριση κλήσεων, δρομολόγηση με επιχειρησιακούς κανόνες, υλοποίηση σύνθετων IVR και αναλυτικό reporting.",
        tags: [
            "CTI",
            "VoIP",
            "Contact Center"
        ]
    },
    {
        number: "04",
        title: "DGSOFT ePayments",
        description: "Αυτοματοποιεί τη διαδικασία είσπραξης οφειλών από πελάτες και συνεργάτες μέσω DIAS",
        tags: [
            "Payments",
            "DIAS",
            "Automation"
        ]
    }
];
function Solutions() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "solutions",
        className: "py-32 bg-monks-black relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[800px] h-[800px] bg-monks-red-dark/10 rounded-full blur-[150px] -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1800px] mx-auto px-6 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-number",
                                children: "Our Solutions"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-display-md font-bold text-white max-w-4xl",
                                children: [
                                    "Οι Λύσεις & ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "Υπηρεσίες"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                        lineNumber: 53,
                                        columnNumber: 25
                                    }, this),
                                    " Μας"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-8",
                        children: solutions.map((solution, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40,
                                    scale: 0.95
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                },
                                viewport: {
                                    once: true,
                                    margin: "-50px"
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    type: "spring",
                                    bounce: 0.4
                                },
                                className: "group relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-2xl bg-monks-gray border border-white/5 hover:border-monks-accent/50 transition-colors duration-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[16/10] overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-monks-gray via-transparent to-transparent z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-monks-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-gradient-to-br from-monks-dark to-monks-gray flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-monks-light text-sm",
                                                        children: solution.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-6 left-6 z-20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-6xl font-bold text-white/10 group-hover:text-monks-accent/30 transition-colors",
                                                        children: solution.number
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        className: "w-5 h-5 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-white mb-3 group-hover:text-monks-accent transition-colors",
                                                    children: solution.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-monks-light mb-6 leading-relaxed",
                                                    children: solution.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: solution.tags.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 text-xs font-medium text-monks-light bg-white/5 rounded-full border border-white/10",
                                                            children: tag
                                                        }, idx, false, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.3
                        },
                        className: "mt-20 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-monks-light mb-8 max-w-2xl mx-auto",
                                children: "Ο ψηφιακός μετασχηματισμός δεν είναι ένα project, αλλά μια συνεχής διαδικασία. Στη DGSOFT αναλαμβάνουμε ρόλο συμβούλου και τεχνικού συνεργάτη σε κάθε βήμα."
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white hover:text-monks-black transition-all duration-300",
                                children: "Δες όλες τις υπηρεσίες"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Solutions.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(Solutions, "HYNv5rEifZ1S+vJhPkZEtot8gHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = Solutions;
var _c;
__turbopack_context__.k.register(_c, "Solutions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/app/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const projects = [
    {
        client: "Retail Chain S.A.",
        title: "Μετάβαση στο Soft1 Cloud ERP",
        description: "Πλήρης μηχανογράφηση 15 καταστημάτων και ενοποίηση αποθήκης.",
        category: "ERP & Εμπόριο",
        year: "2024",
        color: "from-monks-red-dark to-monks-accent"
    },
    {
        client: "Telecom Partner",
        title: "Αυτοματοποίηση με 3K Billing",
        description: "Διαχείριση σύνθετων τηλεπικοινωνιακών χρεώσεων και έκδοση 50.000 λογαριασμών/μήνα.",
        category: "Τιμολόγηση",
        year: "2024",
        color: "from-monks-accent to-monks-red-light"
    },
    {
        client: "Υπηρεσίες Υγείας",
        title: "Ενοποίηση CRM & CTI",
        description: "Call center integration με άμεση αναγνώριση κλήσης ασθενών.",
        category: "CRM & CTI",
        year: "2023",
        color: "from-monks-red-dark to-monks-red-light"
    },
    {
        client: "B2B Διανομέας",
        title: "Mobile Πωλήσεις μέσω Soft1 SFA",
        description: "Πλήρης εικόνα αποθέματος και άμεση παραγγελιοληψία στο tablet του πωλητή.",
        category: "Field Sales",
        year: "2023",
        color: "from-monks-red-light to-monks-accent"
    }
];
function Work() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        className: "py-32 bg-monks-dark relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-monks-accent/10 rounded-full blur-[150px] translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1800px] mx-auto px-6 md:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "section-number",
                                        children: "Κλαδοι"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-display-md font-bold text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gradient-text",
                                                children: "Λύσεις"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            " για κάθε",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                lineNumber: 62,
                                                columnNumber: 69
                                            }, this),
                                            "επιχείρηση."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "self-start md:self-auto px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white hover:text-monks-black transition-all duration-300 flex items-center gap-2 group",
                                children: [
                                    "Περισσότερα Έργα",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0",
                        children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: "-50px"
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    type: "spring",
                                    bounce: 0.3
                                },
                                className: "group border-t border-white/10 last:border-b hover:border-monks-accent/50 transition-colors duration-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-8 md:py-12 grid md:grid-cols-12 gap-6 md:gap-8 items-center cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2 flex md:flex-col gap-4 md:gap-2 text-sm text-monks-light",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: project.year
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-monks-accent",
                                                    children: project.category
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-monks-accent transition-colors",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-monks-light",
                                                    children: project.client
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-monks-light leading-relaxed",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-1 flex justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-monks-accent group-hover:border-monks-accent transition-all duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    className: "w-5 h-5 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40,
                            scale: 0.95
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.2,
                            type: "spring",
                            bounce: 0.4
                        },
                        className: "mt-20 relative rounded-3xl overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-monks-accent/20 to-monks-red-dark/20"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-monks-black/60 backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 p-8 md:p-16 grid md:grid-cols-2 gap-8 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-monks-accent font-medium mb-4 block",
                                                children: "Επιδοτούμενα Προγράμματα"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl md:text-5xl font-bold text-white mb-6",
                                                children: "Κάνε την ψηφιακή αναβάθμιση με επιδότηση"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-monks-light mb-8 text-lg",
                                                children: "Η DGSOFT σε βοηθά να αποκτήσεις Soft1 ERP, CRM, CTI και ειδικές πλατφόρμες με σημαντική επιδότηση ή και χωρίς ίδιο κόστος επένδυσης."
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-8 py-4 bg-white text-monks-black font-semibold rounded-full hover:bg-monks-accent hover:text-white transition-all duration-300",
                                                children: "Μάθε Περισσότερα"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-monks-gray to-monks-dark flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-6xl font-bold gradient-text mb-2",
                                                    children: "ΕΣΠΑ"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-monks-light",
                                                    children: "Ψηφιακά Εργαλεία"
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Work.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Work, "HYNv5rEifZ1S+vJhPkZEtot8gHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/app/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const awards = [
    {
        title: "SoftOne Gold Partner",
        org: "2018-2024"
    },
    {
        title: "Best Cloud Implementations",
        org: "Partner Awards"
    },
    {
        title: "Customer Success 360",
        org: "DGSOFT Quality"
    }
];
const values = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "15+ Χρόνια Εμπειρίας",
        description: "Δίπλα στις επιχειρήσεις ως εξιδεικευμένος συνεργάτης από το 2006."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Επίσημος Συνεργάτης SoftOne",
        description: "Πιστοποιημένη τεχνογνωσία σε κάθε πτυχή λογισμικού."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Εθνική & Κυπριακή Εμβέλεια",
        description: "Υποστήριξη σε Αθήνα, Θεσσαλονίκη, Ιωάννινα, Βόλο, και Κύπρο."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        title: "SLA-Based Υποστήριξη",
        description: "Η τεχνολογία έχει αξία μόνο όταν υποστηρίζεται και είμαστε δίπλα σας."
    }
];
function About() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-32 bg-monks-black relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[20vw] font-bold text-white/[0.02] whitespace-nowrap",
                    children: "DGSOFT"
                }, void 0, false, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1800px] mx-auto px-6 md:px-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ref: ref,
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: isVisible ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.8
                        },
                        className: "mb-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-number",
                                children: "Ποιοι Ειμαστε"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-display-lg font-bold text-white max-w-5xl mb-12",
                                children: [
                                    "Από το 2006, σταθερά δίπλα στην ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "επιχείρησή σας"
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                        lineNumber: 59,
                                        columnNumber: 45
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-12 max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-monks-light leading-relaxed",
                                        children: "Η DGSOFT είναι μια δυναμικά εξελισσόμενη εταιρεία πληροφορικής, με στενή και επίσημη συνεργασία με τη SoftOne. Εξειδικευόμαστε στη διάθεση και υλοποίηση πρωτοποριακών μηχανογραφικών λύσεων λογισμικού (ERP – CRM), βοηθώντας εκατοντάδες εταιρείες να οργανώσουν και να αυτοματοποιήσουν την καθημερινή τους λειτουργία."
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-monks-light leading-relaxed",
                                        children: "Συνδυάζουμε τεχνογνωσία σε ERP, CRM και CTI για επιχειρήσεις και εμπόριο. Η ομάδα μας αποτελείται από έμπειρους επαγγελματίες και τεχνικούς, ώστε το έργο σας να ολοκληρώνεται με συνέπεια και μετρήσιμα αποτελέσματα."
                                    }, void 0, false, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: isVisible ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.8,
                            delay: 0.2
                        },
                        className: "mb-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-monks-light mb-12 tracking-widest uppercase",
                                children: "Διακρισεις"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-8",
                                children: awards.map((award, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: isVisible ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.3 + index * 0.1
                                        },
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl font-bold text-white/10 group-hover:text-monks-accent/30 transition-colors mb-4",
                                                children: [
                                                    "0",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xl font-bold text-white mb-2",
                                                children: award.title
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-monks-light",
                                                children: award.org
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: isVisible ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.8,
                            delay: 0.4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-monks-light mb-12 tracking-widest uppercase",
                                children: "Η Προσεγγιση Μας"
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                                children: values.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: isVisible ? {
                                            opacity: 1,
                                            y: 0
                                        } : {},
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.5 + index * 0.1
                                        },
                                        className: "group p-6 rounded-2xl bg-monks-gray/30 border border-white/5 hover:border-monks-accent/30 transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(value.icon, {
                                                className: "w-8 h-8 text-monks-accent mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-bold text-white mb-2",
                                                children: value.title
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-monks-light",
                                                children: value.description
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: isVisible ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.8,
                            delay: 0.6
                        },
                        className: "mt-32 pt-12 border-t border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                            children: [
                                {
                                    value: "2006",
                                    label: "Έτος Ίδρυσης"
                                },
                                {
                                    value: "3K+",
                                    label: "Άδειες"
                                },
                                {
                                    value: "5",
                                    label: "Κόμβοι (GR, CY)"
                                },
                                {
                                    value: "100%",
                                    label: "Εστίαση Πελάτη"
                                }
                            ].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center md:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl md:text-5xl font-bold text-white mb-2",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-monks-light text-sm",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/About.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(About, "HYNv5rEifZ1S+vJhPkZEtot8gHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/app/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Contact() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])(0.1);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-32 bg-monks-dark relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[800px] h-[800px] bg-monks-accent/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2"
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1800px] mx-auto px-6 md:px-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ref: ref,
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            animate: isVisible ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-number",
                                    children: "Επικοινωνια"
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-display-md font-bold text-white mb-8",
                                    children: [
                                        "Ας δημιουργήσουμε",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                            lineNumber: 39,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text",
                                            children: "κάτι"
                                        }, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                            lineNumber: 40,
                                            columnNumber: 58
                                        }, this),
                                        "εξαιρετικό."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-monks-light mb-12 max-w-md",
                                    children: "Είστε έτοιμοι να μετασχηματίσετε την επιχείρησή σας; Θέλετε να συζητήσουμε τις ανάγκες της δικής σας επιχείρησης σε Αθήνα, Θεσσαλονίκη, Κύπρο, Ιωάννινα ή Βόλο; Συμπληρώστε τη φόρμα ή καλέστε μας για να κλείσουμε μια στοχευμένη παρουσίαση."
                                }, void 0, false, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:info@dgsoft.gr",
                                            className: "flex items-center gap-4 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full bg-monks-gray flex items-center justify-center group-hover:bg-monks-accent transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "w-5 h-5 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-monks-light",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-medium group-hover:text-monks-accent transition-colors",
                                                            children: "info@dgsoft.gr"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+302105711581",
                                            className: "flex items-center gap-4 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full bg-monks-gray flex items-center justify-center group-hover:bg-monks-accent transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "w-5 h-5 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-monks-light",
                                                            children: "Τηλέφωνο"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-medium group-hover:text-monks-accent transition-colors",
                                                            children: "210 5711581"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full bg-monks-gray flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-5 h-5 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-monks-light",
                                                            children: "Διεύθυνση"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-medium",
                                                            children: "Λεωφ. Κηφισού 48, Περιστέρι – 121 33, 1ος όροφος"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            animate: isVisible ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.8,
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm text-monks-light mb-2",
                                                        children: "Όνομα"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.name,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                name: e.target.value
                                                            }),
                                                        className: "w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors",
                                                        placeholder: "Όνομα Επώνυμο"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm text-monks-light mb-2",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: formData.email,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                email: e.target.value
                                                            }),
                                                        className: "w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors",
                                                        placeholder: "email@εταιρεία.gr"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-monks-light mb-2",
                                                children: "Εταιρεία"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: formData.company,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        company: e.target.value
                                                    }),
                                                className: "w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors",
                                                placeholder: "Επωνυμία επιχείρησης"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-monks-light mb-2",
                                                children: "Μήνυμα"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 5,
                                                value: formData.message,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        message: e.target.value
                                                    }),
                                                className: "w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors resize-none",
                                                placeholder: "Πώς μπορούμε να σας βοηθήσουμε;"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "w-full bg-white text-monks-black font-bold py-5 rounded-xl hover:bg-monks-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group",
                                        children: [
                                            "Αποστολή Μηνύματος",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Pictures/dgsoft-website-v2/app/sections/Contact.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Contact, "nNyQaU2+3wG8bOsL7s2YXSiVmZw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
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
            name: "Blog",
            href: "#"
        },
        {
            name: "Case Studies",
            href: "#"
        },
        {
            name: "Documentation",
            href: "#"
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
]);

//# sourceMappingURL=Pictures_dgsoft-website-v2_app_46a5bae3._.js.map