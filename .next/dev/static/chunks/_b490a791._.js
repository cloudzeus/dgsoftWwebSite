(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
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
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
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
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
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
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 140,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/actions/data:26110c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPeriferia",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40cedcbb0ee674ec7dbd4bf1eea8f0d02f4238774d":"createPeriferia"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40cedcbb0ee674ec7dbd4bf1eea8f0d02f4238774d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createPeriferia");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FzT3NCLDhMQUFBIn0=
}),
"[project]/app/lib/actions/data:857c99 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updatePeriferia",
    ()=>$$RSC_SERVER_ACTION_12
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"600cd4dc1e8c968aef658f52a2265578a81aa07769":"updatePeriferia"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("600cd4dc1e8c968aef658f52a2265578a81aa07769", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updatePeriferia");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0E4T3NCLDhMQUFBIn0=
}),
"[project]/app/lib/actions/data:4a06e8 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deletePeriferia",
    ()=>$$RSC_SERVER_ACTION_13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"400ccd4b7e5ad5e1c077a04bf30a017fbb05e68ead":"deletePeriferia"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400ccd4b7e5ad5e1c077a04bf30a017fbb05e68ead", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deletePeriferia");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FzUHNCLDhMQUFBIn0=
}),
"[project]/app/lib/actions/data:6f50e1 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "importKallikratis",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00662591a9c573a0f05a71963167c54217c323d289":"importKallikratis"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00662591a9c573a0f05a71963167c54217c323d289", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "importKallikratis");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0E4UHNCLGdNQUFBIn0=
}),
"[project]/app/lib/actions/data:995756 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translateAllPeriferies",
    ()=>$$RSC_SERVER_ACTION_15
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00c1c33a475dc70db503c3d0f140b9563edfa1b372":"translateAllPeriferies"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00c1c33a475dc70db503c3d0f140b9563edfa1b372", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "translateAllPeriferies");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0FvV3NCLHFNQUFBIn0=
}),
"[project]/components/admin/eu-programs/data-table-periferies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTablePeriferies",
    ()=>DataTablePeriferies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DownloadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-download.js [app-client] (ecmascript) <export default as DownloadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.js [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$26110c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:26110c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$857c99__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:857c99 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$4a06e8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:4a06e8 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$6f50e1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:6f50e1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$995756__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:995756 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
    const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_TRANSLATE_ENABLED // just a UI clue; actual call goes through route
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
    _s();
    const [expanded, setExpanded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [translating, setTranslating] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const hasChildren = node.children && node.children.length > 0;
    const meta = LEVEL_META[node.level] ?? LEVEL_META[6];
    const indentPx = depth * 20;
    const handleTranslate = async ()=>{
        setTranslating(true);
        try {
            const translated = await translateSingleNode(node);
            if (translated) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$857c99__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updatePeriferia"])(node.id, {
                    nameEN: translated
                });
                onTranslated(node.id, translated);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Translated: ${translated}`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Translation failed");
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(e.message);
        } finally{
            setTranslating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center gap-2 px-3 py-2 hover:bg-muted/40 transition-colors border-b border-border/30 ${meta.bg} min-w-full w-max relative`,
                style: {
                    paddingLeft: `${12 + indentPx}px`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setExpanded(!expanded),
                        className: `flex-shrink-0 p-0.5 rounded hover:bg-black/10 transition-opacity ${hasChildren ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                        children: expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-3.5 h-3.5 text-gray-700 dark:text-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 94,
                            columnNumber: 27
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded border flex-shrink-0 ${meta.color} border-current/30`,
                        children: meta.label
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs text-muted-foreground flex-shrink-0",
                        children: node.code
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-foreground truncate max-w-sm md:max-w-md",
                        title: node.nameEL,
                        children: node.nameEL
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this),
                    node.nameEN ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground italic hidden lg:block truncate max-w-[200px] opacity-70",
                        title: node.nameEN,
                        children: [
                            "(",
                            node.nameEN,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 112,
                        columnNumber: 23
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground/40 italic hidden lg:block",
                        children: "no translation"
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 113,
                        columnNumber: 23
                    }, this),
                    hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "text-[10px] flex-shrink-0",
                        children: node.children.length
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky right-0 ml-auto pl-4 py-1 flex items-center bg-inherit/95 backdrop-blur-sm z-30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "secondary",
                                        size: "sm",
                                        className: "h-8 w-8 p-0 flex-shrink-0 bg-zinc-900 text-white hover:bg-black hover:text-white border-none shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 126,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 125,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 124,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                    align: "end",
                                    className: "w-56 z-[100] bg-popover border-border shadow-2xl",
                                    children: [
                                        meta.childLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    className: "cursor-pointer font-medium",
                                                    onClick: ()=>onAddChild(node),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-4 h-4 mr-2 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 41
                                                        }, this),
                                                        "Add ",
                                                        meta.childLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "cursor-pointer",
                                            onClick: ()=>onEdit(node),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 33
                                                }, this),
                                                "Edit Details"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 138,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "cursor-pointer",
                                            onClick: handleTranslate,
                                            disabled: translating,
                                            children: [
                                                translating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                                    className: "w-4 h-4 mr-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 39
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 39
                                                }, this),
                                                "Translate to English"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 148,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            className: "cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50",
                                            onClick: ()=>onDelete(node),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 33
                                                }, this),
                                                "Delete Region"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 149,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 129,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 123,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
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
            expanded && hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: node.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PeriferiaNode, {
                        node: child,
                        depth: depth + 1,
                        onEdit: onEdit,
                        onDelete: onDelete,
                        onAddChild: onAddChild,
                        onTranslated: onTranslated
                    }, child.id, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 161,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 159,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
_s(PeriferiaNode, "FQv5B1HiYa1cflrL6JhMWt68WPs=");
_c = PeriferiaNode;
function DataTablePeriferies({ data: initialData }) {
    _s1();
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](initialData || []);
    const [search, setSearch] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [isDialogOpen, setIsDialogOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [editingItem, setEditingItem] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [addingToParent, setAddingToParent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [isSaving, setIsSaving] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isTranslating, setIsTranslating] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isImporting, setIsImporting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [formData, setFormData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$4a06e8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deletePeriferia"])(item.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Region deleted");
            setTimeout(()=>window.location.reload(), 500);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message);
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$857c99__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updatePeriferia"])(editingItem.id, payload);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Region updated");
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$26110c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createPeriferia"])(payload);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Region created");
            }
            setIsDialogOpen(false);
            setTimeout(()=>window.location.reload(), 500);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message);
        } finally{
            setIsSaving(false);
        }
    };
    const handleImport = async ()=>{
        if (!confirm("Sync Kallikratis directory from GitHub? This may take 30-60 seconds.")) return;
        setIsImporting(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Syncing Kallikratis data...", {
            id: 'import'
        });
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$6f50e1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["importKallikratis"])();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Synced ${res.count} regions from Kallikratis!`, {
                id: 'import'
            });
            setTimeout(()=>window.location.reload(), 1000);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Sync failed: ${err.message}`, {
                id: 'import'
            });
        } finally{
            setIsImporting(false);
        }
    };
    const handleTranslateAll = async ()=>{
        if (!confirm("Translate all regions without English names via AI? Runs in batches of 50.")) return;
        setIsTranslating(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("AI translating regions...", {
            id: 'translate'
        });
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$995756__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["translateAllPeriferies"])();
            if (res.count === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message ?? "All regions already translated!", {
                    id: 'translate'
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Translated ${res.count} regions. ${res.remaining} still pending.`, {
                    id: 'translate'
                });
            }
            setTimeout(()=>window.location.reload(), 1500);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message, {
                id: 'translate'
            });
        } finally{
            setIsTranslating(false);
        }
    };
    // Simple search filter on names
    const filteredData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DataTablePeriferies.useMemo[filteredData]": ()=>{
            if (!search.trim()) return data;
            const q = search.toLowerCase();
            const filterTree = {
                "DataTablePeriferies.useMemo[filteredData].filterTree": (nodes)=>nodes.flatMap({
                        "DataTablePeriferies.useMemo[filteredData].filterTree": (n)=>{
                            const match = n.nameEL.toLowerCase().includes(q) || (n.nameEN?.toLowerCase().includes(q) ?? false) || n.code.includes(q);
                            const filteredChildren = n.children ? filterTree(n.children) : [];
                            if (match || filteredChildren.length > 0) return [
                                {
                                    ...n,
                                    children: filteredChildren
                                }
                            ];
                            return [];
                        }
                    }["DataTablePeriferies.useMemo[filteredData].filterTree"])
            }["DataTablePeriferies.useMemo[filteredData].filterTree"];
            return filterTree(data);
        }
    }["DataTablePeriferies.useMemo[filteredData]"], [
        data,
        search
    ]);
    // Legend
    const levelEntries = Object.entries(LEVEL_META).filter(([, v])=>v.label);
    // Dynamic Height Calculation: find available space on screen, cap at 70vh
    const [maxHeightPx, setMaxHeightPx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](600);
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DataTablePeriferies.useEffect": ()=>{
            const updateHeight = {
                "DataTablePeriferies.useEffect.updateHeight": ()=>{
                    if (containerRef.current) {
                        const rect = containerRef.current.getBoundingClientRect();
                        const viewportHeight = window.innerHeight;
                        // 40px buffer for bottom padding
                        const available = viewportHeight - rect.top - 40;
                        const capped = Math.min(available, viewportHeight * 0.7);
                        setMaxHeightPx(capped > 200 ? capped : 500);
                    }
                }
            }["DataTablePeriferies.useEffect.updateHeight"];
            updateHeight();
            // Wait for potential layout shifts (dynamic data loading)
            const timer = setTimeout(updateHeight, 500);
            window.addEventListener('resize', updateHeight);
            return ({
                "DataTablePeriferies.useEffect": ()=>{
                    window.removeEventListener('resize', updateHeight);
                    clearTimeout(timer);
                }
            })["DataTablePeriferies.useEffect"];
        }
    }["DataTablePeriferies.useEffect"], [
        filteredData.length
    ]); // Re-calculate when data expands
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "flex flex-col space-y-4 w-full h-full min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-3 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Search region, code...",
                                className: "max-w-xs text-sm",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 347,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: openAddRoot,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 354,
                                        columnNumber: 25
                                    }, this),
                                    " Add Root"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 353,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 346,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: handleTranslateAll,
                                disabled: isTranslating,
                                className: "border-indigo-400/40 text-indigo-600 hover:bg-indigo-50",
                                children: [
                                    isTranslating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                        className: "w-4 h-4 mr-1.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 365,
                                        columnNumber: 42
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-4 h-4 mr-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 365,
                                        columnNumber: 99
                                    }, this),
                                    "Translate All (EN)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 358,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: handleImport,
                                disabled: isImporting,
                                className: "bg-black hover:bg-black/80 text-white",
                                children: [
                                    isImporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                        className: "w-4 h-4 mr-1.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 374,
                                        columnNumber: 40
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DownloadCloud$3e$__["DownloadCloud"], {
                                        className: "w-4 h-4 mr-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 374,
                                        columnNumber: 97
                                    }, this),
                                    "Sync Kallikratis"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 368,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 357,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 345,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 shrink-0",
                children: levelEntries.map(([lvl, meta])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded border ${meta.color} border-current/30 ${meta.bg}`,
                        children: [
                            "Επίπεδο ",
                            lvl,
                            ": ",
                            meta.label
                        ]
                    }, lvl, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 383,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 381,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border bg-card shadow-lg flex flex-col border-border/60 overflow-hidden divide-y divide-border/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted/90 backdrop-blur-md px-5 py-3 flex items-center justify-between shrink-0 z-40 sticky top-0 border-b",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
                                    children: "Regional Hierarchy"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 393,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "bg-zinc-800 text-white font-bold",
                                    children: filteredData.length
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 394,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 392,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 391,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-auto bg-background/20 relative overscroll-contain",
                        "data-lenis-prevent": true,
                        style: {
                            maxHeight: `${maxHeightPx}px`,
                            overflowY: 'auto',
                            overflowX: 'auto',
                            scrollbarWidth: 'thin'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-fit w-full flex flex-col p-1 relative",
                            children: filteredData.length > 0 ? filteredData.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PeriferiaNode, {
                                    node: node,
                                    depth: 0,
                                    onEdit: openEdit,
                                    onDelete: handleDelete,
                                    onAddChild: openAddChild,
                                    onTranslated: handleTranslated
                                }, node.id, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 406,
                                    columnNumber: 33
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-12 text-center text-muted-foreground text-sm",
                                children: search ? "No regions match your search." : "No regions found. Click \"Sync Kallikratis\" to import the full Greek administrative directory."
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 417,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 403,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                        lineNumber: 398,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 390,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-lg bg-background text-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "flex items-center gap-2",
                                children: editingItem ? `Edit: ${editingItem.nameEL}` : addingToParent ? `Add ${LEVEL_META[addingToParent?.level + 1]?.label ?? "Sub-region"} under ${addingToParent?.nameEL}` : "Add Root Περιφέρεια"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                lineNumber: 429,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 428,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs font-semibold",
                                                    children: "Code *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    className: "mt-1 font-mono text-sm",
                                                    value: formData.code,
                                                    onChange: (e)=>setFormData((f)=>({
                                                                ...f,
                                                                code: e.target.value
                                                            })),
                                                    placeholder: "e.g. 111, 11101"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 441,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs font-semibold",
                                                    children: "Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: String(formData.level),
                                                    onValueChange: (v)=>setFormData((f)=>({
                                                                ...f,
                                                                level: parseInt(v)
                                                            })),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            className: "mt-1 text-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 77
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "3",
                                                                    children: "3 – Περιφέρεια"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                    lineNumber: 450,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "4",
                                                                    children: "4 – Νομός / Ενότητα"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "5",
                                                                    children: "5 – Δήμος"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: "6",
                                                                    children: "6 – Περιοχή"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                                    lineNumber: 453,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 445,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 440,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs font-semibold",
                                            children: "Parent Code"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 460,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            className: "mt-1 font-mono text-sm",
                                            value: formData.parentCode,
                                            onChange: (e)=>setFormData((f)=>({
                                                        ...f,
                                                        parentCode: e.target.value
                                                    })),
                                            placeholder: "Leave empty for root"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 461,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 459,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs font-semibold",
                                            children: "Name (Greek) *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 465,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            className: "mt-1",
                                            value: formData.nameEL,
                                            onChange: (e)=>setFormData((f)=>({
                                                        ...f,
                                                        nameEL: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 466,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 464,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-xs font-semibold",
                                            children: "Name (English)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 469,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            className: "mt-1",
                                            value: formData.nameEN,
                                            onChange: (e)=>setFormData((f)=>({
                                                        ...f,
                                                        nameEN: e.target.value
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                            lineNumber: 470,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 468,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 439,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4 border-t mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>setIsDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 475,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    disabled: isSaving,
                                    onClick: handleSave,
                                    className: "bg-black hover:bg-black/80 text-white",
                                    children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                        className: "w-4 h-4 mr-1.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                        lineNumber: 477,
                                        columnNumber: 41
                                    }, this) : "Save"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                                    lineNumber: 476,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                            lineNumber: 474,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                    lineNumber: 427,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
                lineNumber: 426,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/eu-programs/data-table-periferies.tsx",
        lineNumber: 343,
        columnNumber: 9
    }, this);
}
_s1(DataTablePeriferies, "eooR1wGotsQ5/ZT7tI16w+PDRv4=");
_c1 = DataTablePeriferies;
var _c, _c1;
__turbopack_context__.k.register(_c, "PeriferiaNode");
__turbopack_context__.k.register(_c1, "DataTablePeriferies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/eu-programs/data-table-periferies.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/admin/eu-programs/data-table-periferies.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_b490a791._.js.map