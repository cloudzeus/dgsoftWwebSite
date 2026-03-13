"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createBlock,
  renderBlocksToHtml,
  type EmailBlock,
  type BlockType,
  type NewsletterContent,
} from "@/lib/newsletter-blocks";
import {
  GripVerticalIcon,
  Trash2Icon,
  HeadingIcon,
  TypeIcon,
  ImageIcon,
  MousePointerClickIcon,
  MinusIcon,
  SpaceIcon,
  CodeIcon,
  EyeIcon,
  EditIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  UploadIcon,
  Loader2Icon,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const BLOCK_TYPES: { type: BlockType; label: string; icon: React.ElementType }[] = [
  { type: "heading", label: "Heading", icon: HeadingIcon },
  { type: "paragraph", label: "Paragraph", icon: TypeIcon },
  { type: "image", label: "Image", icon: ImageIcon },
  { type: "button", label: "Button", icon: MousePointerClickIcon },
  { type: "divider", label: "Divider", icon: MinusIcon },
  { type: "spacer", label: "Spacer", icon: SpaceIcon },
  { type: "html", label: "HTML", icon: CodeIcon },
];

type VisualDesignerProps = {
  value: NewsletterContent;
  onChange: (content: NewsletterContent) => void;
  className?: string;
};

export function VisualDesigner({ value, onChange, className }: VisualDesignerProps) {
  const blocks = value?.blocks ?? [];
  const [previewHtml, setPreviewHtml] = React.useState<string>("");
  const [previewOpen, setPreviewOpen] = React.useState(false);

  const setBlocks = (next: EmailBlock[]) => {
    onChange({ blocks: next });
  };

  const addBlock = (type: BlockType) => {
    setBlocks([...blocks, createBlock(type)]);
  };

  const updateBlock = (index: number, block: EmailBlock) => {
    const next = [...blocks];
    next[index] = block;
    setBlocks(next);
  };

  const removeBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  const moveBlock = (index: number, dir: -1 | 1) => {
    const to = index + dir;
    if (to < 0 || to >= blocks.length) return;
    const next = [...blocks];
    [next[index], next[to]] = [next[to], next[index]];
    setBlocks(next);
  };

  const refreshPreview = () => {
    setPreviewHtml(renderBlocksToHtml(blocks));
    setPreviewOpen(true);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-wrap items-center gap-2 border-b pb-3">
        <span className="text-xs font-medium text-muted-foreground">Add block:</span>
        {BLOCK_TYPES.map(({ type, label, icon: Icon }) => (
          <Button
            key={type}
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addBlock(type)}
            className="h-8 gap-1.5"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </Button>
        ))}
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={refreshPreview}
          className="ml-auto h-8 gap-1.5"
        >
          <EyeIcon className="h-3.5 w-3.5" />
          Preview
        </Button>
      </div>

      <div className="min-h-[200px] space-y-2 rounded-lg border bg-muted/30 p-3">
        {blocks.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            Click a block type above to add content.
          </p>
        ) : (
          blocks.map((block, index) => (
            <BlockEditor
              key={block.id}
              block={block}
              index={index}
              onUpdate={(b) => updateBlock(index, b)}
              onRemove={() => removeBlock(index)}
              onMoveUp={() => moveBlock(index, -1)}
              onMoveDown={() => moveBlock(index, 1)}
              canMoveUp={index > 0}
              canMoveDown={index < blocks.length - 1}
            />
          ))
        )}
      </div>

      {previewOpen && (
        <div className="rounded-lg border bg-background p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">Preview</span>
            <Button type="button" variant="ghost" size="sm" onClick={() => setPreviewOpen(false)}>
              Close
            </Button>
          </div>
          <div
            className="min-h-[200px] rounded border bg-white p-4 text-left"
            dangerouslySetInnerHTML={{ __html: previewHtml || "<p class='text-muted-foreground'>No content</p>" }}
          />
        </div>
      )}
    </div>
  );
}

type BlockEditorProps = {
  block: EmailBlock;
  index: number;
  onUpdate: (block: EmailBlock) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
};

function BlockEditor({
  block,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown,
}: BlockEditorProps) {
  const [collapsed, setCollapsed] = React.useState(false);

  const common = (
    <div className="flex items-center gap-1 border-b bg-muted/50 px-2 py-1">
      <GripVerticalIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
      <button
        type="button"
        onClick={onMoveUp}
        disabled={!canMoveUp}
        className="rounded p-0.5 hover:bg-muted disabled:opacity-30"
        aria-label="Move up"
      >
        <ChevronUpIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onMoveDown}
        disabled={!canMoveDown}
        className="rounded p-0.5 hover:bg-muted disabled:opacity-30"
        aria-label="Move down"
      >
        <ChevronDownIcon className="h-4 w-4" />
      </button>
      <span className="text-[10px] font-medium uppercase text-muted-foreground">{block.type}</span>
      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        className="ml-auto rounded p-1 hover:bg-muted"
      >
        {collapsed ? <EditIcon className="h-3.5 w-3.5" /> : <EyeIcon className="h-3.5 w-3.5" />}
      </button>
      <button type="button" onClick={onRemove} className="rounded p-1 text-destructive hover:bg-destructive/10" aria-label="Remove">
        <Trash2Icon className="h-3.5 w-3.5" />
      </button>
    </div>
  );

  if (collapsed) {
    return (
      <div className="rounded border bg-background">
        {common}
        <div className="px-3 py-2 text-xs text-muted-foreground">
          {block.type === "heading" && (block.props as { text?: string }).text}
          {block.type === "paragraph" && (block.props as { text?: string }).text?.slice(0, 50)}
          {block.type === "image" && (block.props as { src?: string }).src ? "Image" : "—"}
          {block.type === "button" && (block.props as { text?: string }).text}
          {block.type === "divider" && "—"}
          {block.type === "spacer" && "Spacer"}
          {block.type === "html" && "Custom HTML"}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded border bg-background">
      {common}
      <div className="p-3">
        {block.type === "heading" && (
          <HeadingEditor block={block} onUpdate={onUpdate} />
        )}
        {block.type === "paragraph" && (
          <ParagraphEditor block={block} onUpdate={onUpdate} />
        )}
        {block.type === "image" && (
          <ImageEditor block={block} onUpdate={onUpdate} />
        )}
        {block.type === "button" && (
          <ButtonEditor block={block} onUpdate={onUpdate} />
        )}
        {block.type === "divider" && <p className="text-xs text-muted-foreground">Horizontal line</p>}
        {block.type === "spacer" && (
          <SpacerEditor block={block} onUpdate={onUpdate} />
        )}
        {block.type === "html" && (
          <HtmlEditor block={block} onUpdate={onUpdate} />
        )}
      </div>
    </div>
  );
}

function HeadingEditor({
  block,
  onUpdate,
}: {
  block: EmailBlock;
  onUpdate: (b: EmailBlock) => void;
}) {
  if (block.type !== "heading") return null;
  const props = block.props ?? { text: "", level: 1 as const, align: "left" as const };
  return (
    <div className="grid gap-2 sm:grid-cols-3">
      <div className="sm:col-span-2">
        <Label className="text-xs">Text</Label>
        <Input
          value={props.text}
          onChange={(e) => onUpdate({ ...block, props: { ...props, text: e.target.value } })}
          placeholder="Heading text"
          className="mt-1 h-8"
        />
      </div>
      <div>
        <Label className="text-xs">Level</Label>
        <Select
          value={String(props.level ?? 1)}
          onValueChange={(v) => onUpdate({ ...block, props: { ...props, level: Number(v) as 1 | 2 | 3 } })}
        >
          <SelectTrigger className="mt-1 h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">H1</SelectItem>
            <SelectItem value="2">H2</SelectItem>
            <SelectItem value="3">H3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-xs">Align</Label>
        <Select
          value={props.align ?? "left"}
          onValueChange={(v: "left" | "center" | "right") => onUpdate({ ...block, props: { ...props, align: v } })}
        >
          <SelectTrigger className="mt-1 h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function ParagraphEditor({
  block,
  onUpdate,
}: {
  block: EmailBlock;
  onUpdate: (b: EmailBlock) => void;
}) {
  if (block.type !== "paragraph") return null;
  const props = block.props ?? { text: "", align: "left" as const };
  return (
    <div className="space-y-2">
      <Label className="text-xs">Text</Label>
      <Textarea
        value={props.text}
        onChange={(e) => onUpdate({ ...block, props: { ...props, text: e.target.value } })}
        placeholder="Paragraph text"
        rows={3}
        className="min-h-[60px] resize-y text-sm"
      />
      <div>
        <Label className="text-xs">Align</Label>
        <Select
          value={props.align ?? "left"}
          onValueChange={(v: "left" | "center" | "right") => onUpdate({ ...block, props: { ...props, align: v } })}
        >
          <SelectTrigger className="mt-1 h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function ImageEditor({
  block,
  onUpdate,
}: {
  block: EmailBlock;
  onUpdate: (b: EmailBlock) => void;
}) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = React.useState(false);

  if (block.type !== "image") return null;
  const props = block.props ?? { src: "", alt: "", href: "", width: 600, align: "center" as const };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    setUploading(true);
    e.target.value = "";
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/newsletter/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      onUpdate({ ...block, props: { ...props, src: data.url } });
      toast.success("Image uploaded");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Label className="text-xs">Image</Label>
        <div className="mt-1 flex gap-2">
          <Input
            value={props.src}
            onChange={(e) => onUpdate({ ...block, props: { ...props, src: e.target.value } })}
            placeholder="Upload or paste URL"
            className="h-8 flex-1"
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-8 shrink-0 gap-1.5"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
          >
            {uploading ? <Loader2Icon className="h-4 w-4 animate-spin" /> : <UploadIcon className="h-4 w-4" />}
            Upload
          </Button>
        </div>
      </div>
      <div>
        <Label className="text-xs">Alt text</Label>
        <Input
          value={props.alt ?? ""}
          onChange={(e) => onUpdate({ ...block, props: { ...props, alt: e.target.value } })}
          placeholder="Alt"
          className="mt-1 h-8"
        />
      </div>
      <div>
        <Label className="text-xs">Link URL (optional)</Label>
        <Input
          value={props.href ?? ""}
          onChange={(e) => onUpdate({ ...block, props: { ...props, href: e.target.value } })}
          placeholder="https://..."
          className="mt-1 h-8"
        />
      </div>
      <div>
        <Label className="text-xs">Width (px)</Label>
        <Input
          type="number"
          value={props.width ?? 600}
          onChange={(e) => onUpdate({ ...block, props: { ...props, width: parseInt(e.target.value, 10) || 600 } })}
          className="mt-1 h-8"
        />
      </div>
      <div>
        <Label className="text-xs">Align</Label>
        <Select
          value={props.align ?? "center"}
          onValueChange={(v: "left" | "center" | "right") => onUpdate({ ...block, props: { ...props, align: v } })}
        >
          <SelectTrigger className="mt-1 h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function ButtonEditor({
  block,
  onUpdate,
}: {
  block: EmailBlock;
  onUpdate: (b: EmailBlock) => void;
}) {
  if (block.type !== "button") return null;
  const props = block.props ?? { text: "Button", href: "https://", align: "center" as const };
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <div>
        <Label className="text-xs">Button text</Label>
        <Input
          value={props.text}
          onChange={(e) => onUpdate({ ...block, props: { ...props, text: e.target.value } })}
          placeholder="Click here"
          className="mt-1 h-8"
        />
      </div>
      <div>
        <Label className="text-xs">Link URL</Label>
        <Input
          value={props.href}
          onChange={(e) => onUpdate({ ...block, props: { ...props, href: e.target.value } })}
          placeholder="https://..."
          className="mt-1 h-8"
        />
      </div>
      <div>
        <Label className="text-xs">Align</Label>
        <Select
          value={props.align ?? "center"}
          onValueChange={(v: "left" | "center" | "right") => onUpdate({ ...block, props: { ...props, align: v } })}
        >
          <SelectTrigger className="mt-1 h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

function SpacerEditor({
  block,
  onUpdate,
}: {
  block: EmailBlock;
  onUpdate: (b: EmailBlock) => void;
}) {
  if (block.type !== "spacer") return null;
  const props = block.props ?? { height: 24 };
  return (
    <div>
      <Label className="text-xs">Height (px)</Label>
      <Input
        type="number"
        value={props.height ?? 24}
        onChange={(e) => onUpdate({ ...block, props: { height: parseInt(e.target.value, 10) || 24 } })}
        className="mt-1 h-8 w-24"
      />
    </div>
  );
}

function HtmlEditor({
  block,
  onUpdate,
}: {
  block: EmailBlock;
  onUpdate: (b: EmailBlock) => void;
}) {
  if (block.type !== "html") return null;
  const props = block.props ?? { html: "" };
  return (
    <div>
      <Label className="text-xs">HTML</Label>
      <Textarea
        value={props.html}
        onChange={(e) => onUpdate({ ...block, props: { html: e.target.value } })}
        placeholder="<p>Custom HTML</p>"
        rows={4}
        className="mt-1 font-mono text-xs"
      />
    </div>
  );
}
