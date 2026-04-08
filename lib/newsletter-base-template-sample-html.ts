import { NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER } from "@/lib/newsletter-dynamic-placeholder";

export type NewsletterBaseTemplatePreset = {
  key: string;
  name: string;
  description: string;
  htmlDocument: string;
};

const BASE = (bg: string, panel: string, text: string, accent: string) => `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="https://cdn.tailwindcss.com/3.4.17"></script></head><body class="${bg} min-h-screen p-8"><div class="mx-auto max-w-[600px] overflow-hidden rounded-md border ${panel}"><div class="h-1.5 bg-gradient-to-r from-red-800 via-red-500 to-red-800"></div><div class="flex items-center justify-between px-8 py-6 ${text}"><img src="{{logo_url}}" alt="{{company_name}}" class="h-7 w-auto"/><div class="flex gap-4"><a href="{{facebook_url}}">F</a><a href="{{instagram_url}}">I</a><a href="{{linkedin_url}}">L</a><a href="{{x_url}}">X</a></div></div><div class="p-8"><div class="min-h-[280px] rounded-xl border p-10 text-center ${text}"><span class="font-mono">${NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER}</span></div></div><div class="border-t px-8 py-8 ${text}"><p class="font-bold">{{company_name}}</p><p>{{tagline}}</p><p>{{address_line}}</p><p><a href="mailto:{{contact_email}}" class="${accent}">{{contact_email}}</a></p><div class="mt-4 flex gap-3 text-xs"><a href="{{privacy_policy_url}}">PRIVACY</a><a href="{{terms_url}}">TERMS</a><a href="{{unsubscribe_url}}" class="${accent}">UNSUBSCRIBE</a></div></div></div></body></html>`;

export const NEWSLETTER_BASE_TEMPLATE_PRESETS: NewsletterBaseTemplatePreset[] = [
  { key: "01", name: "Newsletter Template 01", description: "Light Red", htmlDocument: BASE("bg-slate-50", "border-slate-200 bg-white", "text-slate-600", "text-red-500") },
  { key: "02", name: "Newsletter Template 02", description: "Dark Blue + Red", htmlDocument: BASE("bg-slate-950", "border-slate-800 bg-slate-900", "text-slate-400", "text-red-400") },
  { key: "03", name: "Newsletter Template 03", description: "Slate Red", htmlDocument: BASE("bg-slate-700", "border-slate-500 bg-slate-800", "text-slate-300", "text-red-400") },
];
