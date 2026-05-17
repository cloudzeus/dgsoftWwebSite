type Props = {
  id: string;
  data: unknown;
};

/**
 * Renders a JSON-LD script tag into the SSR HTML. Uses a plain <script>
 * (per Next.js App Router docs for JSON-LD) instead of next/script with
 * `beforeInteractive`, which is reserved for the root layout and warns
 * when used elsewhere.
 */
export function JsonLd({ id, data }: Props) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
}
