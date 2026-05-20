import Script from "next/script";
import {
  buildTagNoscript,
  buildTagScript,
  type TrackingTag,
} from "@/lib/site-settings";

export function TrackingTags({ tags }: { tags: TrackingTag[] }) {
  const active = tags.filter((t) => t.enabled);
  if (active.length === 0) return null;
  return (
    <>
      {active.map((tag) => {
        const body = buildTagScript(tag);
        const noscript = buildTagNoscript(tag);
        return (
          <span key={tag.id}>
            {body ? (
              <Script
                id={`tracking-${tag.id}`}
                strategy={tag.strategy}
                dangerouslySetInnerHTML={{ __html: body }}
              />
            ) : null}
            {noscript ? (
              <noscript dangerouslySetInnerHTML={{ __html: noscript }} />
            ) : null}
          </span>
        );
      })}
    </>
  );
}
