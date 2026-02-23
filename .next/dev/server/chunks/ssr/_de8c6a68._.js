module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 140,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: "ml-auto"
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dropdown-menu.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 110,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 124,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 148,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 164,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
}),
"[project]/app/lib/actions/data:14f52b [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPeriferia",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"407d7e3fde0ace304e8947b21af5134a958fc73015":"createPeriferia"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("407d7e3fde0ace304e8947b21af5134a958fc73015", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createPeriferia");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FzT3NCLDhMQUFBIn0=
}),
"[project]/app/lib/actions/data:79e132 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updatePeriferia",
    ()=>$$RSC_SERVER_ACTION_12
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6061249de8e3727f4af61f2be056e1516530582528":"updatePeriferia"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6061249de8e3727f4af61f2be056e1516530582528", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updatePeriferia");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0E4T3NCLDhMQUFBIn0=
}),
"[project]/app/lib/actions/data:0cea93 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deletePeriferia",
    ()=>$$RSC_SERVER_ACTION_13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40f9ec73bb28f0dc7702468fb83561de9d426c8075":"deletePeriferia"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40f9ec73bb28f0dc7702468fb83561de9d426c8075", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deletePeriferia");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FzUHNCLDhMQUFBIn0=
}),
"[project]/app/lib/actions/data:e0f3c2 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "importKallikratis",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"008bc656ad4e5dd4de1365153fbb37679aff7c0212":"importKallikratis"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("008bc656ad4e5dd4de1365153fbb37679aff7c0212", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "importKallikratis");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0E4UHNCLGdNQUFBIn0=
}),
"[project]/app/lib/actions/data:a18015 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translateAllPeriferies",
    ()=>$$RSC_SERVER_ACTION_15
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00c1935136d03117487018c1f21e3f4576fe5bd57b":"translateAllPeriferies"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00c1935136d03117487018c1f21e3f4576fe5bd57b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "translateAllPeriferies");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0FvV3NCLHFNQUFBIn0=
}),
"[project]/components/admin/eu-programs/data-table-periferies.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTablePeriferies",
    ()=>DataTablePeriferies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-ssr] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DownloadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-download.js [app-ssr] (ecmascript) <export default as DownloadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-ssr] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$14f52b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:14f52b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$79e132__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:79e132 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$0cea93__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:0cea93 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$e0f3c2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:e0f3c2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$a18015__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:a18015 [app-ssr] (ecmascript) <text/javascript>");
"use client";
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
// Level metadata
const LEVEL_META = {
    3: {
        label: "Περιφέρεια",
        color: "text-blue-700 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-950/40",
        childLabel: "Νομός / Ενότητα"
    },
    4: {
        label: "Νομός / Ενότητα",
        color: "text-emerald-700 dark:text-emerald-400",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        childLabel: "Δήμος"
    },
    5: {
        label: "Δήμος",
        color: "text-amber-700 dark:text-amber-400",
        bg: "bg-amber-50 dark:bg-amber-950/20",
        childLabel: "Περιοχή"
    },
    6: {
        label: "Περιοχή",
        color: "text-purple-700 dark:text-purple-400",
        bg: "bg-purple-50 dark:bg-purple-950/20",
        childLabel: ""
    }
};
async function translateSingleNode(node) {
    const apiKey = process.env.NEXT_PUBLIC_TRANSLATE_ENABLED // just a UI clue; actual call goes through route
    ;
    // We call the existing /api/admin/translate route
    const res = await fetch("/api/admin/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: node.nameEL,
            targetLang: "en"
        })
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.translated || null;
}
function PeriferiaNode({ node, depth, onEdit, onDelete, onAddChild, onTranslated }) {
    const [expanded, setExpanded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](depth === 0);
    const [translating, setTranslating] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const hasChildren = node.children && node.children.length > 0;
    const meta = LEVEL_META[node.level] ?? LEVEL_META[6];
    const indentPx = depth * 20;
    const handleTranslate = async ()=>{
        setTranslating(true);
        try {
            const translated = await translateSingleNode(node);
            if (translated) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$79e132__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updatePeriferia"])(node.id, {
                    nameEN: translated
                });
                onTranslated(node.id, translated);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Translated: ${translated}`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Translation failed");
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(e.message);
        } finally{
            setTranslating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-2 px-3 py-2 hover:bg-muted/40 transition-colors border-b border-border/30 ${meta.bg}`,
                style: {
                    paddingLeft: `${12 + indentPx}px`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setExpanded(!expanded),
                        className: `flex-shrink-0 p-0.5 rounded hover:bg-black/10 transition-opacity ${hasChildren ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                        children: expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-3.5 h-3.5 text-gray-700 dark:text-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 94,
                            columnNumber: 27
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-3.5 h-3.5 text-gray-700 dark:text-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 95,
                            columnNumber: 27
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded border flex-shrink-0 ${meta.color} border-current/30`,
                        children: meta.label
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs text-muted-foreground flex-shrink-0",
                        children: node.code
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 text-sm font-medium text-foreground truncate",
                        children: node.nameEL
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this),
                    node.nameEN ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground italic hidden md:block truncate max-w-[200px]",
                        children: node.nameEN
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 112,
                        columnNumber: 23
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground/40 italic hidden md:block",
                        children: "no translation"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 113,
                        columnNumber: 23
                    }, this),
                    hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "text-[10px] flex-shrink-0",
                        children: node.children.length
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "h-7 w-7 p-0 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 124,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "end",
                                className: "w-44",
                                children: [
                                    meta.childLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: "cursor-pointer text-xs",
                                                onClick: ()=>onAddChild(node),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-3.5 h-3.5 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 37
                                                    }, this),
                                                    "Add ",
                                                    meta.childLabel
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                lineNumber: 131,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                lineNumber: 134,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "cursor-pointer text-xs",
                                        onClick: ()=>onEdit(node),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                className: "w-3.5 h-3.5 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                lineNumber: 138,
                                                columnNumber: 29
                                            }, this),
                                            "Edit"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "cursor-pointer text-xs",
                                        onClick: handleTranslate,
                                        disabled: translating,
                                        children: [
                                            translating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                                className: "w-3.5 h-3.5 mr-2 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                lineNumber: 142,
                                                columnNumber: 35
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                                className: "w-3.5 h-3.5 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                lineNumber: 143,
                                                columnNumber: 35
                                            }, this),
                                            "Translate to EN"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        className: "cursor-pointer text-xs text-red-500",
                                        onClick: ()=>onDelete(node),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-3.5 h-3.5 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, this),
                                            "Delete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            expanded && hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: node.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PeriferiaNode, {
                        node: child,
                        depth: depth + 1,
                        onEdit: onEdit,
                        onDelete: onDelete,
                        onAddChild: onAddChild,
                        onTranslated: onTranslated
                    }, child.id, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 159,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 157,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
function DataTablePeriferies({ data: initialData }) {
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](initialData || []);
    const [search, setSearch] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    const [isDialogOpen, setIsDialogOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [editingItem, setEditingItem] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [addingToParent, setAddingToParent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [isSaving, setIsSaving] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isTranslating, setIsTranslating] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isImporting, setIsImporting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [formData, setFormData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        code: "",
        nameEL: "",
        nameEN: "",
        level: 3,
        parentCode: ""
    });
    const openEdit = (item)=>{
        setAddingToParent(null);
        setEditingItem(item);
        setFormData({
            code: item.code,
            nameEL: item.nameEL,
            nameEN: item.nameEN || "",
            level: item.level,
            parentCode: item.parentCode || ""
        });
        setIsDialogOpen(true);
    };
    const openAddRoot = ()=>{
        setEditingItem(null);
        setAddingToParent(null);
        setFormData({
            code: "",
            nameEL: "",
            nameEN: "",
            level: 3,
            parentCode: ""
        });
        setIsDialogOpen(true);
    };
    const openAddChild = (parent)=>{
        setEditingItem(null);
        setAddingToParent(parent);
        const childLevel = Math.min(parent.level + 1, 6);
        setFormData({
            code: "",
            nameEL: "",
            nameEN: "",
            level: childLevel,
            parentCode: parent.code
        });
        setIsDialogOpen(true);
    };
    const handleDelete = async (item)=>{
        const meta = LEVEL_META[item.level] ?? LEVEL_META[6];
        if (!confirm(`Delete "${item.nameEL}" (${meta.label}) and all its sub-regions?`)) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$0cea93__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletePeriferia"])(item.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Region deleted");
            setTimeout(()=>window.location.reload(), 500);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message);
        }
    };
    const handleTranslated = (id, nameEN)=>{
        // Update in local state tree
        const updateTree = (nodes)=>nodes.map((n)=>n.id === id ? {
                    ...n,
                    nameEN
                } : {
                    ...n,
                    children: n.children ? updateTree(n.children) : undefined
                });
        setData((prev)=>updateTree(prev));
    };
    const handleSave = async ()=>{
        setIsSaving(true);
        try {
            if (!formData.nameEL.trim()) throw new Error("Greek name is required");
            if (!formData.code.trim()) throw new Error("Code is required");
            const payload = {
                code: formData.code.trim(),
                nameEL: formData.nameEL.trim(),
                nameEN: formData.nameEN.trim() || null,
                level: formData.level,
                parentCode: formData.parentCode.trim() || null
            };
            if (editingItem) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$79e132__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updatePeriferia"])(editingItem.id, payload);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Region updated");
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$14f52b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createPeriferia"])(payload);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Region created");
            }
            setIsDialogOpen(false);
            setTimeout(()=>window.location.reload(), 500);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message);
        } finally{
            setIsSaving(false);
        }
    };
    const handleImport = async ()=>{
        if (!confirm("Sync Kallikratis directory from GitHub? This may take 30-60 seconds.")) return;
        setIsImporting(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("Syncing Kallikratis data...", {
            id: 'import'
        });
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$e0f3c2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["importKallikratis"])();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Synced ${res.count} regions from Kallikratis!`, {
                id: 'import'
            });
            setTimeout(()=>window.location.reload(), 1000);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Sync failed: ${err.message}`, {
                id: 'import'
            });
        } finally{
            setIsImporting(false);
        }
    };
    const handleTranslateAll = async ()=>{
        if (!confirm("Translate all regions without English names via AI? Runs in batches of 50.")) return;
        setIsTranslating(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].loading("AI translating regions...", {
            id: 'translate'
        });
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$a18015__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateAllPeriferies"])();
            if (res.count === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(res.message ?? "All regions already translated!", {
                    id: 'translate'
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Translated ${res.count} regions. ${res.remaining} still pending.`, {
                    id: 'translate'
                });
            }
            setTimeout(()=>window.location.reload(), 1500);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(err.message, {
                id: 'translate'
            });
        } finally{
            setIsTranslating(false);
        }
    };
    // Simple search filter on names
    const filteredData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!search.trim()) return data;
        const q = search.toLowerCase();
        const filterTree = (nodes)=>nodes.flatMap((n)=>{
                const match = n.nameEL.toLowerCase().includes(q) || (n.nameEN?.toLowerCase().includes(q) ?? false) || n.code.includes(q);
                const filteredChildren = n.children ? filterTree(n.children) : [];
                if (match || filteredChildren.length > 0) return [
                    {
                        ...n,
                        children: filteredChildren
                    }
                ];
                return [];
            });
        return filterTree(data);
    }, [
        data,
        search
    ]);
    // Legend
    const levelEntries = Object.entries(LEVEL_META).filter(([, v])=>v.label);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Search region, code...",
                                className: "max-w-xs text-sm",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 319,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: openAddRoot,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 326,
                                        columnNumber: 25
                                    }, this),
                                    " Add Root"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 325,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 318,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleTranslateAll,
                                disabled: isTranslating,
                                className: "border-indigo-400/40 text-indigo-600 hover:bg-indigo-50",
                                children: [
                                    isTranslating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                        className: "w-4 h-4 mr-1.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 337,
                                        columnNumber: 42
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-4 h-4 mr-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 337,
                                        columnNumber: 99
                                    }, this),
                                    "Translate All (EN)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 330,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: handleImport,
                                disabled: isImporting,
                                className: "bg-black hover:bg-black/80 text-white",
                                children: [
                                    isImporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                        className: "w-4 h-4 mr-1.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 346,
                                        columnNumber: 40
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DownloadCloud$3e$__["DownloadCloud"], {
                                        className: "w-4 h-4 mr-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 346,
                                        columnNumber: 97
                                    }, this),
                                    "Sync Kallikratis"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 340,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 329,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 317,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: levelEntries.map(([lvl, meta])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded border ${meta.color} border-current/30 ${meta.bg}`,
                        children: [
                            "Επίπεδο ",
                            lvl,
                            ": ",
                            meta.label
                        ]
                    }, lvl, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 355,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 353,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border bg-card shadow overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted px-4 py-2.5 border-b flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
                                children: "Ιεραρχική Δομή Περιφερειών"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 364,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "outline",
                                className: "text-xs",
                                children: [
                                    filteredData.length,
                                    " ρίζες"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 365,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 363,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-[72vh] overflow-y-auto bg-background",
                        children: filteredData.length > 0 ? filteredData.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PeriferiaNode, {
                                node: node,
                                depth: 0,
                                onEdit: openEdit,
                                onDelete: handleDelete,
                                onAddChild: openAddChild,
                                onTranslated: handleTranslated
                            }, node.id, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 371,
                                columnNumber: 29
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-12 text-center text-muted-foreground text-sm",
                            children: search ? "No regions match your search." : "No regions found. Click \"Sync Kallikratis\" to import the full Greek administrative directory."
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 382,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 368,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 362,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-lg bg-background text-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "flex items-center gap-2",
                                children: editingItem ? `Edit: ${editingItem.nameEL}` : addingToParent ? `Add ${LEVEL_META[addingToParent.level + 1]?.label ?? "Sub-region"} under ${addingToParent.nameEL}` : "Add Root Περιφέρεια"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 393,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 392,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs font-semibold",
                                                    children: "Code *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    className: "mt-1 font-mono text-sm",
                                                    value: formData.code,
                                                    onChange: (e)=>setFormData((f)=>({
                                                                ...f,
                                                                code: e.target.value
                                                            })),
                                                    placeholder: "e.g. 111, 11101"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 405,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs font-semibold",
                                                    children: "Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: String(formData.level),
                                                    onValueChange: (v)=>setFormData((f)=>({
                                                                ...f,
                                                                level: parseInt(v)
                                                            })),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            className: "mt-1 text-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 77
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "3",
                                                                    children: "3 – Περιφέρεια"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "4",
                                                                    children: "4 – Νομός / Ενότητα"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "5",
                                                                    children: "5 – Δήμος"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "6",
                                                                    children: "6 – Περιοχή"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 409,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 404,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs font-semibold",
                                            children: "Parent Code"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 424,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            className: "mt-1 font-mono text-sm",
                                            value: formData.parentCode,
                                            onChange: (e)=>setFormData((f)=>({
                                                        ...f,
                                                        parentCode: e.target.value
                                                    })),
                                            placeholder: "Leave empty for root"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 425,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 423,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs font-semibold",
                                            children: "Name (Greek) *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 429,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            className: "mt-1",
                                            value: formData.nameEL,
                                            onChange: (e)=>setFormData((f)=>({
                                                        ...f,
                                                        nameEL: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 430,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 428,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs font-semibold",
                                            children: "Name (English)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 433,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            className: "mt-1",
                                            value: formData.nameEN,
                                            onChange: (e)=>setFormData((f)=>({
                                                        ...f,
                                                        nameEN: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 434,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 432,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 403,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4 border-t mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>setIsDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 439,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    disabled: isSaving,
                                    onClick: handleSave,
                                    className: "bg-black hover:bg-black/80 text-white",
                                    children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                        className: "w-4 h-4 mr-1.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 441,
                                        columnNumber: 41
                                    }, this) : "Save"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 440,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 438,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                    lineNumber: 391,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 390,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
        lineNumber: 315,
        columnNumber: 9
    }, this);
}
}),
"[project]/hooks/use-mobile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}
}),
"[project]/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetOverlay",
    ()=>SheetOverlay,
    "SheetPortal",
    ()=>SheetPortal,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 68,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/sheet.tsx",
                        lineNumber: 67,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/components/ui/skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-primary/10", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/tooltip.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}),
"[project]/components/ui/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarContent",
    ()=>SidebarContent,
    "SidebarFooter",
    ()=>SidebarFooter,
    "SidebarGroup",
    ()=>SidebarGroup,
    "SidebarGroupAction",
    ()=>SidebarGroupAction,
    "SidebarGroupContent",
    ()=>SidebarGroupContent,
    "SidebarGroupLabel",
    ()=>SidebarGroupLabel,
    "SidebarHeader",
    ()=>SidebarHeader,
    "SidebarInput",
    ()=>SidebarInput,
    "SidebarInset",
    ()=>SidebarInset,
    "SidebarMenu",
    ()=>SidebarMenu,
    "SidebarMenuAction",
    ()=>SidebarMenuAction,
    "SidebarMenuBadge",
    ()=>SidebarMenuBadge,
    "SidebarMenuButton",
    ()=>SidebarMenuButton,
    "SidebarMenuItem",
    ()=>SidebarMenuItem,
    "SidebarMenuSkeleton",
    ()=>SidebarMenuSkeleton,
    "SidebarMenuSub",
    ()=>SidebarMenuSub,
    "SidebarMenuSubButton",
    ()=>SidebarMenuSubButton,
    "SidebarMenuSubItem",
    ()=>SidebarMenuSubItem,
    "SidebarProvider",
    ()=>SidebarProvider,
    "SidebarRail",
    ()=>SidebarRail,
    "SidebarSeparator",
    ()=>SidebarSeparator,
    "SidebarTrigger",
    ()=>SidebarTrigger,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-ssr] (ecmascript) <export default as PanelLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-mobile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
"use client";
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
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
function useSidebar() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
const SidebarProvider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref)=>{
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [openMobile, setOpenMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](defaultOpen);
    const open = openProp ?? _open;
    const setOpen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((value)=>{
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        } else {
            _setOpen(openState);
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }, [
        setOpenProp,
        open
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        return isMobile ? setOpenMobile((open)=>!open) : setOpen((open)=>!open);
    }, [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleKeyDown = (event)=>{
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        toggleSidebar
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar
        }), [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            delayDuration: 0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
                ref: ref,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 141,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/sidebar.tsx",
            lineNumber: 140,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 139,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref)=>{
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
            ref: ref,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/sidebar.tsx",
            lineNumber: 188,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
            open: openMobile,
            onOpenChange: setOpenMobile,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        className: "sr-only",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                children: "Sidebar"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sidebar.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                children: "Displays the mobile sidebar."
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sidebar.tsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/sidebar.tsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/ui/sidebar.tsx",
                        lineNumber: 219,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 204,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/sidebar.tsx",
            lineNumber: 203,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
                ...props,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-sidebar": "sidebar",
                    className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/sidebar.tsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 226,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Sidebar.displayName = "Sidebar";
const SidebarTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, onClick, ...props }, ref)=>{
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7", className),
        onClick: (event)=>{
            onClick?.(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {}, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 305,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        ref: ref,
        "data-sidebar": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 350,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 383,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        "data-sidebar": "separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-2 w-auto bg-sidebar-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 431,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 448,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 489,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full min-w-0 flex-col gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 502,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        "data-sidebar": "menu-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/menu-item relative", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 515,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const SidebarMenuButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sidebarMenuButtonVariants({
            variant,
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 570,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === "string") {
        tooltip = {
            children: tooltip
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: button
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 592,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                side: "right",
                align: "center",
                hidden: state !== "collapsed" || isMobile,
                ...tooltip
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 593,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 591,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, asChild = false, showOnHover = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 615,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 640,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, showIcon = false, ...props }, ref)=>{
    // Random width between 50 to 90%.
    const width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-8 items-center gap-2 rounded-md px-2", className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 676,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 max-w-[--skeleton-width] flex-1",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    "--skeleton-width": width
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 681,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 669,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu-sub",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 699,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 715,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0)));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ asChild = false, size = "md", isActive, className, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 729,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
;
}),
"[project]/components/nav-documents.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavDocuments",
    ()=>NavDocuments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as FolderIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontalIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontalIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShareIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share.js [app-ssr] (ecmascript) <export default as ShareIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function NavDocuments({ items }) {
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroup"], {
        className: "group-data-[collapsible=icon]:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupLabel"], {
                children: "Documents"
            }, void 0, false, {
                fileName: "[project]/components/nav-documents.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                children: [
                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.url,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                                fileName: "[project]/components/nav-documents.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/nav-documents.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/nav-documents.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/nav-documents.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuAction"], {
                                                showOnHover: true,
                                                suppressHydrationWarning: true,
                                                className: "rounded-sm data-[state=open]:bg-accent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontalIcon$3e$__["MoreHorizontalIcon"], {}, void 0, false, {
                                                        fileName: "[project]/components/nav-documents.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sr-only",
                                                        children: "More"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/nav-documents.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/nav-documents.tsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/nav-documents.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                            className: "w-24 rounded-lg",
                                            side: "right",
                                            align: "start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"], {}, void 0, false, {
                                                            fileName: "[project]/components/nav-documents.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Open"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/nav-documents.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/nav-documents.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShareIcon$3e$__["ShareIcon"], {}, void 0, false, {
                                                            fileName: "[project]/components/nav-documents.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Share"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/nav-documents.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/nav-documents.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/nav-documents.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/nav-documents.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item.name, true, {
                            fileName: "[project]/components/nav-documents.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                            className: "text-sidebar-foreground/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontalIcon$3e$__["MoreHorizontalIcon"], {
                                    className: "text-sidebar-foreground/70"
                                }, void 0, false, {
                                    fileName: "[project]/components/nav-documents.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "More"
                                }, void 0, false, {
                                    fileName: "[project]/components/nav-documents.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/nav-documents.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/nav-documents.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/nav-documents.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/nav-documents.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/nav-main.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavMain",
    ()=>NavMain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MailIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as MailIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function NavMain({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroup"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                tooltip: "Quick Create",
                                className: "min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircleIcon$3e$__["PlusCircleIcon"], {}, void 0, false, {
                                        fileName: "[project]/components/nav-main.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Quick Create"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nav-main.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nav-main.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                className: "h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0",
                                variant: "outline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MailIcon$3e$__["MailIcon"], {}, void 0, false, {
                                        fileName: "[project]/components/nav-main.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Inbox"
                                    }, void 0, false, {
                                        fileName: "[project]/components/nav-main.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nav-main.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/nav-main.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/nav-main.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                asChild: true,
                                tooltip: item.title,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.url,
                                    children: [
                                        item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                            fileName: "[project]/components/nav-main.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/nav-main.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/nav-main.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/nav-main.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, item.title, false, {
                            fileName: "[project]/components/nav-main.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/nav-main.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/nav-main.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/nav-main.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/nav-secondary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavSecondary",
    ()=>NavSecondary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function NavSecondary({ items, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroup"], {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.url,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                        fileName: "[project]/components/nav-secondary.tsx",
                                        lineNumber: 32,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/nav-secondary.tsx",
                                        lineNumber: 33,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nav-secondary.tsx",
                                lineNumber: 31,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/nav-secondary.tsx",
                            lineNumber: 30,
                            columnNumber: 15
                        }, this)
                    }, item.title, false, {
                        fileName: "[project]/components/nav-secondary.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/nav-secondary.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/nav-secondary.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/nav-secondary.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
}),
"[project]/components/nav-user.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavUser",
    ()=>NavUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BellIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as BellIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCardIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCardIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOutIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOutIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVerticalIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVerticalIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-user.js [app-ssr] (ecmascript) <export default as UserCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function NavUser({ user }) {
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                            size: "lg",
                            className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "h-8 w-8 rounded-lg grayscale",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: user.avatar,
                                            alt: user.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/nav-user.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            className: "rounded-lg",
                                            children: "CN"
                                        }, void 0, false, {
                                            fileName: "[project]/components/nav-user.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/nav-user.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid flex-1 text-left text-sm leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate font-medium",
                                            children: user.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/nav-user.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate text-xs text-muted-foreground",
                                            children: user.email
                                        }, void 0, false, {
                                            fileName: "[project]/components/nav-user.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/nav-user.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVerticalIcon$3e$__["MoreVerticalIcon"], {
                                    className: "ml-auto size-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/nav-user.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/nav-user.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/nav-user.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                        className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
                        side: "right",
                        align: "end",
                        sideOffset: 4,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                className: "p-0 font-normal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-8 w-8 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: user.avatar,
                                                    alt: user.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/nav-user.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    className: "rounded-lg",
                                                    children: "CN"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/nav-user.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/nav-user.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid flex-1 text-left text-sm leading-tight",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate font-medium",
                                                    children: user.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/nav-user.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate text-xs text-muted-foreground",
                                                    children: user.email
                                                }, void 0, false, {
                                                    fileName: "[project]/components/nav-user.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/nav-user.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/nav-user.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/nav-user.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                fileName: "[project]/components/nav-user.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuGroup"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircleIcon$3e$__["UserCircleIcon"], {}, void 0, false, {
                                                fileName: "[project]/components/nav-user.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this),
                                            "Account"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/nav-user.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCardIcon$3e$__["CreditCardIcon"], {}, void 0, false, {
                                                fileName: "[project]/components/nav-user.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            "Billing"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/nav-user.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BellIcon$3e$__["BellIcon"], {}, void 0, false, {
                                                fileName: "[project]/components/nav-user.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            "Notifications"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/nav-user.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nav-user.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                fileName: "[project]/components/nav-user.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOutIcon$3e$__["LogOutIcon"], {}, void 0, false, {
                                        fileName: "[project]/components/nav-user.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    "Log out"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/nav-user.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/nav-user.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/nav-user.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/nav-user.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/nav-user.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/app-sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppSidebar",
    ()=>AppSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUpCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-ssr] (ecmascript) <export default as BarChartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CameraIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as CameraIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardListIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardListIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as DatabaseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCodeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-ssr] (ecmascript) <export default as FileCodeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-ssr] (ecmascript) <export default as FileIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as FolderIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-ssr] (ecmascript) <export default as HelpCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboardIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboardIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as ListIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as SearchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as SettingsIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as UsersIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPinIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as BriefcaseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as GlobeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$documents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nav-documents.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$main$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nav-main.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$secondary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nav-secondary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$user$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nav-user.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const navData = {
    navMain: [
        {
            title: "Dashboard",
            url: "/admin/dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboardIcon$3e$__["LayoutDashboardIcon"]
        },
        {
            title: "Lifecycle",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListIcon$3e$__["ListIcon"]
        },
        {
            title: "Analytics",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChartIcon$3e$__["BarChartIcon"]
        },
        {
            title: "Customers",
            url: "/admin/customers",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"]
        },
        {
            title: "Articles",
            url: "/admin/articles",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__["FileTextIcon"]
        },
        {
            title: "Downloads",
            url: "/admin/downloads",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"]
        },
        {
            title: "Careers",
            url: "/admin/careers",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"]
        },
        {
            title: "CV Applications",
            url: "/admin/cv-applications",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__["FileTextIcon"]
        },
        {
            title: "System Users",
            url: "/admin/users",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"]
        },
        {
            title: "Location",
            url: "/admin/locations",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"]
        },
        {
            title: "Projects",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"]
        },
        {
            title: "Team",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"]
        }
    ],
    navClouds: [
        {
            title: "Capture",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CameraIcon$3e$__["CameraIcon"],
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#"
                },
                {
                    title: "Archived",
                    url: "#"
                }
            ]
        },
        {
            title: "Proposal",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__["FileTextIcon"],
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#"
                },
                {
                    title: "Archived",
                    url: "#"
                }
            ]
        },
        {
            title: "Prompts",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCodeIcon$3e$__["FileCodeIcon"],
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#"
                },
                {
                    title: "Archived",
                    url: "#"
                }
            ]
        }
    ],
    navFunding: [
        {
            title: "EU Programs",
            url: "/admin/eu-programs",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"]
        },
        {
            title: "Periferies",
            url: "/admin/eu-programs/periferies",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__["GlobeIcon"]
        },
        {
            title: "KAD Management",
            url: "/admin/eu-programs/kads",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCodeIcon$3e$__["FileCodeIcon"]
        }
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__["SettingsIcon"]
        },
        {
            title: "Get Help",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircleIcon$3e$__["HelpCircleIcon"]
        },
        {
            title: "Search",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__["SearchIcon"]
        }
    ],
    documents: [
        {
            name: "Data Library",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseIcon$3e$__["DatabaseIcon"]
        },
        {
            name: "Reports",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardListIcon$3e$__["ClipboardListIcon"]
        },
        {
            name: "Word Assistant",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__["FileIcon"]
        }
    ]
};
function AppSidebar({ ...props }) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const user = {
        name: session?.user?.name || "Admin",
        email: session?.user?.email || "",
        avatar: session?.user?.image || ""
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
        collapsible: "offcanvas",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                            asChild: true,
                            className: "data-[slot=sidebar-menu-button]:!p-1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircleIcon$3e$__["ArrowUpCircleIcon"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/app-sidebar.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-semibold",
                                        children: "Acme Inc."
                                    }, void 0, false, {
                                        fileName: "[project]/components/app-sidebar.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app-sidebar.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/app-sidebar.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/app-sidebar.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$main$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavMain"], {
                        items: navData.navMain
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupLabel"], {
                                children: "Funding & European Programs"
                            }, void 0, false, {
                                fileName: "[project]/components/app-sidebar.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                                className: "flex flex-col gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                                    children: navData.navFunding.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                                asChild: true,
                                                tooltip: item.title,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.url,
                                                    children: [
                                                        item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                                            fileName: "[project]/components/app-sidebar.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/app-sidebar.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/app-sidebar.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/app-sidebar.tsx",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, this)
                                        }, item.title, false, {
                                            fileName: "[project]/components/app-sidebar.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/app-sidebar.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/app-sidebar.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$documents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavDocuments"], {
                        items: navData.documents
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$secondary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavSecondary"], {
                        items: navData.navSecondary,
                        className: "mt-auto"
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/app-sidebar.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$user$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavUser"], {
                    user: user
                }, void 0, false, {
                    fileName: "[project]/components/app-sidebar.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/app-sidebar.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/app-sidebar.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_de8c6a68._.js.map