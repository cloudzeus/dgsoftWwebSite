"use client";

/**
 * Smart video component. Tunes preload, autoplay, and lifecycle by the
 * intended display priority of the placement.
 *
 *   <Video src={url} priority="hero" />           // service detail hero
 *   <Video src={url} priority="card" />           // grid card thumbnail
 *   <Video src={url} priority="gallery" />        // media gallery item
 *
 * `card` and `gallery` start with preload="none" — the file is only fetched
 * once it enters the viewport (card) or the user presses play (gallery).
 * `hero` preloads metadata and autoplays once visible.
 *
 * Always pass a `poster` when you have one — eliminates the black-frame flash.
 */

import * as React from "react";

export type VideoPriority = "hero" | "card" | "gallery";

type Props = {
  src: string;
  priority: VideoPriority;
  poster?: string;
  className?: string;
  /** Aria/accessibility label. Falls back to "video". */
  ariaLabel?: string;
  /** Override the default object-fit class */
  fit?: "cover" | "contain";
};

const PRELOAD_BY_PRIORITY: Record<VideoPriority, "none" | "metadata" | "auto"> = {
  hero: "auto",
  card: "none",
  gallery: "metadata",
};

function tryPlay(video: HTMLVideoElement | null) {
  if (!video) return;
  // Calling play() before src is on the element rejects silently.
  // Guard so we only ever start playback when the element actually has a source.
  if (!video.currentSrc && !video.src) return;
  const p = video.play();
  if (p && typeof p.catch === "function") p.catch(() => {});
}

export function Video({
  src,
  priority,
  poster,
  className = "",
  ariaLabel,
  fit = "cover",
}: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  // For cards: start without src so the file isn't downloaded until in viewport.
  // For hero/gallery: src is mounted immediately (preload controls actual download).
  const [hasEntered, setHasEntered] = React.useState(priority !== "card");

  // Observer: tracks viewport visibility for hero + card.
  // - Card: flips hasEntered=true on first entry (which mounts src in next render)
  //         and pauses/plays on subsequent entries/exits.
  // - Hero: pauses when scrolled off-screen, resumes when back.
  React.useEffect(() => {
    if (priority === "gallery") return;
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true);
            // If src is already mounted (re-entry), play right away.
            // First entry: src isn't on the element yet — the effect below catches it.
            tryPlay(videoRef.current);
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.25, rootMargin: "100px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [priority]);

  // Once React has rendered with src on the element, attempt playback.
  // Also re-attempts when `src` changes (e.g., locale-driven content swap).
  React.useEffect(() => {
    if (!hasEntered || priority === "gallery") return;
    const video = videoRef.current;
    if (!video) return;
    // The `loadeddata` event guarantees the element is ready to play through.
    // We still call tryPlay() immediately; if the browser isn't ready, the
    // event listener acts as a fallback.
    tryPlay(video);
    const onReady = () => tryPlay(video);
    video.addEventListener("loadeddata", onReady, { once: true });
    return () => video.removeEventListener("loadeddata", onReady);
  }, [hasEntered, priority, src]);

  const fitClass = fit === "cover" ? "object-cover" : "object-contain";
  const isAutoplayPriority = priority === "hero" || priority === "card";
  const showControls = priority === "gallery";

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        src={hasEntered ? src : undefined}
        poster={poster}
        preload={hasEntered ? PRELOAD_BY_PRIORITY[priority] : "none"}
        className={`w-full h-full ${fitClass}`}
        muted={isAutoplayPriority}
        loop={isAutoplayPriority}
        playsInline
        autoPlay={priority === "hero"}
        controls={showControls}
        aria-label={ariaLabel ?? "video"}
      />
    </div>
  );
}
