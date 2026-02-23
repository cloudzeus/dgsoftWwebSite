(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Table$React.forwardRef");
__turbopack_context__.k.register(_c1, "Table");
__turbopack_context__.k.register(_c2, "TableHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "TableHeader");
__turbopack_context__.k.register(_c4, "TableBody$React.forwardRef");
__turbopack_context__.k.register(_c5, "TableBody");
__turbopack_context__.k.register(_c6, "TableFooter$React.forwardRef");
__turbopack_context__.k.register(_c7, "TableFooter");
__turbopack_context__.k.register(_c8, "TableRow$React.forwardRef");
__turbopack_context__.k.register(_c9, "TableRow");
__turbopack_context__.k.register(_c10, "TableHead$React.forwardRef");
__turbopack_context__.k.register(_c11, "TableHead");
__turbopack_context__.k.register(_c12, "TableCell$React.forwardRef");
__turbopack_context__.k.register(_c13, "TableCell");
__turbopack_context__.k.register(_c14, "TableCaption$React.forwardRef");
__turbopack_context__.k.register(_c15, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TabsList;
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TabsTrigger;
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TabsContent;
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid place-content-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Checkbox;
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/actions/data:e47735 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEuProgram",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40c416403db5b6ce81cc33dda66e220f2ae1d84da8":"createEuProgram"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c416403db5b6ce81cc33dda66e220f2ae1d84da8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createEuProgram");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0EyQnNCLDRMQUFBIn0=
}),
"[project]/app/lib/actions/data:887249 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateEuProgram",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6008a34e21e7f36ce288397005600e52a938e7a9bf":"updateEuProgram"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6008a34e21e7f36ce288397005600e52a938e7a9bf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateEuProgram");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0F3RHNCLDRMQUFBIn0=
}),
"[project]/app/lib/actions/data:b24788 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteEuProgram",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40741f0c5dc01796159a2356eadd2b80f5ada28124":"deleteEuProgram"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40741f0c5dc01796159a2356eadd2b80f5ada28124", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteEuProgram");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FzRnNCLDRMQUFBIn0=
}),
"[project]/app/lib/actions/data:3725db [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPeriferies",
    ()=>$$RSC_SERVER_ACTION_7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"00116c22092b0c530ad64fb4a07d25af5fc66ef7af":"getAllPeriferies"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00116c22092b0c530ad64fb4a07d25af5fc66ef7af", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAllPeriferies");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrU0EySXNCLDZMQUFBIn0=
}),
"[project]/app/lib/actions/data:7271b6 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkPeriferiaToProgram",
    ()=>$$RSC_SERVER_ACTION_8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60f64cbc01bca536008caa41e303125922fb8f35b7":"linkPeriferiaToProgram"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60f64cbc01bca536008caa41e303125922fb8f35b7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "linkPeriferiaToProgram");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0F5S3NCLG1NQUFBIn0=
}),
"[project]/app/lib/actions/data:b82520 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unlinkPeriferiaFromProgram",
    ()=>$$RSC_SERVER_ACTION_9
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6082e80850b424f230348130a37cc5f34d2d5fb5e6":"unlinkPeriferiaFromProgram"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6082e80850b424f230348130a37cc5f34d2d5fb5e6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "unlinkPeriferiaFromProgram");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI0U0FzTHNCLHVNQUFBIn0=
}),
"[project]/app/lib/actions/data:e2bf5a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "processOcrAndCreateKads",
    ()=>$$RSC_SERVER_ACTION_10
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6084ada550f7bab9065ced9ea4ae817ebf555d430e":"processOcrAndCreateKads"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6084ada550f7bab9065ced9ea4ae817ebf555d430e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "processOcrAndCreateKads");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5U0FvTXNCLHNNQUFBIn0=
}),
"[project]/components/admin/eu-programs/data-table-eu-programs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTableEuPrograms",
    ()=>DataTableEuPrograms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-image-crop/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$Document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__ = __turbopack_context__.i("[project]/node_modules/react-pdf/dist/Document.js [app-client] (ecmascript) <export default as Document>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$Page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Page$3e$__ = __turbopack_context__.i("[project]/node_modules/react-pdf/dist/Page.js [app-client] (ecmascript) <export default as Page>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__ = __turbopack_context__.i("[project]/node_modules/react-pdf/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript) <export * as pdfjs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$e47735__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:e47735 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$887249__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:887249 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$b24788__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:b24788 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$3725db__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:3725db [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$7271b6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:7271b6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$b82520__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:b82520 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$e2bf5a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:e2bf5a [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
;
;
;
// Provide standard CDN worker so next.js turbopack doesn't break
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__["pdfjs"].GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__["pdfjs"].version}/build/pdf.worker.min.mjs`;
function DataTableEuPrograms({ data: initialData }) {
    _s();
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](initialData || []);
    const [isDialogOpen, setIsDialogOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [editingProgram, setEditingProgram] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [isSaving, setIsSaving] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // Master lists
    const [allPeriferies, setAllPeriferies] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    // States for relational links (stored temporarily before hitting save)
    const [selectedPeriferies, setSelectedPeriferies] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](new Set());
    // OCR PDF states
    const [isOcrModalOpen, setIsOcrModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [pdfFile, setPdfFile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [numPages, setNumPages] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [pageNumber, setPageNumber] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](1);
    const [crop, setCrop] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        unit: '%',
        width: 50,
        height: 50,
        x: 25,
        y: 25
    });
    const [isProcessingOcr, setIsProcessingOcr] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [formData, setFormData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        nameEL: "",
        nameEN: "",
        shortDescriptionEL: "",
        shortDescriptionEN: "",
        descriptionEL: "",
        descriptionEN: "",
        announcedDate: "",
        submissionDate: "",
        endDate: "",
        active: true,
        publicationFile: "",
        image: "",
        minimumCompanyYears: "",
        minimumEmployees: "",
        percentageOfFinance: "",
        maxBudget: ""
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DataTableEuPrograms.useEffect": ()=>{
            // Fetch all generic reference lists ONCE when table loads
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$3725db__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAllPeriferies"])().then({
                "DataTableEuPrograms.useEffect": (p)=>setAllPeriferies(p || [])
            }["DataTableEuPrograms.useEffect"]);
        }
    }["DataTableEuPrograms.useEffect"], []);
    const openEdit = (program)=>{
        if (program) {
            setEditingProgram(program);
            setFormData({
                nameEL: program.nameEL || "",
                nameEN: program.nameEN || "",
                shortDescriptionEL: program.shortDescriptionEL || "",
                shortDescriptionEN: program.shortDescriptionEN || "",
                descriptionEL: program.descriptionEL || "",
                descriptionEN: program.descriptionEN || "",
                announcedDate: program.announcedDate ? new Date(program.announcedDate).toISOString().split('T')[0] : "",
                submissionDate: program.submissionDate ? new Date(program.submissionDate).toISOString().split('T')[0] : "",
                endDate: program.endDate ? new Date(program.endDate).toISOString().split('T')[0] : "",
                active: program.active ?? true,
                publicationFile: program.publicationFile || "",
                image: program.image || "",
                minimumCompanyYears: program.minimumCompanyYears ? String(program.minimumCompanyYears) : "",
                minimumEmployees: program.minimumEmployees ? String(program.minimumEmployees) : "",
                percentageOfFinance: program.percentageOfFinance || "",
                maxBudget: program.maxBudget ? String(program.maxBudget) : ""
            });
            // Fill set for checkboxes
            const perifs = new Set(program.periferies?.map((p)=>p.periferia.id) || []);
            setSelectedPeriferies(perifs);
        } else {
            setEditingProgram(null);
            setFormData({
                nameEL: "",
                nameEN: "",
                shortDescriptionEL: "",
                shortDescriptionEN: "",
                descriptionEL: "",
                descriptionEN: "",
                announcedDate: "",
                submissionDate: "",
                endDate: "",
                active: true,
                publicationFile: "",
                image: "",
                minimumCompanyYears: "",
                minimumEmployees: "",
                percentageOfFinance: "",
                maxBudget: ""
            });
            setSelectedPeriferies(new Set());
        }
        setIsDialogOpen(true);
    };
    const handleSave = async ()=>{
        setIsSaving(true);
        try {
            if (!formData.nameEL) throw new Error("Name (EL) is required!");
            let resProgram = null;
            if (editingProgram) {
                resProgram = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$887249__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateEuProgram"])(editingProgram.id, formData);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Program updated");
            } else {
                resProgram = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$e47735__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createEuProgram"])(formData);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Program created");
            }
            // Sync multi-select Periferies manually after creation to ensure ID mappings
            if (resProgram && resProgram.id) {
                // Remove deselected
                const previouslySelected = editingProgram?.periferies?.map((p)=>p.periferia.id) || [];
                for (let prevId of previouslySelected){
                    if (!selectedPeriferies.has(prevId)) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$b82520__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["unlinkPeriferiaFromProgram"])(resProgram.id, prevId);
                }
                // Add newly selected
                for (let newId of Array.from(selectedPeriferies)){
                    if (!previouslySelected.includes(newId)) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$7271b6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["linkPeriferiaToProgram"])(resProgram.id, newId);
                }
                // Fetch the fully populated object manually to update table securely
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Relationships updated.");
                window.location.reload(); // Or you can fetch the specific object again
            }
            setIsDialogOpen(false);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message);
        } finally{
            setIsSaving(false);
        }
    };
    const handleFileUpload = async (file, field)=>{
        if (!file) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(`Uploading ${field}...`, {
            id: "upload"
        });
        try {
            const uploadData = new FormData();
            uploadData.append("file", file);
            const res = await fetch("/api/admin/articles/upload", {
                method: "POST",
                body: uploadData
            });
            const d = await res.json();
            if (!res.ok) throw new Error(d.error);
            setFormData((prev)=>({
                    ...prev,
                    [field]: d.url
                }));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("File uploaded!", {
                id: "upload"
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message, {
                id: "upload"
            });
        }
    };
    const startOcrScan = async ()=>{
        if (!canvasRef.current || !editingProgram) return;
        setIsProcessingOcr(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Cropping & Sending to OpenAI GPT-4 Vision for OCR...", {
            id: "ocr"
        });
        try {
            // Document dynamically rendered puts a canvas inside `.react-pdf__Page__canvas`
            const canvasElement = document.querySelector('.react-pdf__Page__canvas');
            if (!canvasElement) throw new Error("Could not find PDF canvas element on screen. Ensure page is fully loaded.");
            const scaleX = canvasElement.width / 100;
            const scaleY = canvasElement.height / 100;
            const cropCanvas = document.createElement('canvas');
            cropCanvas.width = crop.width / 100 * canvasElement.width;
            cropCanvas.height = crop.height / 100 * canvasElement.height;
            const ctx = cropCanvas.getContext('2d');
            if (!ctx) throw new Error("Could not get crop canvas context");
            ctx.drawImage(canvasElement, crop.x / 100 * canvasElement.width, crop.y / 100 * canvasElement.height, cropCanvas.width, cropCanvas.height, 0, 0, cropCanvas.width, cropCanvas.height);
            const base64Image = cropCanvas.toDataURL("image/jpeg");
            // Send base64 crop to API route
            const res = await fetch("/api/admin/eu-programs/ocr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    base64Image
                })
            });
            const aiData = await res.json();
            if (!res.ok) throw new Error(aiData.error);
            if (aiData.kads && aiData.kads.length > 0) {
                // Post into database via server action directly
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$e2bf5a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["processOcrAndCreateKads"])(editingProgram.id, aiData.kads);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`OCR Complete! Successfully parsed and linked ${result.count} KADs to this program.`, {
                    id: "ocr"
                });
                setIsOcrModalOpen(false);
                // Usually would update context, but for simplicity reloading table forces fresh relationships
                setTimeout(()=>window.location.reload(), 1500);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No KADs found in that region. Retry with better cropping.", {
                    id: "ocr"
                });
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message, {
                id: "ocr"
            });
        } finally{
            setIsProcessingOcr(false);
        }
    };
    const columns = [
        {
            accessorKey: "nameEL",
            header: "Program Name",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold text-foreground",
                    children: row.original.nameEL
                }, void 0, false, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 224,
                    columnNumber: 32
                }, this)
        },
        {
            accessorKey: "announcedDate",
            header: "Announced",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-muted-foreground",
                    children: row.original.announcedDate ? new Date(row.original.announcedDate).toLocaleDateString() : "-"
                }, void 0, false, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 229,
                    columnNumber: 32
                }, this)
        },
        {
            accessorKey: "maxBudget",
            header: "Max Budget",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-muted-foreground",
                    children: row.original.maxBudget ? `€${row.original.maxBudget.toLocaleString()}` : "-"
                }, void 0, false, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 234,
                    columnNumber: 32
                }, this)
        },
        {
            id: "kads",
            header: "KADs Array",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: row.original.kads && row.original.kads.length > 0 ? "default" : "secondary",
                    children: [
                        row.original.kads?.length || 0,
                        " KADs Linked"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 240,
                    columnNumber: 17
                }, this)
        },
        {
            accessorKey: "active",
            header: "Status",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: row.original.active ? "default" : "destructive",
                    children: row.original.active ? "Active" : "Closed"
                }, void 0, false, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 249,
                    columnNumber: 17
                }, this)
        },
        {
            id: "actions",
            cell: ({ row })=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "h-8",
                                children: [
                                    "Actions ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "h-4 w-4 ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                        lineNumber: 260,
                                        columnNumber: 89
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                lineNumber: 260,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 259,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                            align: "end",
                            className: "bg-background text-foreground border border-input",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                    className: "cursor-pointer",
                                    onClick: ()=>openEdit(row.original),
                                    children: "Edit Details & Maps"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 263,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                    className: "cursor-pointer text-red-500",
                                    onClick: async ()=>{
                                        if (confirm("Delete program forever?")) {
                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$b24788__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteEuProgram"])(row.original.id);
                                            setData(data.filter((d)=>d.id !== row.original.id));
                                        }
                                    },
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 264,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 262,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 258,
                    columnNumber: 21
                }, this);
            }
        }
    ];
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data,
        columns,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreRowModel"])(),
        getPaginationRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaginationRowModel"])()
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>openEdit(),
                    className: "bg-primary shadow-md hover:shadow-lg transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 283,
                            columnNumber: 21
                        }, this),
                        " Add EU Program"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 282,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-md border bg-card text-card-foreground shadow overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            className: "bg-muted",
                            children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: header.isPlaceholder ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                        }, header.id, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 293,
                                            columnNumber: 37
                                        }, this))
                                }, headerGroup.id, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 291,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 289,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                        }, cell.id, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 305,
                                            columnNumber: 41
                                        }, this))
                                }, row.id, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 303,
                                    columnNumber: 33
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    colSpan: columns.length,
                                    className: "h-24 text-center",
                                    children: "No Programs Found."
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 311,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                lineNumber: 310,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 288,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                lineNumber: 287,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-4xl w-full bg-background text-foreground md:p-8 max-h-[90vh] overflow-hidden flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-2xl text-foreground",
                                children: editingProgram ? "Manage EU Program" : "Create New Program"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                lineNumber: 321,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 320,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                            defaultValue: "general",
                            className: "w-full flex-1 overflow-y-auto pr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-0 bg-background pt-2 pb-4 z-10 border-b mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                        className: "grid w-full grid-cols-4 bg-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "general",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 62
                                                    }, this),
                                                    " General"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 327,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "criteria",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 63
                                                    }, this),
                                                    " Criteria & Budget"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 328,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "regions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 62
                                                    }, this),
                                                    " Periferies Map"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 329,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: "kads",
                                                disabled: !editingProgram,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 86
                                                    }, this),
                                                    " Allowed KADs (OCR)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 330,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                        lineNumber: 326,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 325,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "general",
                                    className: "m-0 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "font-bold",
                                                            children: "Name (EL) *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            className: "mt-1",
                                                            value: formData.nameEL,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    nameEL: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "font-bold",
                                                            children: "Name (EN)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            className: "mt-1",
                                                            value: formData.nameEN,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    nameEN: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 336,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "font-bold",
                                                            children: "Short Description (EL)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                            className: "mt-1",
                                                            value: formData.shortDescriptionEL,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    shortDescriptionEL: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "font-bold",
                                                            children: "Short Description (EN)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                            className: "mt-1",
                                                            value: formData.shortDescriptionEN,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    shortDescriptionEN: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 347,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4 border p-4 rounded-lg bg-muted/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "font-bold text-xs text-muted-foreground uppercase",
                                                            children: "Announced Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "date",
                                                            className: "mt-1 bg-background",
                                                            value: formData.announcedDate,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    announcedDate: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "font-bold text-xs text-muted-foreground uppercase",
                                                            children: "Submission Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "date",
                                                            className: "mt-1 bg-background",
                                                            value: formData.submissionDate,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    submissionDate: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "font-bold text-xs text-muted-foreground uppercase",
                                                            children: "End Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "date",
                                                            className: "mt-1 bg-background",
                                                            value: formData.endDate,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    endDate: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 358,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "font-bold block mb-1",
                                                            children: "Banner Image URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    className: "flex-1",
                                                                    value: formData.image,
                                                                    placeholder: "Or upload below...",
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            image: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "cursor-pointer bg-secondary hover:bg-secondary/80 flex items-center justify-center px-4 rounded-md border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                            className: "w-4 h-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                            lineNumber: 378,
                                                                            columnNumber: 166
                                                                        }, this),
                                                                        " Upload ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "file",
                                                                            className: "hidden",
                                                                            accept: "image/*",
                                                                            onChange: (e)=>handleFileUpload(e.target.files?.[0] || null, "image")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                            lineNumber: 378,
                                                                            columnNumber: 212
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "font-bold block mb-1",
                                                            children: "Publication PDF File"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    className: "flex-1",
                                                                    value: formData.publicationFile,
                                                                    placeholder: "Or upload below...",
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            publicationFile: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "cursor-pointer bg-secondary hover:bg-secondary/80 flex items-center justify-center px-4 rounded-md border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            className: "w-4 h-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 166
                                                                        }, this),
                                                                        " Upload ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "file",
                                                                            className: "hidden",
                                                                            accept: "application/pdf",
                                                                            onChange: (e)=>handleFileUpload(e.target.files?.[0] || null, "publicationFile")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 211
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 373,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 335,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "criteria",
                                    className: "m-0 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-6 pb-6 border-b",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-muted-foreground uppercase tracking-widest text-xs",
                                                            children: "Financial Rules"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "font-bold",
                                                                    children: "Max Subsidized Budget (€)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "number",
                                                                    className: "mt-1",
                                                                    placeholder: "e.g. 500000",
                                                                    value: formData.maxBudget,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            maxBudget: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "font-bold",
                                                                    children: "Percentage of Finance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    className: "mt-1",
                                                                    placeholder: "e.g. 50% - 75%",
                                                                    value: formData.percentageOfFinance,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            percentageOfFinance: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-muted-foreground uppercase tracking-widest text-xs",
                                                            children: "Eligibility Criteria"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "font-bold",
                                                                    children: "Minimum Company Activity Years"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "number",
                                                                    className: "mt-1",
                                                                    placeholder: "e.g. 2",
                                                                    value: formData.minimumCompanyYears,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            minimumCompanyYears: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 410,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "font-bold",
                                                                    children: "Minimum Employees (EME)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "number",
                                                                    className: "mt-1",
                                                                    placeholder: "e.g. 3",
                                                                    value: formData.minimumEmployees,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            minimumEmployees: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 393,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2 cursor-pointer bg-muted p-4 rounded-lg border",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: formData.active,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                active: e.target.checked
                                                            }),
                                                        className: "form-checkbox h-5 w-5 text-primary rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-base font-bold",
                                                        children: "Program is Active & Accepting Applications"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 419,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 418,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 392,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "regions",
                                    className: "m-0 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-muted-foreground uppercase tracking-widest text-xs mb-4",
                                            children: "Select Eligible Periferies"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 428,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3",
                                            children: allPeriferies.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                            id: `p-${p.id}`,
                                                            checked: selectedPeriferies.has(p.id),
                                                            onCheckedChange: (checked)=>{
                                                                const next = new Set(selectedPeriferies);
                                                                if (checked) next.add(p.id);
                                                                else next.delete(p.id);
                                                                setSelectedPeriferies(next);
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid gap-1 leading-none cursor-pointer select-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: `p-${p.id}`,
                                                                className: "font-medium text-sm cursor-pointer",
                                                                children: p.nameEL
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, p.id, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 429,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground pt-4",
                                            children: "Relationships will only update definitively once you press Save."
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 448,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 427,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "kads",
                                    className: "m-0 space-y-4",
                                    children: !editingProgram ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-12 text-muted-foreground bg-muted rounded-xl",
                                        children: "Please save this program first before modifying KAD lists."
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                        lineNumber: 454,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center bg-indigo-50 border border-indigo-100 p-6 rounded-xl dark:bg-indigo-950/20 dark:border-indigo-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-indigo-900 dark:text-indigo-300 text-lg flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                        lineNumber: 459,
                                                                        columnNumber: 140
                                                                    }, this),
                                                                    " KAD Table Data Entry (Google / OpenAI Vision OCR)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-indigo-700 dark:text-indigo-400 mt-1",
                                                                children: "Upload the governmental PDF describing eligible KADs. You can crop specific tables and AI will extract all codes dynamically into the database."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>setIsOcrModalOpen(true),
                                                        className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                                                className: "w-4 h-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Launch OCR Scanner"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 457,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border rounded-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                                            className: "bg-muted",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        children: "KAD Code"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                        lineNumber: 471,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                        children: "Description"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                                            children: editingProgram.kads?.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    colSpan: 2,
                                                                    className: "text-center py-6 text-muted-foreground",
                                                                    children: "No KADs linked to this program yet."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 63
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 53
                                                            }, this) : editingProgram.kads?.map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "font-mono font-bold",
                                                                            children: k.kad.code
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                            lineNumber: 481,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                            className: "text-xs text-muted-foreground",
                                                                            children: k.kad.nameEL
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                            lineNumber: 482,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, k.kad.id, true, {
                                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 57
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 467,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                        lineNumber: 456,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 452,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 324,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end pt-4 border-t mt-4 gap-2 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 495,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    disabled: isSaving,
                                    onClick: handleSave,
                                    children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                        className: "h-4 w-4 animate-spin mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                        lineNumber: 497,
                                        columnNumber: 41
                                    }, this) : "Save Program"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 496,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 494,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 319,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                lineNumber: 318,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isOcrModalOpen,
                onOpenChange: setIsOcrModalOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-6xl w-full bg-background md:p-6 max-h-[95vh] overflow-hidden flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-2xl",
                                    children: "PDF/Image Intelligent OCR Table Scanner"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 507,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Upload your PDF file. Select the page, draw a box over the KAD Tables, and extract directly."
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 508,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 506,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col flex-1 overflow-hidden min-h-[500px] border rounded-lg bg-zinc-950 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 w-full z-10 bg-zinc-900/80 backdrop-blur-md p-3 border-b border-zinc-800 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "bg-white text-black px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md font-bold text-sm shadow-md transition-colors flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 37
                                                        }, this),
                                                        " Choose PDF File",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            className: "hidden",
                                                            accept: "application/pdf",
                                                            onChange: (e)=>setPdfFile(e.target.files?.[0] || null)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 33
                                                }, this),
                                                numPages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 bg-zinc-800/80 rounded-md p-1 px-3 text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            onClick: ()=>setPageNumber((p)=>Math.max(1, p - 1)),
                                                            className: "h-7 w-7 p-0",
                                                            children: "<"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-mono",
                                                            children: [
                                                                "Page ",
                                                                pageNumber,
                                                                " of ",
                                                                numPages
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            onClick: ()=>setPageNumber((p)=>Math.min(numPages, p + 1)),
                                                            className: "h-7 w-7 p-0",
                                                            children: ">"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 514,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            disabled: !pdfFile || isProcessingOcr,
                                            onClick: startOcrScan,
                                            className: "bg-blue-600 hover:bg-blue-500 text-white",
                                            children: [
                                                isProcessingOcr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                                    className: "w-4 h-4 animate-spin mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 52
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 107
                                                }, this),
                                                "Scan Cropped Area & Save"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 529,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 513,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-auto flex items-center justify-center p-8 mt-16 pb-16",
                                    children: !pdfFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-zinc-500 flex flex-col items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-16 h-16 opacity-30"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 539,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Select a PDF file to render its pages."
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 540,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                        lineNumber: 538,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$crop$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        crop: crop,
                                        onChange: (c)=>setCrop(c),
                                        className: "max-w-full relative shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$Document$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__["Document"], {
                                            file: pdfFile,
                                            onLoadSuccess: ({ numPages })=>setNumPages(numPages),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$pdf$2f$dist$2f$Page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Page$3e$__["Page"], {
                                                pageNumber: pageNumber,
                                                renderTextLayer: false,
                                                renderAnnotationLayer: false,
                                                width: 800
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                                lineNumber: 545,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                            lineNumber: 544,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                        lineNumber: 543,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                                    lineNumber: 536,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                            lineNumber: 511,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                    lineNumber: 505,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
                lineNumber: 504,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/eu-programs/data-table-eu-programs.tsx",
        lineNumber: 280,
        columnNumber: 9
    }, this);
}
_s(DataTableEuPrograms, "Yk2AeV455Wp906mJfPhnGh6kqE4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = DataTableEuPrograms;
var _c;
__turbopack_context__.k.register(_c, "DataTableEuPrograms");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/admin/eu-programs/data-table-eu-programs.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/admin/eu-programs/data-table-eu-programs.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_c4c67c24._.js.map