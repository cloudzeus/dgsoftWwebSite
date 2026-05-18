"use client";

import { useEffect } from "react";

type IdleHandle = number;
type IdleWindow = Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => IdleHandle;
    cancelIdleCallback?: (handle: IdleHandle) => void;
};

// Lenis adds ~30ms of init work + a continuous RAF loop on the main thread.
// We defer it past the LCP paint so it doesn't compete with hydration.
// Loaded on `requestIdleCallback` (or a 2s timeout fallback) and skipped entirely
// for users who prefer reduced motion.
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

        const w = window as IdleWindow;
        let cleanup: (() => void) | undefined;
        let cancelled = false;

        const start = async () => {
            if (cancelled) return;
            const { default: Lenis } = await import("lenis");
            if (cancelled) return;

            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 2,
            });

            let rafId = 0;
            const raf = (time: number) => {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            };
            rafId = requestAnimationFrame(raf);

            cleanup = () => {
                cancelAnimationFrame(rafId);
                lenis.destroy();
            };
        };

        let timer: IdleHandle;
        let usedRic = false;
        if (typeof w.requestIdleCallback === "function") {
            timer = w.requestIdleCallback(start, { timeout: 2000 });
            usedRic = true;
        } else {
            timer = window.setTimeout(start, 2000);
        }

        return () => {
            cancelled = true;
            if (usedRic && typeof w.cancelIdleCallback === "function") {
                w.cancelIdleCallback(timer);
            } else {
                clearTimeout(timer);
            }
            cleanup?.();
        };
    }, []);

    return <>{children}</>;
}
