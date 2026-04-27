/**
 * Visual email designer: block types and render blocks to HTML.
 * Blocks: heading, paragraph, image, button, divider, spacer, html
 */

export type BlockType = "heading" | "paragraph" | "image" | "button" | "divider" | "spacer" | "html";

export type Theme = "light" | "dark";

export type BodyOptions = {
  backgroundColor?: string;
  backgroundImage?: string;
  theme?: Theme;
};

// Default colours per theme
const THEME_DEFAULTS: Record<Theme, { bg: string; text: string; divider: string; buttonBg: string }> = {
  light: { bg: "#ffffff", text: "#1f2937", divider: "#e5e7eb", buttonBg: "#2563eb" },
  dark:  { bg: "#1a1a2e", text: "#e5e7eb", divider: "#374151", buttonBg: "#3b82f6" },
};

export type BlockBase = { id: string; type: BlockType };
export type HeadingBlock = BlockBase & {
  type: "heading";
  props: { text: string; level?: 1 | 2 | 3; align?: "left" | "center" | "right"; color?: string };
};
export type ParagraphBlock = BlockBase & {
  type: "paragraph";
  props: { text: string; align?: "left" | "center" | "right"; color?: string };
};
export type ImageBlock = BlockBase & {
  type: "image";
  props: { src: string; alt?: string; href?: string; width?: number; align?: "left" | "center" | "right" };
};
export type ButtonBlock = BlockBase & {
  type: "button";
  props: { text: string; href: string; align?: "left" | "center" | "right"; backgroundColor?: string; textColor?: string };
};
export type DividerBlock = BlockBase & { type: "divider"; props?: Record<string, never> };
export type SpacerBlock = BlockBase & { type: "spacer"; props?: { height?: number } };
export type HtmlBlock = BlockBase & { type: "html"; props: { html: string } };

export type EmailBlock =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | ButtonBlock
  | DividerBlock
  | SpacerBlock
  | HtmlBlock;

export type NewsletterContent = { blocks: EmailBlock[]; bodyOptions?: BodyOptions };

const defaultTableAttrs = 'border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;"';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderBlock(block: EmailBlock, td: typeof THEME_DEFAULTS["light"]): string {
  switch (block.type) {
    case "heading": {
      const level = block.props?.level ?? 1;
      const align = block.props?.align ?? "left";
      const text = block.props?.text ?? "";
      const color = (block.props as { color?: string }).color ?? td.text;
      const tag = `h${level}`;
      return `<table ${defaultTableAttrs}><tr><td style="padding: 12px 0; text-align: ${align};"><${tag} style="margin: 0; font-size: ${level === 1 ? "24" : level === 2 ? "20" : "16"}px; color: ${escapeHtml(color)};">${escapeHtml(text)}</${tag}></td></tr></table>`;
    }
    case "paragraph": {
      const align = block.props?.align ?? "left";
      const text = escapeHtml(block.props?.text ?? "").replace(/\n/g, "<br>");
      const color = (block.props as { color?: string }).color ?? td.text;
      return `<table ${defaultTableAttrs}><tr><td style="padding: 8px 0; text-align: ${align}; line-height: 1.5; color: ${escapeHtml(color)};">${text}</td></tr></table>`;
    }
    case "image": {
      const src = block.props?.src ?? "";
      const alt = block.props?.alt ?? "";
      const href = block.props?.href;
      const width = block.props?.width ?? 600;
      const align = block.props?.align ?? "center";
      const img = `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" width="${width}" style="max-width: 100%; height: auto; display: block;" />`;
      const cell = href ? `<a href="${escapeHtml(href)}" style="display: inline-block;">${img}</a>` : img;
      return `<table ${defaultTableAttrs}><tr><td style="padding: 12px 0; text-align: ${align};">${cell}</td></tr></table>`;
    }
    case "button": {
      const text = block.props?.text ?? "Button";
      const href = block.props?.href ?? "#";
      const align = block.props?.align ?? "center";
      const bgColor = (block.props as { backgroundColor?: string }).backgroundColor ?? td.buttonBg;
      const textColor = (block.props as { textColor?: string }).textColor ?? "#ffffff";
      return `<table ${defaultTableAttrs}><tr><td style="padding: 16px 0; text-align: ${align};"><a href="${escapeHtml(href)}" style="display: inline-block; padding: 12px 24px; background: ${escapeHtml(bgColor)}; color: ${escapeHtml(textColor)} !important; text-decoration: none; border-radius: 6px; font-weight: 600;">${escapeHtml(text)}</a></td></tr></table>`;
    }
    case "divider":
      return `<table ${defaultTableAttrs}><tr><td style="padding: 16px 0;"><hr style="border: none; border-top: 1px solid ${td.divider}; margin: 0;" /></td></tr></table>`;
    case "spacer": {
      const height = block.props?.height ?? 24;
      return `<table ${defaultTableAttrs}><tr><td style="padding: ${height}px 0; line-height: 0; font-size: 0;">&nbsp;</td></tr></table>`;
    }
    case "html":
      return block.props?.html ?? "";
    default:
      return "";
  }
}

/** Render full newsletter content (blocks + body options) to HTML email body. */
export function renderBlocksToHtml(content: NewsletterContent): string;
/** @deprecated Use renderBlocksToHtml(content) with { blocks, bodyOptions }. */
export function renderBlocksToHtml(blocks: EmailBlock[]): string;
export function renderBlocksToHtml(contentOrBlocks: NewsletterContent | EmailBlock[]): string {
  const content: NewsletterContent = Array.isArray(contentOrBlocks)
    ? { blocks: contentOrBlocks }
    : contentOrBlocks;
  const blocks = content.blocks ?? [];
  const bodyOptions = content.bodyOptions ?? {};
  const theme: Theme = bodyOptions.theme ?? "light";
  const td = THEME_DEFAULTS[theme];

  const parts = blocks.map((b) => renderBlock(b, td));
  const innerHtml = parts.join("");

  const bg = bodyOptions.backgroundColor ?? td.bg;
  const bgStyle: string[] = [
    `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`,
    `color: ${td.text};`,
    `background-color: ${bg};`,
    `padding: 24px;`,
  ];
  if (bodyOptions.backgroundImage) {
    bgStyle.push(`background-image: url(${escapeHtml(bodyOptions.backgroundImage)}); background-size: cover; background-repeat: no-repeat;`);
  }
  return `<div style="${bgStyle.join(" ")}">${innerHtml}</div>`;
}

/** Create a new empty block of given type. */
export function createBlock(type: BlockType, id?: string): EmailBlock {
  const uid = id ?? `b_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  switch (type) {
    case "heading":
      return { id: uid, type: "heading", props: { text: "Heading", level: 1, align: "left" } };
    case "paragraph":
      return { id: uid, type: "paragraph", props: { text: "Paragraph text.", align: "left" } };
    case "image":
      return { id: uid, type: "image", props: { src: "", alt: "", align: "center" } };
    case "button":
      return { id: uid, type: "button", props: { text: "Click here", href: "https://", align: "center" } };
    case "divider":
      return { id: uid, type: "divider", props: {} };
    case "spacer":
      return { id: uid, type: "spacer", props: { height: 24 } };
    case "html":
      return { id: uid, type: "html", props: { html: "<p>Custom HTML</p>" } };
    default:
      return { id: uid, type: "paragraph", props: { text: "", align: "left" } };
  }
}
