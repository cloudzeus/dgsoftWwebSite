/**
 * Visual email designer: block types and render blocks to HTML.
 * Blocks: heading, paragraph, image, button, divider, spacer, html
 */

export type BlockType = "heading" | "paragraph" | "image" | "button" | "divider" | "spacer" | "html";

export type BlockBase = { id: string; type: BlockType };
export type HeadingBlock = BlockBase & {
  type: "heading";
  props: { text: string; level?: 1 | 2 | 3; align?: "left" | "center" | "right" };
};
export type ParagraphBlock = BlockBase & {
  type: "paragraph";
  props: { text: string; align?: "left" | "center" | "right" };
};
export type ImageBlock = BlockBase & {
  type: "image";
  props: { src: string; alt?: string; href?: string; width?: number; align?: "left" | "center" | "right" };
};
export type ButtonBlock = BlockBase & {
  type: "button";
  props: { text: string; href: string; align?: "left" | "center" | "right" };
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

export type NewsletterContent = { blocks: EmailBlock[] };

const defaultTableAttrs = 'border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;"';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderBlock(block: EmailBlock): string {
  switch (block.type) {
    case "heading": {
      const level = block.props?.level ?? 1;
      const align = block.props?.align ?? "left";
      const text = block.props?.text ?? "";
      const tag = `h${level}`;
      return `<table ${defaultTableAttrs}><tr><td style="padding: 12px 0; text-align: ${align};"><${tag} style="margin: 0; font-size: ${level === 1 ? "24" : level === 2 ? "20" : "16"}px;">${escapeHtml(text)}</${tag}></td></tr></table>`;
    }
    case "paragraph": {
      const align = block.props?.align ?? "left";
      const text = escapeHtml(block.props?.text ?? "").replace(/\n/g, "<br>");
      return `<table ${defaultTableAttrs}><tr><td style="padding: 8px 0; text-align: ${align}; line-height: 1.5;">${text}</td></tr></table>`;
    }
    case "image": {
      const src = block.props?.src ?? "";
      const alt = block.props?.alt ?? "";
      const href = block.props?.href;
      const width = block.props?.width ?? 600;
      const align = block.props?.align ?? "center";
      const img = `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" width="${width}" style="max-width: 100%; height: auto; display: block;" />`;
      const cell = href
        ? `<a href="${escapeHtml(href)}" style="display: inline-block;">${img}</a>`
        : img;
      return `<table ${defaultTableAttrs}><tr><td style="padding: 12px 0; text-align: ${align};">${cell}</td></tr></table>`;
    }
    case "button": {
      const text = block.props?.text ?? "Button";
      const href = block.props?.href ?? "#";
      const align = block.props?.align ?? "center";
      return `<table ${defaultTableAttrs}><tr><td style="padding: 16px 0; text-align: ${align};"><a href="${escapeHtml(href)}" style="display: inline-block; padding: 12px 24px; background: #2563eb; color: #fff !important; text-decoration: none; border-radius: 6px; font-weight: 600;">${escapeHtml(text)}</a></td></tr></table>`;
    }
    case "divider":
      return `<table ${defaultTableAttrs}><tr><td style="padding: 16px 0;"><hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0;" /></td></tr></table>`;
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

/** Render blocks array to full HTML email body (wrapper table + blocks). */
export function renderBlocksToHtml(blocks: EmailBlock[]): string {
  if (!blocks?.length) return "";
  const parts = blocks.map((b) => renderBlock(b));
  return `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1f2937;">${parts.join("")}</div>`;
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
