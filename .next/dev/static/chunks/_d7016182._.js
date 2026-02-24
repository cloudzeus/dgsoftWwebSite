(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
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
"[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const DropdownMenuPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DropdownMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"];
const DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"];
const DropdownMenuSubTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
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
_c1 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"].displayName;
const DropdownMenuSubContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"].displayName;
const DropdownMenuContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className),
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
_c5 = DropdownMenuContent;
DropdownMenuContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DropdownMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = DropdownMenuItem;
DropdownMenuItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
_c9 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"].displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
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
_c11 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"].displayName;
const DropdownMenuLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 148,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = DropdownMenuLabel;
DropdownMenuLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const DropdownMenuSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 164,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c16 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "DropdownMenuSubTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c2, "DropdownMenuSubContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DropdownMenuSubContent");
__turbopack_context__.k.register(_c4, "DropdownMenuContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "DropdownMenuContent");
__turbopack_context__.k.register(_c6, "DropdownMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c7, "DropdownMenuItem");
__turbopack_context__.k.register(_c8, "DropdownMenuCheckboxItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c10, "DropdownMenuRadioItem$React.forwardRef");
__turbopack_context__.k.register(_c11, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c12, "DropdownMenuLabel$React.forwardRef");
__turbopack_context__.k.register(_c13, "DropdownMenuLabel");
__turbopack_context__.k.register(_c14, "DropdownMenuSeparator$React.forwardRef");
__turbopack_context__.k.register(_c15, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c16, "DropdownMenuShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/lib/actions/data:5a28b2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createKad",
    ()=>$$RSC_SERVER_ACTION_16
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409b77f58d8fdce5115f277fc75bb84e70bb0f2b0f":"createKad"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("409b77f58d8fdce5115f277fc75bb84e70bb0f2b0f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createKad");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyUkF1YXNCLHdMQUFBIn0=
}),
"[project]/app/lib/actions/data:ac9977 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateKad",
    ()=>$$RSC_SERVER_ACTION_17
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60391bfa9d218b5a00ffa395e72f94fc2e34b4a1a3":"updateKad"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60391bfa9d218b5a00ffa395e72f94fc2e34b4a1a3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateKad");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyUkErYXNCLHdMQUFBIn0=
}),
"[project]/app/lib/actions/data:e1e461 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteKad",
    ()=>$$RSC_SERVER_ACTION_18
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40476ef778a5ff3bf6f14cc22c4048413d33a7d6d3":"deleteKad"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40476ef778a5ff3bf6f14cc22c4048413d33a7d6d3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteKad");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyUkF1YnNCLHdMQUFBIn0=
}),
"[project]/app/lib/actions/data:1cf2d2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linkKadToProgram",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60ae3202d1de7978af9774e277a9d9e65b59430ea7":"linkKadToProgram"},"app/lib/actions/eu-program.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60ae3202d1de7978af9774e277a9d9e65b59430ea7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "linkKadToProgram");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXUtcHJvZ3JhbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV1UHJvZ3JhbXMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkIGFjY2Vzcy4gQWRtaW4gb25seS5cIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtLmZpbmRNYW55KHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIGthZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBrYWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczoge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBFVSBQUk9HUkFNUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV1UHJvZ3JhbShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIC4uLnByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcHJvZ3JhbURhdGEuYWN0aXZlID8/IHRydWUsXG4gICAgICAgICAgICAgICAgbWluaW11bUNvbXBhbnlZZWFyczogcHJvZ3JhbURhdGEubWluaW11bUNvbXBhbnlZZWFycyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluaW11bUVtcGxveWVlczogcHJvZ3JhbURhdGEubWluaW11bUVtcGxveWVlcyA/IHBhcnNlSW50KHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMsIDEwKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWF4QnVkZ2V0OiBwcm9ncmFtRGF0YS5tYXhCdWRnZXQgPyBwYXJzZUZsb2F0KHByb2dyYW1EYXRhLm1heEJ1ZGdldCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIGFubm91bmNlZERhdGU6IHByb2dyYW1EYXRhLmFubm91bmNlZERhdGUgPyBuZXcgRGF0ZShwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgc3VibWlzc2lvbkRhdGU6IHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuc3VibWlzc2lvbkRhdGUpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBwcm9ncmFtRGF0YS5lbmREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuZW5kRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICBrYWRzOiB7IGluY2x1ZGU6IHsga2FkOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICBwZXJpZmVyaWVzOiB7IGluY2x1ZGU6IHsgcGVyaWZlcmlhOiB0cnVlIH0gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDUkVBVEUgRVUgUFJPR1JBTSBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV1UHJvZ3JhbShpZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBrYWRzLCAuLi5wcm9ncmFtRGF0YSB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS51cGRhdGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9ncmFtRGF0YSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2dyYW1EYXRhLmFjdGl2ZSA/PyB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbmltdW1Db21wYW55WWVhcnM6IHByb2dyYW1EYXRhLm1pbmltdW1Db21wYW55WWVhcnMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtQ29tcGFueVllYXJzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbmltdW1FbXBsb3llZXM6IHByb2dyYW1EYXRhLm1pbmltdW1FbXBsb3llZXMgPyBwYXJzZUludChwcm9ncmFtRGF0YS5taW5pbXVtRW1wbG95ZWVzLCAxMCkgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1heEJ1ZGdldDogcHJvZ3JhbURhdGEubWF4QnVkZ2V0ID8gcGFyc2VGbG9hdChwcm9ncmFtRGF0YS5tYXhCdWRnZXQpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZWREYXRlOiBwcm9ncmFtRGF0YS5hbm5vdW5jZWREYXRlID8gbmV3IERhdGUocHJvZ3JhbURhdGEuYW5ub3VuY2VkRGF0ZSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb25EYXRlOiBwcm9ncmFtRGF0YS5zdWJtaXNzaW9uRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLnN1Ym1pc3Npb25EYXRlKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogcHJvZ3JhbURhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKHByb2dyYW1EYXRhLmVuZERhdGUpIDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAga2FkczogeyBpbmNsdWRlOiB7IGthZDogdHJ1ZSB9IH0sXG4gICAgICAgICAgICAgICAgcGVyaWZlcmllczogeyBpbmNsdWRlOiB7IHBlcmlmZXJpYTogdHJ1ZSB9IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVVBEQVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFdVByb2dyYW0oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbS5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiREVMRVRFIEVVIFBST0dSQU0gRXJyb3I6XCIsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxLYWRzTGlzdCgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWQgYWNjZXNzLiBBZG1pbiBvbmx5LlwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWQuZmluZE1hbnkoe1xuICAgICAgICAgICAgb3JkZXJCeTogeyBjb2RlOiAnYXNjJyB9XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdFVCBLQURTIEVycm9yOlwiLCBlcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlua0thZFRvUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZXVQcm9ncmFtSWQ6IHByb2dyYW1JZCwga2FkSWQ6IGthZElkIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgaWYgKGUuY29kZSAhPT0gJ1AyMDAyJykgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7IC8vIGlnbm9yZSBkdXBsaWNhdGUgZW50cnlcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bmxpbmtLYWRGcm9tUHJvZ3JhbShwcm9ncmFtSWQ6IHN0cmluZywga2FkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uZGVsZXRlTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkSWQgfVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuLy8gQnVsayBPQ1IgcHJvY2Vzc2luZyBhY3Rpb25cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQZXJpZmVyaWVzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZCBhY2Nlc3MuIEFkbWluIG9ubHkuXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBwYXJlbnRDb2RlOiBudWxsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBuYW1lRUw6ICdhc2MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWVFTDogJ2FzYycgfVxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgUEVSSUZFUklFUyBFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpbmtQZXJpZmVyaWFUb1Byb2dyYW0ocHJvZ3JhbUlkOiBzdHJpbmcsIHBlcmlmZXJpYUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEuZXVQcm9ncmFtUGVyaWZlcmlhLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGlmIChlLmNvZGUgIT09ICdQMjAwMicpIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua1BlcmlmZXJpYUZyb21Qcm9ncmFtKHByb2dyYW1JZDogc3RyaW5nLCBwZXJpZmVyaWFJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmV1UHJvZ3JhbVBlcmlmZXJpYS5kZWxldGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGV1UHJvZ3JhbUlkOiBwcm9ncmFtSWQsIHBlcmlmZXJpYUlkOiBwZXJpZmVyaWFJZCB9XG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpXG4gICAgfVxufVxuXG4vLyBCdWxrIE9DUiBwcm9jZXNzaW5nIGFjdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NPY3JBbmRDcmVhdGVLYWRzKHByb2dyYW1JZDogc3RyaW5nLCBleHRyYWN0ZWRLYWRzOiB7IGNvZGU6IHN0cmluZywgZGVzYzogc3RyaW5nIH1bXSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV4dHJhY3RlZCBLQURzLCB1cHNlcnQgdGhlbSBpZiB0aGV5IGRvbid0IGV4aXN0LCBhbmQgbGluayB0aGVtIHRvIHRoZSBwcm9ncmFtXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBleHRyYWN0ZWRLYWRzKSB7XG4gICAgICAgICAgICBpZiAoIWsuY29kZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFVwc2VydCBLYWRcbiAgICAgICAgICAgIGNvbnN0IGthZCA9IGF3YWl0IHByaXNtYS5rYWQudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlOiB7fSwgLy8gRG9uJ3Qgb3ZlcnJpZGUgZXhpc3RpbmcgZGVzY3JpcHRpb24gaWYgd2UgaGF2ZSBpdFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiBrLmNvZGUudHJpbSgpLCBuYW1lRUw6IGsuZGVzYy50cmltKCkgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIExpbmsgS2FkIHRvIFByb2dyYW0gKGlnbm9yZSBpZiBleGlzdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5rYWRFdVByb2dyYW0uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBldVByb2dyYW1JZDogcHJvZ3JhbUlkLCBrYWRJZDoga2FkLmlkIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdQMjAwMicpIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQUk9DRVNTIE9DUiBFcnJvcjpcIiwgZSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBlcmlmZXJpYShkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyaWZlcmlhKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQZXJpZmVyaWEoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEucGVyaWZlcmlhLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRLYWxsaWtyYXRpcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9lZWxsYWsvR3JlZWstcGVyZmVjdHVyZXMtbXVuaWNpcGFsaXRpZXMtc2V0dGxlbWVudHMtbmFtZS1kaXJlY3RvcnkvbWFzdGVyL2Rpb2lraHRpa2hfZGlhaXJlc2hfa2FsbGlrcmF0aHNfZWxzdGF0LmNzdlwiO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIEthbGxpa3JhdGlzIGRhdGFzZXQuXCIpO1xuICAgICAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBjb25zdCB2YWxpZFJlY29yZHM6IHsgY29kZTogc3RyaW5nOyBuYW1lRUw6IHN0cmluZzsgbGV2ZWw6IG51bWJlcjsgcGFyZW50Q29kZTogc3RyaW5nIHwgbnVsbCB9W10gPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NWIHN0cnVjdHVyZSAoYWZ0ZXIgNiBoZWFkZXIgcm93cyk6XG4gICAgICAgICAqIGNvbDAgPSBzZXJpYWwsIGNvbDEgPSBsZXZlbCAoMS04KSwgY29sMiA9IGNvZGUxIChhbHdheXMgdGhlIFBlcmlmZXJpYSBjb2RlIGUuZy4gXCIxMTFcIiksXG4gICAgICAgICAqIGNvbDMgPSBLYWxsaWtyYXRpcyBzdWItY29kZSAoZS5nLiBcIjAxXCIgZm9yIGxldmVsNCwgXCIwMTAxXCIgZm9yIGxldmVsNSksIGNvbDQgPSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIFdlIGNhcHR1cmUgbGV2ZWxzIDMsIDQsIDU6XG4gICAgICAgICAqICBMZXZlbCAzIChQZXJpZmVyaWEpOiAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpICAgICAgICAgICAgIHBhcmVudENvZGUgPSBudWxsXG4gICAgICAgICAqICBMZXZlbCA0IChQZXJpZmVyZWlha2kgRW5vdGl0YSk6IGNvZGUgPSBjb2RlMS50cmltKCkrY29kZTIudHJpbSgpICBwYXJlbnRDb2RlID0gY29kZTEudHJpbSgpXG4gICAgICAgICAqICBMZXZlbCA1IChEaW1vcyk6ICAgICAgICAgICAgICBjb2RlID0gY29kZTEudHJpbSgpK2NvZGUyLnRyaW0oKSAgcGFyZW50Q29kZSA9IGNvZGUxLnRyaW0oKStjb2RlMi50cmltKCkuc2xpY2UoMCwtMilcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHBhcnNlQ1NWTGluZSA9IChsaW5lOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBsaW5lLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ggPSBsaW5lW2NdO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJywnICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSA2OyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIWxpbmUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIGNvcnJlY3QgcXVvdGUtYXdhcmUgcGFyc2VyXG4gICAgICAgICAgICBjb25zdCBjb2xzID0gcGFyc2VDU1ZMaW5lKGxpbmUpO1xuICAgICAgICAgICAgaWYgKGNvbHMubGVuZ3RoIDwgNSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gcGFyc2VJbnQoY29sc1sxXSwgMTApO1xuICAgICAgICAgICAgaWYgKGlzTmFOKGxldmVsKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIVszLCA0LCA1XS5pbmNsdWRlcyhsZXZlbCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjcDEgPSBjb2xzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGNwMiA9IGNvbHNbM10udHJpbSgpO1xuICAgICAgICAgICAgLy8gU3RyaXAgR3JlZWsgZ3JhbW1hdGljYWwgc3VmZml4IGFmdGVyIGNvbW1hIGluc2lkZSB0aGUgbmFtZSBlLmcuIFwizprOv868zr/PhM63zr3OrizOt1wiXG4gICAgICAgICAgICBjb25zdCBuYW1lRUwgPSBjb2xzWzRdLnJlcGxhY2UoLyxcXHMqXFxTKyQvLCBcIlwiKS50cmltKCk7XG5cbiAgICAgICAgICAgIGlmICghY3AxIHx8ICFuYW1lRUwpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBsZXQgY29kZTogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHBhcmVudENvZGU6IHN0cmluZyB8IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChsZXZlbCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDE7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29kZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IGNwMSArIGNwMjsgICAgICAgICAgIC8vIGUuZy4gXCIxMTFcIitcIjAxXCIgPSBcIjExMTAxXCJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb2RlID0gY3AxOyAgICAgICAgICAgLy8gcGFyZW50ID0gUGVyaWZlcmlhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvZGUgPSBjcDEgKyBjcDI7ICAgICAgICAgICAvLyBlLmcuIFwiMTExXCIrXCIwMTAxXCIgPSBcIjExMTAxMDFcIlxuICAgICAgICAgICAgICAgIHBhcmVudENvZGUgPSBjcDEgKyBjcDIuc2xpY2UoMCwgLTIpOyAvLyBzdHJpcCBsYXN0IDIgZGlnaXRzIOKGkiDOlc69z4zPhM63z4TOsVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZFJlY29yZHMucHVzaCh7IGNvZGUsIG5hbWVFTCwgbGV2ZWwsIHBhcmVudENvZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbGV2ZWwgMyBmaXJzdCAocm9vdHMpLCB0aGVuIDQsIHRoZW4gNSB0byByZXNwZWN0IEZLIGNvbnN0cmFpbnRzXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0TGV2ZWwgb2YgWzMsIDQsIDVdKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaCA9IHZhbGlkUmVjb3Jkcy5maWx0ZXIociA9PiByLmxldmVsID09PSB0YXJnZXRMZXZlbCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlYyBvZiBiYXRjaCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5wZXJpZmVyaWEudXBzZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJlYy5jb2RlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IHsgbmFtZUVMOiByZWMubmFtZUVMLCBsZXZlbDogcmVjLmxldmVsLCBwYXJlbnRDb2RlOiByZWMucGFyZW50Q29kZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiB7IGNvZGU6IHJlYy5jb2RlLCBuYW1lRUw6IHJlYy5uYW1lRUwsIGxldmVsOiByZWMubGV2ZWwsIHBhcmVudENvZGU6IHJlYy5wYXJlbnRDb2RlIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIEZLIHZpb2xhdGlvbnMgb3IgZHVwbGljYXRlcyBzaWxlbnRseVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNvdW50IH07XG5cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlQWxsUGVyaWZlcmllcygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gRmV0Y2ggYWxsIFBlcmlmZXJpZXMgdGhhdCBsYWNrIEVuZ2xpc2ggbmFtZXNcbiAgICAgICAgY29uc3QgdW50cmFuc2xhdGVkID0gYXdhaXQgcHJpc21hLnBlcmlmZXJpYS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBudWxsIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZUVOOiBcIlwiIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFrZTogNTAgLy8gTGltaXQgYmF0Y2ggc2l6ZSB0byBhdm9pZCB0aW1lb3V0c1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodW50cmFuc2xhdGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IDAsIG1lc3NhZ2U6IFwiTm8gdW50cmFuc2xhdGVkIHJlZ2lvbnMgZm91bmQuXCIgfTtcblxuICAgICAgICBjb25zdCBpc0RlZXBzZWVrID0gISFwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBpc0RlZXBzZWVrXG4gICAgICAgICAgICA/IChwcm9jZXNzLmVudi5ERUVQU0VFS19BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkuZGVlcHNlZWsuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIilcbiAgICAgICAgICAgIDogXCJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnNcIjtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuREVFUFNFRUtfQVBJX0tFWSB8fCBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBpc0RlZXBzZWVrID8gXCJkZWVwc2Vlay1jaGF0XCIgOiBcImdwdC00by1taW5pXCI7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcihcIk5vIFRyYW5zbGF0aW9uIEFQSSBLZXkgQXZhaWxhYmxlXCIpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB1bnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21wdCA9IGBUcmFuc2xhdGUgdGhlIGZvbGxvd2luZyBHcmVlayByZWdpb24vbXVuaWNpcGFsaXR5IG5hbWUgdG8gRW5nbGlzaC4gUmVwbHkgT05MWSB3aXRoIHRoZSBFbmdsaXNoIHRyYW5zbGF0aW9uLiBObyBxdW90ZXMsIG5vIGludHJvLlxcblxcblRleHQ6ICR7cmVnaW9uLm5hbWVFTH1gO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRUZXh0ID0gZGF0YS5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50Py50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnBlcmlmZXJpYS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiByZWdpb24uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG5hbWVFTjogdHJhbnNsYXRlZFRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBmYWlsIGZvclwiLCByZWdpb24ubmFtZUVMLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY291bnQ6IHRyYW5zbGF0ZWRDb3VudCwgcmVtYWluaW5nOiB1bnRyYW5zbGF0ZWQubGVuZ3RoIC0gdHJhbnNsYXRlZENvdW50IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUthZChkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIilcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJpc21hLmthZC5jcmVhdGUoeyBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSkgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlS2FkKGlkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVLYWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcbiAgICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBwcmlzbWEua2FkLmRlbGV0ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7IHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKSB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWxrQ3JlYXRlS2FkcyhkYXRhOiB7IGRvdGNvZGU6IHN0cmluZywgbmFtZUVMOiBzdHJpbmcgfVtdKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKVxuICAgIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5kb3Rjb2RlKSBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIFRoZSB1bmZvcm1hdHRlZCBjb2RlIGlzIGV4YWN0bHkgdGhlIGRvdGNvZGUgd2l0aG91dCB0aGUgZG90c1xuICAgICAgICAgICAgY29uc3QgcmF3Q29kZSA9IGl0ZW0uZG90Y29kZS5yZXBsYWNlKC9cXC4vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZG90Q29kZVNhdmVkID0gaXRlbS5kb3Rjb2RlLnRyaW0oKTtcblxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmthZC51cHNlcnQoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNvZGU6IHJhd0NvZGUgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHsgZG90Y29kZTogZG90Q29kZVNhdmVkLCBuYW1lRUw6IGl0ZW0ubmFtZUVMLnRyaW0oKSB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogeyBjb2RlOiByYXdDb2RlLCBkb3Rjb2RlOiBkb3RDb2RlU2F2ZWQsIG5hbWVFTDogaXRlbS5uYW1lRUwudHJpbSgpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBjb3VudCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQlVMSyBLQUQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrU0FnSHNCLDZMQUFBIn0=
}),
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
"[project]/components/admin/eu-programs/data-table-kads.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTableKads",
    ()=>DataTableKads
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-left.js [app-client] (ecmascript) <export default as ChevronsLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-right.js [app-client] (ecmascript) <export default as ChevronsRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$5a28b2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:5a28b2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$ac9977__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:ac9977 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$e1e461__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:e1e461 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$1cf2d2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/lib/actions/data:1cf2d2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
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
function DataTableKads({ data: initialData, programs = [] }) {
    _s();
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](initialData || []);
    const [isDialogOpen, setIsDialogOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isAssignOpen, setIsAssignOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [editingItem, setEditingItem] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [isSaving, setIsSaving] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isUploading, setIsUploading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [isAssigning, setIsAssigning] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [searchQuery, setSearchQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const [rowSelection, setRowSelection] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    const [selectedProgramId, setSelectedProgramId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    const fileInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [formData, setFormData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        code: "",
        nameEL: "",
        nameEN: ""
    });
    // ── Filtering ────────────────────────────────────────────────────────────
    const filteredData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DataTableKads.useMemo[filteredData]": ()=>{
            const q = searchQuery.toLowerCase().trim();
            if (!q) return data;
            return data.filter({
                "DataTableKads.useMemo[filteredData]": (k)=>k.code.toLowerCase().includes(q) || k.dotcode && k.dotcode.toLowerCase().includes(q) || k.nameEL && k.nameEL.toLowerCase().includes(q)
            }["DataTableKads.useMemo[filteredData]"]);
        }
    }["DataTableKads.useMemo[filteredData]"], [
        data,
        searchQuery
    ]);
    // Reset selection & page when search changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DataTableKads.useEffect": ()=>{
            setRowSelection({});
            table.setPageIndex(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["DataTableKads.useEffect"], [
        searchQuery
    ]);
    // ── Edit / Create ────────────────────────────────────────────────────────
    const openEdit = (item)=>{
        if (item) {
            setEditingItem(item);
            setFormData({
                code: item.code,
                nameEL: item.nameEL || "",
                nameEN: item.nameEN || ""
            });
        } else {
            setEditingItem(null);
            setFormData({
                code: "",
                nameEL: "",
                nameEN: ""
            });
        }
        setIsDialogOpen(true);
    };
    const handleSave = async ()=>{
        setIsSaving(true);
        try {
            if (!formData.code) throw new Error("Code is required");
            const cleanData = {
                code: formData.code.trim(),
                nameEL: formData.nameEL.trim(),
                nameEN: formData.nameEN.trim() || null
            };
            if (editingItem) {
                const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$ac9977__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateKad"])(editingItem.id, cleanData);
                setData(data.map((d)=>d.id === updated.id ? updated : d));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("KAD updated");
            } else {
                const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$5a28b2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createKad"])(cleanData);
                setData([
                    created,
                    ...data
                ]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("KAD created");
            }
            setIsDialogOpen(false);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message);
        } finally{
            setIsSaving(false);
        }
    };
    // ── File Upload ──────────────────────────────────────────────────────────
    const handleFileUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        e.target.value = "";
        setIsUploading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(`Uploading "${file.name}"...`, {
            id: "xls-upload"
        });
        try {
            const form = new FormData();
            form.append("file", file);
            const res = await fetch("/api/admin/eu-programs/upload-kads", {
                method: "POST",
                body: form
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json.error || "Upload failed");
            if (json.errors?.length > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Inserted ${json.count} of ${json.total} KADs. Some errors: ${json.errors[0]}`, {
                    id: "xls-upload",
                    duration: 8000
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`✓ Successfully synced ${json.count} KADs to database!`, {
                    id: "xls-upload"
                });
            }
            setTimeout(()=>window.location.reload(), 1200);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Upload failed: ${err.message}`, {
                id: "xls-upload",
                duration: 8000
            });
        } finally{
            setIsUploading(false);
        }
    };
    // ── Bulk Assign ──────────────────────────────────────────────────────────
    const selectedIds = Object.keys(rowSelection).filter((k)=>rowSelection[k]);
    // Map row indices to actual KAD ids from filtered+paginated view
    const selectedKadIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "DataTableKads.useMemo[selectedKadIds]": ()=>{
            return selectedIds.map({
                "DataTableKads.useMemo[selectedKadIds]": (idx)=>filteredData[parseInt(idx)]?.id
            }["DataTableKads.useMemo[selectedKadIds]"]).filter(Boolean);
        }
    }["DataTableKads.useMemo[selectedKadIds]"], [
        selectedIds,
        filteredData
    ]);
    const handleBulkAssign = async ()=>{
        if (!selectedProgramId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select a program first.");
            return;
        }
        if (selectedKadIds.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No KADs selected.");
            return;
        }
        setIsAssigning(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(`Linking ${selectedKadIds.length} KADs...`, {
            id: "bulk-assign"
        });
        try {
            let linked = 0;
            for (const kadId of selectedKadIds){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$1cf2d2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["linkKadToProgram"])(selectedProgramId, kadId);
                linked++;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`✓ Linked ${linked} KADs to program successfully!`, {
                id: "bulk-assign"
            });
            setRowSelection({});
            setIsAssignOpen(false);
            setSelectedProgramId("");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Failed: ${err.message}`, {
                id: "bulk-assign",
                duration: 6000
            });
        } finally{
            setIsAssigning(false);
        }
    };
    // ── Columns ──────────────────────────────────────────────────────────────
    const columns = [
        {
            id: "select",
            header: ({ table })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                    checked: table.getIsAllPageRowsSelected() ? true : table.getIsSomePageRowsSelected() ? "indeterminate" : false,
                    onCheckedChange: (v)=>table.toggleAllPageRowsSelected(!!v),
                    "aria-label": "Select all"
                }, void 0, false, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 178,
                    columnNumber: 17
                }, this),
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                    checked: row.getIsSelected(),
                    onCheckedChange: (v)=>row.toggleSelected(!!v),
                    "aria-label": "Select row"
                }, void 0, false, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 185,
                    columnNumber: 17
                }, this),
            enableSorting: false,
            enableHiding: false,
            size: 40
        },
        {
            accessorKey: "dotcode",
            header: "Formatted KAD",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-mono text-muted-foreground",
                    children: row.original.dotcode || "—"
                }, void 0, false, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 198,
                    columnNumber: 32
                }, this)
        },
        {
            accessorKey: "code",
            header: "Raw Code",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-mono font-bold text-primary",
                    children: row.original.code
                }, void 0, false, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 203,
                    columnNumber: 32
                }, this)
        },
        {
            accessorKey: "nameEL",
            header: "Description (Greek)",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-muted-foreground max-w-lg truncate",
                    title: row.original.nameEL || "",
                    children: row.original.nameEL || "—"
                }, void 0, false, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                }, this)
        },
        {
            id: "actions",
            cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
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
                                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                        lineNumber: 220,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 219,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 218,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                            align: "end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                    className: "cursor-pointer",
                                    onClick: ()=>openEdit(row.original),
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 224,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                    className: "cursor-pointer text-red-500",
                                    onClick: async ()=>{
                                        if (confirm("Delete this KAD forever? Avoid if used by active programs.")) {
                                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$actions$2f$data$3a$e1e461__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteKad"])(row.original.id);
                                            setData(data.filter((d)=>d.id !== row.original.id));
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("KAD deleted");
                                        }
                                    },
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 225,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 223,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                }, this)
        }
    ];
    // ── Table ────────────────────────────────────────────────────────────────
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data: filteredData,
        columns,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreRowModel"])(),
        getPaginationRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaginationRowModel"])(),
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection
        },
        initialState: {
            pagination: {
                pageSize: 25
            }
        }
    });
    const totalSelected = selectedKadIds.length;
    const pageCount = table.getPageCount();
    const pageIndex = table.getState().pagination.pageIndex;
    const pageSize = table.getState().pagination.pageSize;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 relative",
        children: [
            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-background rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-5 max-w-sm w-full mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                            className: "w-12 h-12 text-indigo-500 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 261,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold",
                                    children: "Importing KADs..."
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 263,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mt-1",
                                    children: "Parsing file and inserting into database. This may take a moment."
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 264,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 262,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 260,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                lineNumber: 259,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-between items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Search KAD codes or descriptions...",
                                className: "max-w-sm border-muted-foreground/30 focus-visible:ring-primary text-zinc-800",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 273,
                                columnNumber: 21
                            }, this),
                            totalSelected > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground whitespace-nowrap",
                                children: [
                                    totalSelected,
                                    " selected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 280,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                        lineNumber: 272,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-shrink-0",
                        children: [
                            totalSelected > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "default",
                                className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md",
                                onClick: ()=>setIsAssignOpen(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                        lineNumber: 294,
                                        columnNumber: 29
                                    }, this),
                                    "Assign ",
                                    totalSelected,
                                    " to Program"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 289,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                type: "file",
                                className: "hidden",
                                accept: ".xlsx,.xls,.csv",
                                onChange: handleFileUpload
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "bg-black hover:bg-black/80 text-white border-black shadow-md text-sm font-medium",
                                disabled: isUploading,
                                onClick: ()=>fileInputRef.current?.click(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                        lineNumber: 313,
                                        columnNumber: 25
                                    }, this),
                                    "Bulk Upload XLS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 307,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>openEdit(),
                                className: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                        lineNumber: 320,
                                        columnNumber: 25
                                    }, this),
                                    " Add KAD"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                        lineNumber: 286,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                lineNumber: 271,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-md border bg-card text-card-foreground shadow overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            className: "bg-muted",
                            children: table.getHeaderGroups().map((hg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: hg.headers.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            style: {
                                                width: h.column.getSize() !== 150 ? h.column.getSize() : undefined
                                            },
                                            children: h.isPlaceholder ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(h.column.columnDef.header, h.getContext())
                                        }, h.id, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 332,
                                            columnNumber: 37
                                        }, this))
                                }, hg.id, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 330,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 328,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    "data-state": row.getIsSelected() && "selected",
                                    className: row.getIsSelected() ? "bg-indigo-50 dark:bg-indigo-950/30" : "",
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                        }, cell.id, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 348,
                                            columnNumber: 41
                                        }, this))
                                }, row.id, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 342,
                                    columnNumber: 33
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    colSpan: columns.length,
                                    className: "h-24 text-center text-muted-foreground",
                                    children: "No KADs found for this criteria."
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 356,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 355,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 339,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 327,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                lineNumber: 326,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "whitespace-nowrap",
                                children: "Rows per page"
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 369,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: String(pageSize),
                                onValueChange: (v)=>{
                                    table.setPageSize(Number(v));
                                    table.setPageIndex(0);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "h-8 w-[70px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 378,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                        lineNumber: 377,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            10,
                                            25,
                                            50,
                                            100,
                                            250
                                        ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: String(n),
                                                children: n
                                            }, n, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                                lineNumber: 382,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                        lineNumber: 380,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 370,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "whitespace-nowrap",
                                children: filteredData.length === 0 ? "0 results" : `${pageIndex * pageSize + 1}–${Math.min((pageIndex + 1) * pageSize, filteredData.length)} of ${filteredData.length}`
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 386,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                        lineNumber: 368,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 bg-zinc-700 hover:bg-zinc-600 border-zinc-700 text-white disabled:opacity-40",
                                onClick: ()=>table.setPageIndex(0),
                                disabled: !table.getCanPreviousPage(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__["ChevronsLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 394,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 393,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 bg-zinc-700 hover:bg-zinc-600 border-zinc-700 text-white disabled:opacity-40",
                                onClick: ()=>table.previousPage(),
                                disabled: !table.getCanPreviousPage(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 397,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 396,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground px-2 whitespace-nowrap",
                                children: [
                                    "Page ",
                                    pageIndex + 1,
                                    " / ",
                                    pageCount || 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 399,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 bg-zinc-700 hover:bg-zinc-600 border-zinc-700 text-white disabled:opacity-40",
                                onClick: ()=>table.nextPage(),
                                disabled: !table.getCanNextPage(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 403,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 402,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "icon",
                                className: "h-8 w-8 bg-zinc-700 hover:bg-zinc-600 border-zinc-700 text-white disabled:opacity-40",
                                onClick: ()=>table.setPageIndex(pageCount - 1),
                                disabled: !table.getCanNextPage(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsRight$3e$__["ChevronsRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 406,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 405,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                        lineNumber: 392,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                lineNumber: 366,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-xl w-full bg-background text-foreground md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-2xl flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                        lineNumber: 416,
                                        columnNumber: 29
                                    }, this),
                                    " ",
                                    editingItem ? "Edit KAD" : "Add KAD"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 415,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 414,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "font-bold",
                                            children: "Code *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 421,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            className: "mt-1 font-mono",
                                            placeholder: "e.g. 62.01",
                                            value: formData.code,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    code: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 422,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-1",
                                            children: "Include dots matching government standards."
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 423,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 420,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "font-bold",
                                            children: "Description (Greek) *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 426,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            className: "mt-1",
                                            placeholder: "e.g. Παραγωγή λογισμικού...",
                                            value: formData.nameEL,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    nameEL: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 427,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 425,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "font-bold",
                                            children: "Description (English)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 430,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            className: "mt-1",
                                            value: formData.nameEN,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    nameEN: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 431,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 429,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 419,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end pt-4 border-t mt-4 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsDialogOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 435,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    disabled: isSaving,
                                    onClick: handleSave,
                                    children: [
                                        isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                            className: "h-4 w-4 animate-spin mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 437,
                                            columnNumber: 41
                                        }, this) : null,
                                        "Save KAD"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 436,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 434,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 413,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                lineNumber: 412,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isAssignOpen,
                onOpenChange: setIsAssignOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-lg w-full bg-background text-foreground md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-xl flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                        className: "w-5 h-5 text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                        lineNumber: 449,
                                        columnNumber: 29
                                    }, this),
                                    "Assign ",
                                    totalSelected,
                                    " KADs to EU Program"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                lineNumber: 448,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 447,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "The selected ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: totalSelected
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 456,
                                            columnNumber: 42
                                        }, this),
                                        " KADs will be linked to the program you choose below. Existing links won't be overwritten."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 455,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "font-bold mb-2 block",
                                            children: "Select EU Program *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 461,
                                            columnNumber: 29
                                        }, this),
                                        programs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-destructive",
                                            children: "No EU programs found. Create one first."
                                        }, void 0, false, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 463,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: selectedProgramId,
                                            onValueChange: setSelectedProgramId,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "Choose a program..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    className: "max-h-72",
                                                    children: programs.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: p.id,
                                                            children: p.nameEL || p.nameEN || p.id
                                                        }, p.id, false, {
                                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                            lineNumber: 465,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 460,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 454,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end pt-4 border-t mt-4 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setIsAssignOpen(false),
                                    disabled: isAssigning,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 482,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    disabled: isAssigning || !selectedProgramId || programs.length === 0,
                                    onClick: handleBulkAssign,
                                    className: "bg-indigo-600 hover:bg-indigo-700 text-white",
                                    children: isAssigning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                                className: "h-4 w-4 animate-spin mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                                lineNumber: 491,
                                                columnNumber: 37
                                            }, this),
                                            "Linking..."
                                        ]
                                    }, void 0, true) : `Link ${totalSelected} KADs`
                                }, void 0, false, {
                                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                                    lineNumber: 485,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                            lineNumber: 481,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                    lineNumber: 446,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
                lineNumber: 445,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/admin/eu-programs/data-table-kads.tsx",
        lineNumber: 255,
        columnNumber: 9
    }, this);
}
_s(DataTableKads, "vk+MxO+k+27kLx7ujZBCH3lGvJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = DataTableKads;
var _c;
__turbopack_context__.k.register(_c, "DataTableKads");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-mobile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener("change", onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
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
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 68,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-primary/10", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", className),
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
_c1 = TooltipContent;
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "TooltipContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript) <export default as PanelLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
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
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useSidebar() {
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
_s(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const SidebarProvider = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = _s1(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref)=>{
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [openMobile, setOpenMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultOpen);
    const open = openProp ?? _open;
    const setOpen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SidebarProvider.useCallback[setOpen]": (value)=>{
            const openState = typeof value === "function" ? value(open) : value;
            if (setOpenProp) {
                setOpenProp(openState);
            } else {
                _setOpen(openState);
            }
            // This sets the cookie to keep the sidebar state.
            document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
        }
    }["SidebarProvider.useCallback[setOpen]"], [
        setOpenProp,
        open
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SidebarProvider.useCallback[toggleSidebar]": ()=>{
            return isMobile ? setOpenMobile({
                "SidebarProvider.useCallback[toggleSidebar]": (open)=>!open
            }["SidebarProvider.useCallback[toggleSidebar]"]) : setOpen({
                "SidebarProvider.useCallback[toggleSidebar]": (open)=>!open
            }["SidebarProvider.useCallback[toggleSidebar]"]);
        }
    }["SidebarProvider.useCallback[toggleSidebar]"], [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SidebarProvider.useEffect": ()=>{
            const handleKeyDown = {
                "SidebarProvider.useEffect.handleKeyDown": (event)=>{
                    if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                        event.preventDefault();
                        toggleSidebar();
                    }
                }
            }["SidebarProvider.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "SidebarProvider.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["SidebarProvider.useEffect"];
        }
    }["SidebarProvider.useEffect"], [
        toggleSidebar
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SidebarProvider.useMemo[contextValue]": ()=>({
                state,
                open,
                setOpen,
                isMobile,
                openMobile,
                setOpenMobile,
                toggleSidebar
            })
    }["SidebarProvider.useMemo[contextValue]"], [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            delayDuration: 0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH,
                    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
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
}, "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
})), "QSOkjq1AvKFJW5+zwiK52jPX7zI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c1 = SidebarProvider;
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = _s2(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref)=>{
    _s2();
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
            open: openMobile,
            onOpenChange: setOpenMobile,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        className: "sr-only",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                children: "Sidebar"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sidebar.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "group peer hidden text-sidebar-foreground md:block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]")
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex", side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
                ...props,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}, "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
    return [
        useSidebar
    ];
})), "hAL3+uRFwO9tnbDK50BUE5wZ71s=", false, function() {
    return [
        useSidebar
    ];
});
_c3 = Sidebar;
Sidebar.displayName = "Sidebar";
const SidebarTrigger = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = _s3(({ className, onClick, ...props }, ref)=>{
    _s3();
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7", className),
        onClick: (event)=>{
            onClick?.(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeft$3e$__["PanelLeft"], {}, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
});
_c5 = SidebarTrigger;
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = /*#__PURE__*/ _s4(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex", "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 305,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
})), "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
    return [
        useSidebar
    ];
});
_c7 = SidebarRail;
SidebarRail.displayName = "SidebarRail";
const SidebarInset = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c9 = SidebarInset;
SidebarInset.displayName = "SidebarInset";
const SidebarInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        ref: ref,
        "data-sidebar": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 350,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c11 = SidebarInput;
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c13 = SidebarHeader;
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 383,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c15 = SidebarFooter;
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c16 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        "data-sidebar": "separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-2 w-auto bg-sidebar-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c17 = SidebarSeparator;
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c18 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c19 = SidebarContent;
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c20 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full min-w-0 flex-col p-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 431,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c21 = SidebarGroup;
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c22 = ({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 448,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c23 = SidebarGroupLabel;
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c24 = ({ className, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "group-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c25 = SidebarGroupAction;
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c26 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "group-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 489,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c27 = SidebarGroupContent;
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c28 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full min-w-0 flex-col gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 502,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c29 = SidebarMenu;
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c30 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        "data-sidebar": "menu-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/menu-item relative", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 515,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c31 = SidebarMenuItem;
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
const SidebarMenuButton = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c32 = _s5(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref)=>{
    _s5();
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sidebarMenuButtonVariants({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: button
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 592,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
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
}, "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
    return [
        useSidebar
    ];
})), "DSCdbs8JtpmKVxCYgM7sPAZNgB0=", false, function() {
    return [
        useSidebar
    ];
});
_c33 = SidebarMenuButton;
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c34 = ({ className, asChild = false, showOnHover = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0", // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 615,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c35 = SidebarMenuAction;
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c36 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 640,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c37 = SidebarMenuBadge;
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = /*#__PURE__*/ _s6(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c38 = _s6(({ className, showIcon = false, ...props }, ref)=>{
    _s6();
    // Random width between 50 to 90%.
    const width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SidebarMenuSkeleton.useMemo[width]": ()=>{
            return `${Math.floor(Math.random() * 40) + 50}%`;
        }
    }["SidebarMenuSkeleton.useMemo[width]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "menu-skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 items-center gap-2 rounded-md px-2", className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }, void 0, false, {
                fileName: "[project]/components/ui/sidebar.tsx",
                lineNumber: 676,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
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
}, "nKFjX4dxbYo91VAj5VdWQ1XUe3I=")), "nKFjX4dxbYo91VAj5VdWQ1XUe3I=");
_c39 = SidebarMenuSkeleton;
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c40 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ref: ref,
        "data-sidebar": "menu-sub",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 699,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c41 = SidebarMenuSub;
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c42 = ({ ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 715,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0)));
_c43 = SidebarMenuSubItem;
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c44 = ({ asChild = false, size = "md", isActive, className, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sidebar.tsx",
        lineNumber: 729,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c45 = SidebarMenuSubButton;
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45;
__turbopack_context__.k.register(_c, "SidebarProvider$React.forwardRef");
__turbopack_context__.k.register(_c1, "SidebarProvider");
__turbopack_context__.k.register(_c2, "Sidebar$React.forwardRef");
__turbopack_context__.k.register(_c3, "Sidebar");
__turbopack_context__.k.register(_c4, "SidebarTrigger$React.forwardRef");
__turbopack_context__.k.register(_c5, "SidebarTrigger");
__turbopack_context__.k.register(_c6, "SidebarRail$React.forwardRef");
__turbopack_context__.k.register(_c7, "SidebarRail");
__turbopack_context__.k.register(_c8, "SidebarInset$React.forwardRef");
__turbopack_context__.k.register(_c9, "SidebarInset");
__turbopack_context__.k.register(_c10, "SidebarInput$React.forwardRef");
__turbopack_context__.k.register(_c11, "SidebarInput");
__turbopack_context__.k.register(_c12, "SidebarHeader$React.forwardRef");
__turbopack_context__.k.register(_c13, "SidebarHeader");
__turbopack_context__.k.register(_c14, "SidebarFooter$React.forwardRef");
__turbopack_context__.k.register(_c15, "SidebarFooter");
__turbopack_context__.k.register(_c16, "SidebarSeparator$React.forwardRef");
__turbopack_context__.k.register(_c17, "SidebarSeparator");
__turbopack_context__.k.register(_c18, "SidebarContent$React.forwardRef");
__turbopack_context__.k.register(_c19, "SidebarContent");
__turbopack_context__.k.register(_c20, "SidebarGroup$React.forwardRef");
__turbopack_context__.k.register(_c21, "SidebarGroup");
__turbopack_context__.k.register(_c22, "SidebarGroupLabel$React.forwardRef");
__turbopack_context__.k.register(_c23, "SidebarGroupLabel");
__turbopack_context__.k.register(_c24, "SidebarGroupAction$React.forwardRef");
__turbopack_context__.k.register(_c25, "SidebarGroupAction");
__turbopack_context__.k.register(_c26, "SidebarGroupContent$React.forwardRef");
__turbopack_context__.k.register(_c27, "SidebarGroupContent");
__turbopack_context__.k.register(_c28, "SidebarMenu$React.forwardRef");
__turbopack_context__.k.register(_c29, "SidebarMenu");
__turbopack_context__.k.register(_c30, "SidebarMenuItem$React.forwardRef");
__turbopack_context__.k.register(_c31, "SidebarMenuItem");
__turbopack_context__.k.register(_c32, "SidebarMenuButton$React.forwardRef");
__turbopack_context__.k.register(_c33, "SidebarMenuButton");
__turbopack_context__.k.register(_c34, "SidebarMenuAction$React.forwardRef");
__turbopack_context__.k.register(_c35, "SidebarMenuAction");
__turbopack_context__.k.register(_c36, "SidebarMenuBadge$React.forwardRef");
__turbopack_context__.k.register(_c37, "SidebarMenuBadge");
__turbopack_context__.k.register(_c38, "SidebarMenuSkeleton$React.forwardRef");
__turbopack_context__.k.register(_c39, "SidebarMenuSkeleton");
__turbopack_context__.k.register(_c40, "SidebarMenuSub$React.forwardRef");
__turbopack_context__.k.register(_c41, "SidebarMenuSub");
__turbopack_context__.k.register(_c42, "SidebarMenuSubItem$React.forwardRef");
__turbopack_context__.k.register(_c43, "SidebarMenuSubItem");
__turbopack_context__.k.register(_c44, "SidebarMenuSubButton$React.forwardRef");
__turbopack_context__.k.register(_c45, "SidebarMenuSubButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/nav-documents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavDocuments",
    ()=>NavDocuments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as FolderIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontalIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontalIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShareIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share.js [app-client] (ecmascript) <export default as ShareIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NavDocuments({ items }) {
    _s();
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroup"], {
        className: "group-data-[collapsible=icon]:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroupLabel"], {
                children: "Documents"
            }, void 0, false, {
                fileName: "[project]/components/nav-documents.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                children: [
                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item.url,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                                fileName: "[project]/components/nav-documents.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuAction"], {
                                                showOnHover: true,
                                                suppressHydrationWarning: true,
                                                className: "rounded-sm data-[state=open]:bg-accent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontalIcon$3e$__["MoreHorizontalIcon"], {}, void 0, false, {
                                                        fileName: "[project]/components/nav-documents.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                            className: "w-24 rounded-lg",
                                            side: "right",
                                            align: "start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"], {}, void 0, false, {
                                                            fileName: "[project]/components/nav-documents.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShareIcon$3e$__["ShareIcon"], {}, void 0, false, {
                                                            fileName: "[project]/components/nav-documents.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                            className: "text-sidebar-foreground/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontalIcon$3e$__["MoreHorizontalIcon"], {
                                    className: "text-sidebar-foreground/70"
                                }, void 0, false, {
                                    fileName: "[project]/components/nav-documents.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(NavDocuments, "7bt3Tpt+2g9LjYXqO6MQJeduxl4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = NavDocuments;
var _c;
__turbopack_context__.k.register(_c, "NavDocuments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/nav-main.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavMain",
    ()=>NavMain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MailIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as MailIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function NavMain({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroup"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                tooltip: "Quick Create",
                                className: "min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircleIcon$3e$__["PlusCircleIcon"], {}, void 0, false, {
                                        fileName: "[project]/components/nav-main.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                className: "h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0",
                                variant: "outline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MailIcon$3e$__["MailIcon"], {}, void 0, false, {
                                        fileName: "[project]/components/nav-main.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                asChild: true,
                                tooltip: item.title,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.url,
                                    children: [
                                        item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                            fileName: "[project]/components/nav-main.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = NavMain;
var _c;
__turbopack_context__.k.register(_c, "NavMain");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/nav-secondary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavSecondary",
    ()=>NavSecondary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.tsx [app-client] (ecmascript)");
"use client";
;
;
function NavSecondary({ items, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroup"], {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.url,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                        fileName: "[project]/components/nav-secondary.tsx",
                                        lineNumber: 32,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = NavSecondary;
var _c;
__turbopack_context__.k.register(_c, "NavSecondary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app-sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppSidebar",
    ()=>AppSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js [app-client] (ecmascript) <export default as ArrowUpCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-client] (ecmascript) <export default as BarChartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CameraIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as CameraIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardListIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardListIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as DatabaseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCodeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-client] (ecmascript) <export default as FileCodeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as FileIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as FolderIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboardIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboardIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as ListIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as SearchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as SettingsIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as UsersIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPinIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as BriefcaseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as GlobeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$documents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nav-documents.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$main$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nav-main.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$secondary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/nav-secondary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
"use client";
;
;
;
;
;
;
const NavUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/nav-user.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.NavUser), {
    loadableGenerated: {
        modules: [
            "[project]/components/nav-user.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-12"
        }, void 0, false, {
            fileName: "[project]/components/app-sidebar.tsx",
            lineNumber: 32,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0))
});
_c = NavUser;
;
;
const navData = {
    navMain: [
        {
            title: "Dashboard",
            url: "/admin/dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboardIcon$3e$__["LayoutDashboardIcon"]
        },
        {
            title: "Lifecycle",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListIcon$3e$__["ListIcon"]
        },
        {
            title: "Analytics",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChartIcon$3e$__["BarChartIcon"]
        },
        {
            title: "Customers",
            url: "/admin/customers",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"]
        },
        {
            title: "Articles",
            url: "/admin/articles",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__["FileTextIcon"]
        },
        {
            title: "Downloads",
            url: "/admin/downloads",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"]
        },
        {
            title: "Careers",
            url: "/admin/careers",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"]
        },
        {
            title: "CV Applications",
            url: "/admin/cv-applications",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__["FileTextIcon"]
        },
        {
            title: "System Users",
            url: "/admin/users",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"]
        },
        {
            title: "Location",
            url: "/admin/locations",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"]
        },
        {
            title: "Projects",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderIcon$3e$__["FolderIcon"]
        },
        {
            title: "Team",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"]
        }
    ],
    navClouds: [
        {
            title: "Capture",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CameraIcon$3e$__["CameraIcon"],
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
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileTextIcon$3e$__["FileTextIcon"],
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
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCodeIcon$3e$__["FileCodeIcon"],
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
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"]
        },
        {
            title: "Periferies",
            url: "/admin/eu-programs/periferies",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__["GlobeIcon"]
        },
        {
            title: "KAD Management",
            url: "/admin/eu-programs/kads",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCodeIcon$3e$__["FileCodeIcon"]
        }
    ],
    navServices: [
        {
            title: "Services",
            url: "/admin/services",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboardIcon$3e$__["LayoutDashboardIcon"]
        }
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__["SettingsIcon"]
        },
        {
            title: "Get Help",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircleIcon$3e$__["HelpCircleIcon"]
        },
        {
            title: "Search",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__["SearchIcon"]
        }
    ],
    documents: [
        {
            name: "Data Library",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseIcon$3e$__["DatabaseIcon"]
        },
        {
            name: "Reports",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardListIcon$3e$__["ClipboardListIcon"]
        },
        {
            name: "Word Assistant",
            url: "#",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileIcon$3e$__["FileIcon"]
        }
    ]
};
function AppSidebar({ user, ...props }) {
    const resolvedUser = user ?? {
        name: "Admin",
        email: "",
        avatar: ""
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
        collapsible: "offcanvas",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                            asChild: true,
                            className: "data-[slot=sidebar-menu-button]:!p-1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpCircleIcon$3e$__["ArrowUpCircleIcon"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/app-sidebar.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-semibold",
                                        children: "Acme Inc."
                                    }, void 0, false, {
                                        fileName: "[project]/components/app-sidebar.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/app-sidebar.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/app-sidebar.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/app-sidebar.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/app-sidebar.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$main$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavMain"], {
                        items: navData.navMain
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroupLabel"], {
                                children: "Funding & European Programs"
                            }, void 0, false, {
                                fileName: "[project]/components/app-sidebar.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                                className: "flex flex-col gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                                    children: navData.navFunding.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                                asChild: true,
                                                tooltip: item.title,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.url,
                                                    children: [
                                                        item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                                            fileName: "[project]/components/app-sidebar.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/app-sidebar.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/app-sidebar.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/app-sidebar.tsx",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, this)
                                        }, item.title, false, {
                                            fileName: "[project]/components/app-sidebar.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/app-sidebar.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/app-sidebar.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroupLabel"], {
                                children: "Entity Management"
                            }, void 0, false, {
                                fileName: "[project]/components/app-sidebar.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                                className: "flex flex-col gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                                    children: navData.navServices.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                                asChild: true,
                                                tooltip: item.title,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.url,
                                                    children: [
                                                        item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {}, void 0, false, {
                                                            fileName: "[project]/components/app-sidebar.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/app-sidebar.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/app-sidebar.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/app-sidebar.tsx",
                                                lineNumber: 270,
                                                columnNumber: 19
                                            }, this)
                                        }, item.title, false, {
                                            fileName: "[project]/components/app-sidebar.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/app-sidebar.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/app-sidebar.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$documents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavDocuments"], {
                        items: navData.documents
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$nav$2d$secondary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavSecondary"], {
                        items: navData.navSecondary,
                        className: "mt-auto"
                    }, void 0, false, {
                        fileName: "[project]/components/app-sidebar.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/app-sidebar.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavUser, {
                    user: resolvedUser
                }, void 0, false, {
                    fileName: "[project]/components/app-sidebar.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/app-sidebar.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/app-sidebar.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_c1 = AppSidebar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavUser");
__turbopack_context__.k.register(_c1, "AppSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d7016182._.js.map