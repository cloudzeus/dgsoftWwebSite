"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getExpandedRowModel,
    useReactTable,
    ExpandedState,
} from "@tanstack/react-table"
import {
    ChevronDown,
    ChevronRight,
    Search,
    SlidersHorizontal,
    Plus,
    ChevronLeft,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { cn } from "@/lib/utils"

interface GenericDataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    searchPlaceholder?: string
    searchColumn?: string
    renderExpandedRow?: (row: TData) => React.ReactNode
    onAddClick?: () => void
    addButtonLabel?: string
    isSortable?: boolean
    onReorder?: (newData: TData[]) => void
    rowIdKey?: keyof TData
    getSubRows?: (row: TData) => TData[] | undefined
    getRowClassName?: (row: any) => string
    rowSelection?: Record<string, boolean>
    onRowSelectionChange?: (selection: any) => void
    enableRowSelection?: boolean
    initialColumnVisibility?: VisibilityState
}

const SortableRow = ({ row, renderExpandedRow, columnsCount, isSortable, rowIdKey, getRowClassName }: any) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: String(row.original[rowIdKey]),
        disabled: !isSortable
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        zIndex: isDragging ? 2 : 1
    }

    const customClass = getRowClassName ? getRowClassName(row.original) : ""
    const isExpanded = row.getIsExpanded()

    return (
        <React.Fragment>
            <TableRow
                ref={setNodeRef}
                style={style}
                data-state={row.getIsSelected() && "selected"}
                className={cn(
                    "group border-b border-border transition-colors cursor-pointer",
                    !isExpanded && "hover:bg-muted/50",
                    isExpanded && !customClass && "bg-muted/50 border-l-4 border-l-primary",
                    isExpanded && customClass && customClass,
                    !isExpanded && customClass && customClass,
                    "relative"
                )}
                onClick={() => (renderExpandedRow || row.getCanExpand()) && row.toggleExpanded()}
            >
                {row.getVisibleCells().map((cell: any) => {
                    const isDragColumn = cell.column.id === "drag"
                    return (
                        <TableCell
                            key={cell.id}
                            className="py-4 px-4"
                            {...(isDragColumn ? { ...attributes, ...listeners } : {})}
                        >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    )
                })}
            </TableRow>
            {isExpanded && renderExpandedRow && (
                <TableRow className={cn(
                    "border-none transition-all",
                    !customClass && "bg-muted/30 border-b-2 border-border",
                    customClass && customClass
                )}>
                    <TableCell colSpan={columnsCount} className="p-0 border-none">
                        <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            {renderExpandedRow(row.original)}
                        </div>
                    </TableCell>
                </TableRow>
            )}
        </React.Fragment>
    )
}

export function GenericDataTable<TData, TValue>({
    columns,
    data,
    searchPlaceholder = "Search...",
    searchColumn,
    renderExpandedRow,
    onAddClick,
    addButtonLabel = "Add New",
    isSortable = false,
    onReorder,
    rowIdKey = "id" as keyof TData,
    getSubRows,
    getRowClassName,
    rowSelection,
    onRowSelectionChange,
    enableRowSelection = false,
    initialColumnVisibility = {},
}: GenericDataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(initialColumnVisibility)
    const [expanded, setExpanded] = React.useState<ExpandedState>({})

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    )

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        if (active.id !== over?.id && onReorder) {
            const oldIndex = data.findIndex((item) => String(item[rowIdKey]) === active.id)
            const newIndex = data.findIndex((item) => String(item[rowIdKey]) === over?.id)
            const newData = arrayMove(data, oldIndex, newIndex)
            onReorder(newData)
        }
    }

    const finalColumns = React.useMemo(() => {
        const cols = [...columns]
        // Auto-add expander if not present and renderExpandedRow exists
        if (renderExpandedRow && !cols.find(c => c.id === "expander" || c.id === "expander-auto")) {
            cols.unshift({
                id: "expander-auto",
                header: () => null,
                cell: ({ row }: { row: any }) => (
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-transparent"
                        onClick={(e) => {
                            e.stopPropagation()
                            row.toggleExpanded()
                        }}
                    >
                        <ChevronRight
                            className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                row.getIsExpanded() ? "rotate-90 text-primary" : "text-muted-foreground"
                            )}
                        />
                    </Button>
                ),
                size: 40,
                enableHiding: false,
            } as any)
        }
        return cols
    }, [columns, renderExpandedRow])

    const table = useReactTable({
        data,
        columns: finalColumns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        getExpandedRowModel: getExpandedRowModel(),
        onExpandedChange: setExpanded,
        getSubRows,
        onRowSelectionChange,
        enableRowSelection,
        getRowId: (row) => String((row as Record<string, unknown>)[rowIdKey as string] ?? Math.random()),
        initialState: {
            pagination: { pageSize: 50 },
        },
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            expanded,
            rowSelection: rowSelection ?? {},
        },
    })

    const renderRow = (row: any) => {
        const customClass = getRowClassName ? getRowClassName(row.original) : ""
        const isExpanded = row.getIsExpanded()

        return (
            <React.Fragment key={row.id}>
                <TableRow
                    data-state={row.getIsSelected() && "selected"}
                    className={cn(
                        "group border-b border-border transition-colors cursor-pointer",
                        !isExpanded && "hover:bg-muted/50",
                        isExpanded && !customClass && "bg-muted/50 border-l-4 border-l-primary",
                        isExpanded && customClass && customClass,
                        "relative"
                    )}
                    onClick={() => (renderExpandedRow || row.getCanExpand()) && row.toggleExpanded()}
                >
                    {row.getVisibleCells().map((cell: any) => (
                        <TableCell key={cell.id} className="py-2.5 px-3 text-sm">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    ))}
                </TableRow>
                {isExpanded && renderExpandedRow && (
                    <TableRow className={cn(
                        "border-none transition-all",
                        !customClass && "bg-muted/30 border-b-2 border-border",
                        customClass && customClass
                    )}>
                        <TableCell colSpan={finalColumns.length} className="p-0 border-none">
                            <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                {renderExpandedRow(row.original)}
                            </div>
                        </TableCell>
                    </TableRow>
                )}
                {isExpanded && row.subRows && row.subRows.map((subRow: any) => renderRow(subRow))}
            </React.Fragment>
        )
    }

    const sortableBody = (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <Table>
                <TableHeader className="bg-muted/40 sticky top-0 z-10 shadow-sm">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="border-b border-border bg-muted/40">
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground py-2.5 px-3 bg-muted/40">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        <SortableContext
                            items={data.map(d => String(d[rowIdKey]))}
                            strategy={verticalListSortingStrategy}
                        >
                            {table.getRowModel().rows.map((row) => (
                                <SortableRow
                                    key={row.id}
                                    row={row}
                                    renderExpandedRow={renderExpandedRow}
                                    columnsCount={finalColumns.length}
                                    isSortable={isSortable}
                                    rowIdKey={rowIdKey}
                                    getRowClassName={getRowClassName}
                                />
                            ))}
                        </SortableContext>
                    ) : (
                        <TableRow>
                            <TableCell colSpan={finalColumns.length} className="h-16 text-center text-xs text-muted-foreground">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </DndContext>
    )

    const staticBody = (
        <Table>
            <TableHeader className="bg-muted/40 sticky top-0 z-10 shadow-sm">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="border-b border-border bg-muted/40">
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground py-2.5 px-3 bg-muted/40">
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => renderRow(row))
                ) : (
                    <TableRow>
                        <TableCell colSpan={finalColumns.length} className="h-16 text-center text-xs text-muted-foreground">
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )

    return (
        <div className="w-full flex flex-col min-h-[calc(100vh-10rem)] max-h-[calc(100vh-6rem)]">
            <div className="flex items-center justify-between gap-2 shrink-0 mb-3">
                <div className="flex items-center flex-1 gap-2">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder={searchPlaceholder}
                            value={(searchColumn ? (table.getColumn(searchColumn)?.getFilterValue() as string) : "") ?? ""}
                            onChange={(event) => {
                                if (searchColumn && table.getColumn(searchColumn)) {
                                    table.getColumn(searchColumn)!.setFilterValue(event.target.value)
                                }
                            }}
                            className="pl-9 h-8 text-sm rounded-lg"
                        />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="ml-auto flex h-8 text-xs gap-1.5 border-dashed rounded-lg">
                                <SlidersHorizontal className="h-3.5 w-3.5" />
                                Columns
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[180px] rounded-xl">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {onAddClick && (
                    <Button onClick={onAddClick} className="h-8 text-sm px-4 rounded-lg shadow-sm bg-primary text-primary-foreground hover:bg-primary/90">
                        <Plus className="mr-2 h-4 w-4" /> {addButtonLabel}
                    </Button>
                )}
            </div>

            <div className="rounded-xl border border-border bg-card text-card-foreground shadow-md overflow-hidden flex-1 min-h-0 flex flex-col">
                <div
                    className="overflow-auto min-h-0 flex-1"
                    onWheel={(e) => e.stopPropagation()}
                >
                    {isSortable ? sortableBody : staticBody}
                </div>
            </div>

            <div className="flex items-center justify-between px-2 py-2.5 shrink-0 border-t border-border bg-muted/30 rounded-b-xl">
                <div className="flex-1 text-xs text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                        <p className="text-xs text-muted-foreground">Rows</p>
                        <Select
                            value={`${table.getState().pagination.pageSize}`}
                            onValueChange={(value) => {
                                table.setPageSize(Number(value))
                            }}
                        >
                            <SelectTrigger className="h-7 w-[65px] rounded-md text-xs">
                                <SelectValue placeholder={table.getState().pagination.pageSize} />
                            </SelectTrigger>
                            <SelectContent side="top" className="rounded-lg">
                                {[10, 20, 25, 50, 100].map((pageSize) => (
                                    <SelectItem key={pageSize} value={`${pageSize}`}>
                                        {pageSize}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex w-[90px] items-center justify-center text-xs text-muted-foreground text-center">
                        Page {table.getState().pagination.pageIndex + 1} / {table.getPageCount() || 1}
                    </div>
                    <div className="flex items-center gap-1">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-md"
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <ChevronsLeft className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-md"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <ChevronLeft className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-md"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            <ChevronRight className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7 rounded-md"
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}
                        >
                            <ChevronsRight className="h-3.5 w-3.5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
