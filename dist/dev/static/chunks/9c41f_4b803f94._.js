(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
/*#__NO_SIDE_EFFECTS__*/ const noop = (any)=>any;
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
let warning = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
let invariant = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message)=>{
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = (check, message)=>{
        if (!check) {
            throw new Error(message);
        }
    };
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memo",
    ()=>memo
]);
/*#__NO_SIDE_EFFECTS__*/ function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "progress",
    ()=>progress
]);
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
;
;
;
;
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsScrollTimeline",
    ()=>supportsScrollTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)");
;
const supportsScrollTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(()=>window.ScrollTimeline !== undefined);
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseGroupPlaybackControls",
    ()=>BaseGroupPlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
;
class BaseGroupPlaybackControls {
    constructor(animations){
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        // Support for new finished Promise and legacy thennable API
        return Promise.all(this.animations.map((animation)=>"finished" in animation ? animation.finished : animation));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++){
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])() && animation.attachTimeline) {
                return animation.attachTimeline(timeline);
            } else if (typeof fallback === "function") {
                return fallback(animation);
            }
        });
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for(let i = 0; i < this.animations.length; i++){
            max = Math.max(max, this.animations[i].duration);
        }
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/controls/Group.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupPlaybackControls",
    ()=>GroupPlaybackControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-client] (ecmascript)");
;
/**
 * TODO: This is a temporary class to support the legacy
 * thennable API
 */ class GroupPlaybackControls extends __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"] {
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getValueTransition",
    ()=>getValueTransition
]);
function getValueTransition(transition, key) {
    return transition ? transition[key] || transition["default"] || transition : undefined;
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcGeneratorDuration",
    ()=>calcGeneratorDuration,
    "maxGeneratorDuration",
    ()=>maxGeneratorDuration
]);
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGeneratorEasing",
    ()=>createGeneratorEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)");
;
;
/**
 * Create a progress => progress easing function from a generator.
 */ function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({
        ...options,
        keyframes: [
            0,
            scale
        ]
    });
    const duration = Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcGeneratorDuration"])(generator), __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxGeneratorDuration"]);
    return {
        type: "keyframes",
        ease: (progress)=>{
            return generator.next(duration * progress).value / scale;
        },
        duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(duration)
    };
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isGenerator",
    ()=>isGenerator
]);
function isGenerator(type) {
    return typeof type === "function";
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachTimeline",
    ()=>attachTimeline
]);
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeAnimationControls",
    ()=>NativeAnimationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$attach$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-client] (ecmascript)");
;
;
class NativeAnimationControls {
    constructor(animation){
        this.animation = animation;
    }
    get duration() {
        var _a, _b, _c;
        const durationInMs = ((_b = (_a = this.animation) === null || _a === void 0 ? void 0 : _a.effect) === null || _b === void 0 ? void 0 : _b.getComputedTiming().duration) || ((_c = this.options) === null || _c === void 0 ? void 0 : _c.duration) || 300;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(Number(durationInMs));
    }
    get time() {
        var _a;
        if (this.animation) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsToSeconds"])(((_a = this.animation) === null || _a === void 0 ? void 0 : _a.currentTime) || 0);
        }
        return 0;
    }
    set time(newTime) {
        if (this.animation) {
            this.animation.currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(newTime);
        }
    }
    get speed() {
        return this.animation ? this.animation.playbackRate : 1;
    }
    set speed(newSpeed) {
        if (this.animation) {
            this.animation.playbackRate = newSpeed;
        }
    }
    get state() {
        return this.animation ? this.animation.playState : "finished";
    }
    get startTime() {
        return this.animation ? this.animation.startTime : null;
    }
    get finished() {
        return this.animation ? this.animation.finished : Promise.resolve();
    }
    play() {
        this.animation && this.animation.play();
    }
    pause() {
        this.animation && this.animation.pause();
    }
    stop() {
        if (!this.animation || this.state === "idle" || this.state === "finished") {
            return;
        }
        if (this.animation.commitStyles) {
            this.animation.commitStyles();
        }
        this.cancel();
    }
    flatten() {
        var _a;
        if (!this.animation) return;
        (_a = this.animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming({
            easing: "linear"
        });
    }
    attachTimeline(timeline) {
        if (this.animation) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$attach$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachTimeline"])(this.animation, timeline);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    }
    complete() {
        this.animation && this.animation.finish();
    }
    cancel() {
        try {
            this.animation && this.animation.cancel();
        } catch (e) {}
    }
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsFlags",
    ()=>supportsFlags
]);
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */ const supportsFlags = {
    linearEasing: undefined
};
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/memo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memoSupports",
    ()=>memoSupports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/memo.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-client] (ecmascript)");
;
;
function memoSupports(callback, supportsFlag) {
    const memoized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(callback);
    return ()=>{
        var _a;
        return (_a = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsFlags"][supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
    };
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supportsLinearEasing",
    ()=>supportsLinearEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/memo.mjs [app-client] (ecmascript)");
;
const supportsLinearEasing = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$memo$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoSupports"])(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateLinearEasing",
    ()=>generateLinearEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
;
const generateLinearEasing = (easing, duration, resolution = 10 // as milliseconds
)=>{
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for(let i = 0; i < numPoints; i++){
        points += easing((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, numPoints - 1, i)) + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
};
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezierAsString",
    ()=>cubicBezierAsString,
    "isWaapiSupportedEasing",
    ()=>isWaapiSupportedEasing,
    "mapEasingToNativeEasing",
    ()=>mapEasingToNativeEasing,
    "supportedWaapiEasing",
    ()=>supportedWaapiEasing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-client] (ecmascript)");
;
;
;
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /*@__PURE__*/ cubicBezierAsString([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /*@__PURE__*/ cubicBezierAsString([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /*@__PURE__*/ cubicBezierAsString([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    } else if (typeof easing === "function" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateLinearEasing"])(easing, duration);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBezierDefinition"])(easing)) {
        return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
        return easing.map((segmentEasing)=>mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    } else {
        return supportedWaapiEasing[easing];
    }
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDragActive",
    ()=>isDragActive,
    "isDragging",
    ()=>isDragging
]);
const isDragging = {
    x: false,
    y: false
};
function isDragActive() {
    return isDragging.x || isDragging.y;
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveElements",
    ()=>resolveElements
]);
function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof Element) {
        return [
            elementOrSelector
        ];
    } else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) {
            // TODO: Refactor to utils package
            // invariant(
            //     Boolean(scope.current),
            //     "Scope provided, but no element detected."
            // )
            root = scope.current;
        }
        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setupGesture",
    ()=>setupGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
function setupGesture(elementOrSelector, options) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
        passive: true,
        ...options,
        signal: gestureAbortController.signal
    };
    const cancel = ()=>gestureAbortController.abort();
    return [
        elements,
        eventOptions,
        cancel
    ];
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hover",
    ()=>hover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-client] (ecmascript)");
;
;
/**
 * Filter out events that are not pointer events, or are triggering
 * while a Motion gesture is active.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.pointerType === "touch" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragActive"])()) return;
        callback(event);
    };
}
/**
 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
 *
 * @public
 */ function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGesture"])(elementOrSelector, options);
    const onPointerEnter = filterEvents((enterEvent)=>{
        const { target } = enterEvent;
        const onHoverEnd = onHoverStart(enterEvent);
        if (typeof onHoverEnd !== "function" || !target) return;
        const onPointerLeave = filterEvents((leaveEvent)=>{
            onHoverEnd(leaveEvent);
            target.removeEventListener("pointerleave", onPointerLeave);
        });
        target.addEventListener("pointerleave", onPointerLeave, eventOptions);
    });
    elements.forEach((element)=>{
        element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    });
    return cancel;
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeOrChild",
    ()=>isNodeOrChild
]);
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */ const isNodeOrChild = (parent, child)=>{
    if (!child) {
        return false;
    } else if (parent === child) {
        return true;
    } else {
        return isNodeOrChild(parent, child.parentElement);
    }
};
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPrimaryPointer",
    ()=>isPrimaryPointer
]);
const isPrimaryPointer = (event)=>{
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    } else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */ return event.isPrimary !== false;
    }
};
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElementKeyboardAccessible",
    ()=>isElementKeyboardAccessible
]);
const focusableElements = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
]);
function isElementKeyboardAccessible(element) {
    return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPressing",
    ()=>isPressing
]);
const isPressing = new WeakSet();
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enableKeyboardPress",
    ()=>enableKeyboardPress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-client] (ecmascript)");
;
/**
 * Filter out events that are not "Enter" keys.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.key !== "Enter") return;
        callback(event);
    };
}
function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, {
        isPrimary: true,
        bubbles: true
    }));
}
const enableKeyboardPress = (focusEvent, eventOptions)=>{
    const element = focusEvent.currentTarget;
    if (!element) return;
    const handleKeydown = filterEvents(()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPressing"].has(element)) return;
        firePointerEvent(element, "down");
        const handleKeyup = filterEvents(()=>{
            firePointerEvent(element, "up");
        });
        const handleBlur = ()=>firePointerEvent(element, "cancel");
        element.addEventListener("keyup", handleKeyup, eventOptions);
        element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    /**
     * Add an event listener that fires on blur to remove the keydown events.
     */ element.addEventListener("blur", ()=>element.removeEventListener("keydown", handleKeydown), eventOptions);
};
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "press",
    ()=>press
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
/**
 * Filter out events that are not primary pointer events, or are triggering
 * while a Motion gesture is active.
 */ function isValidPressEvent(event) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimaryPointer"])(event) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragActive"])();
}
/**
 * Create a press gesture.
 *
 * Press is different to `"pointerdown"`, `"pointerup"` in that it
 * automatically filters out secondary pointer events like right
 * click and multitouch.
 *
 * It also adds accessibility support for keyboards, where
 * an element with a press gesture will receive focus and
 *  trigger on Enter `"keydown"` and `"keyup"` events.
 *
 * This is different to a browser's `"click"` event, which does
 * respond to keyboards but only for the `"click"` itself, rather
 * than the press start and end/cancel. The element also needs
 * to be focusable for this to work, whereas a press gesture will
 * make an element focusable by default.
 *
 * @public
 */ function press(elementOrSelector, onPressStart, options = {}) {
    const [elements, eventOptions, cancelEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$setup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupGesture"])(elementOrSelector, options);
    const startPress = (startEvent)=>{
        const element = startEvent.currentTarget;
        if (!isValidPressEvent(startEvent) || __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPressing"].has(element)) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPressing"].add(element);
        const onPressEnd = onPressStart(startEvent);
        const onPointerEnd = (endEvent, success)=>{
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerCancel);
            if (!isValidPressEvent(endEvent) || !__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPressing"].has(element)) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPressing"].delete(element);
            if (typeof onPressEnd === "function") {
                onPressEnd(endEvent, {
                    success
                });
            }
        };
        const onPointerUp = (upEvent)=>{
            onPointerEnd(upEvent, options.useGlobalTarget || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeOrChild"])(element, upEvent.target));
        };
        const onPointerCancel = (cancelEvent)=>{
            onPointerEnd(cancelEvent, false);
        };
        window.addEventListener("pointerup", onPointerUp, eventOptions);
        window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    elements.forEach((element)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$is$2d$keyboard$2d$accessible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementKeyboardAccessible"])(element) && element.getAttribute("tabindex") === null) {
            element.tabIndex = 0;
        }
        const target = options.useGlobalTarget ? window : element;
        target.addEventListener("pointerdown", startPress, eventOptions);
        element.addEventListener("focus", (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableKeyboardPress"])(event, eventOptions), eventOptions);
    });
    return cancelEvents;
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyGeneratorOptions",
    ()=>applyGeneratorOptions,
    "convertMotionOptionsToNative",
    ()=>convertMotionOptionsToNative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-client] (ecmascript)");
;
;
;
;
;
const defaultEasing = "easeOut";
function applyGeneratorOptions(options) {
    var _a;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGenerator"])(options.type)) {
        const generatorOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGeneratorEasing"])(options, 100, options.type);
        options.ease = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsLinearEasing"])() ? generatorOptions.ease : defaultEasing;
        options.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])(generatorOptions.duration);
        options.type = "keyframes";
    } else {
        options.duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_a = options.duration) !== null && _a !== void 0 ? _a : 0.3);
        options.ease = options.ease || defaultEasing;
    }
}
// TODO: Reuse for NativeAnimation
function convertMotionOptionsToNative(valueName, keyframes, options) {
    var _a;
    const nativeKeyframes = {};
    const nativeOptions = {
        fill: "both",
        easing: "linear",
        composite: "replace"
    };
    nativeOptions.delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_a = options.delay) !== null && _a !== void 0 ? _a : 0);
    applyGeneratorOptions(options);
    nativeOptions.duration = options.duration;
    const { ease, times } = options;
    if (times) nativeKeyframes.offset = times;
    nativeKeyframes[valueName] = keyframes;
    const easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"])(ease, options.duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */ if (Array.isArray(easing)) {
        nativeKeyframes.easing = easing;
    } else {
        nativeOptions.easing = easing;
    }
    return {
        keyframes: nativeKeyframes,
        options: nativeOptions
    };
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/PseudoAnimation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PseudoAnimation",
    ()=>PseudoAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs [app-client] (ecmascript)");
;
;
class PseudoAnimation extends __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationControls"] {
    constructor(target, pseudoElement, valueName, keyframes, options){
        const animationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertMotionOptionsToNative"])(valueName, keyframes, options);
        const animation = target.animate(animationOptions.keyframes, {
            pseudoElement,
            ...animationOptions.options
        });
        super(animation);
    }
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chooseLayerType",
    ()=>chooseLayerType
]);
function chooseLayerType(valueName) {
    if (valueName === "layout") return "group";
    if (valueName === "enter" || valueName === "new") return "new";
    if (valueName === "exit" || valueName === "old") return "old";
    return "group";
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "css",
    ()=>css
]);
let pendingRules = {};
let style = null;
const css = {
    set: (selector, values)=>{
        pendingRules[selector] = values;
    },
    commit: ()=>{
        if (!style) {
            style = document.createElement("style");
            style.id = "motion-view";
        }
        let cssText = "";
        for(const selector in pendingRules){
            const rule = pendingRules[selector];
            cssText += `${selector} {\n`;
            for (const [property, value] of Object.entries(rule)){
                cssText += `  ${property}: ${value};\n`;
            }
            cssText += "}\n";
        }
        style.textContent = cssText;
        document.head.appendChild(style);
        pendingRules = {};
    },
    remove: ()=>{
        if (style && style.parentElement) {
            style.parentElement.removeChild(style);
        }
    }
};
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/get-layer-name.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLayerName",
    ()=>getLayerName
]);
function getLayerName(pseudoElement) {
    const match = pseudoElement.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
    if (!match) return null;
    return {
        layer: match[2],
        type: match[1]
    };
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getViewAnimations",
    ()=>getViewAnimations
]);
function filterViewAnimations(animation) {
    var _a;
    const { effect } = animation;
    if (!effect) return false;
    return effect.target === document.documentElement && ((_a = effect.pseudoElement) === null || _a === void 0 ? void 0 : _a.startsWith("::view-transition"));
}
function getViewAnimations() {
    return document.getAnimations().filter(filterViewAnimations);
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasTarget",
    ()=>hasTarget
]);
function hasTarget(target, targets) {
    return targets.has(target) && Object.keys(targets.get(target)).length > 0;
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/start.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "startViewAnimation",
    ()=>startViewAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/time-conversion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$PseudoAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/PseudoAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/css.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/get-layer-name.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/utils/has-target.mjs [app-client] (ecmascript)");
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
const definitionNames = [
    "layout",
    "enter",
    "exit",
    "new",
    "old"
];
function startViewAnimation(update, defaultOptions, targets) {
    if (!document.startViewTransition) {
        return new Promise(async (resolve)=>{
            await update();
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"]([]));
        });
    }
    // TODO: Go over existing targets and ensure they all have ids
    /**
     * If we don't have any animations defined for the root target,
     * remove it from being captured.
     */ if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$has$2d$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasTarget"])("root", targets)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].set(":root", {
            "view-transition-name": "none"
        });
    }
    /**
     * Set the timing curve to linear for all view transition layers.
     * This gets baked into the keyframes, which can't be changed
     * without breaking the generated animation.
     *
     * This allows us to set easing via updateTiming - which can be changed.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
        "animation-timing-function": "linear !important"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].commit(); // Write
    const transition = document.startViewTransition(async ()=>{
        await update();
    // TODO: Go over new targets and ensure they all have ids
    });
    transition.finished.finally(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"].remove(); // Write
    });
    return new Promise((resolve)=>{
        transition.ready.then(()=>{
            var _a;
            const generatedViewAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$view$2d$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewAnimations"])();
            const animations = [];
            /**
             * Create animations for our definitions
             */ targets.forEach((definition, target)=>{
                // TODO: If target is not "root", resolve elements
                // and iterate over each
                for (const key of definitionNames){
                    if (!definition[key]) continue;
                    const { keyframes, options } = definition[key];
                    for (let [valueName, valueKeyframes] of Object.entries(keyframes)){
                        if (!valueKeyframes) continue;
                        const valueOptions = {
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, valueName),
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(options, valueName)
                        };
                        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$choose$2d$layer$2d$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chooseLayerType"])(key);
                        /**
                         * If this is an opacity animation, and keyframes are not an array,
                         * we need to convert them into an array and set an initial value.
                         */ if (valueName === "opacity" && !Array.isArray(valueKeyframes)) {
                            const initialValue = type === "new" ? 0 : 1;
                            valueKeyframes = [
                                initialValue,
                                valueKeyframes
                            ];
                        }
                        /**
                         * Resolve stagger function if provided.
                         */ if (typeof valueOptions.delay === "function") {
                            valueOptions.delay = valueOptions.delay(0, 1);
                        }
                        const animation = new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$PseudoAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PseudoAnimation"](document.documentElement, `::view-transition-${type}(${target})`, valueName, valueKeyframes, valueOptions);
                        animations.push(animation);
                    }
                }
            });
            /**
             * Handle browser generated animations
             */ for (const animation of generatedViewAnimations){
                if (animation.playState === "finished") continue;
                const { effect } = animation;
                if (!effect || !(effect instanceof KeyframeEffect)) continue;
                const { pseudoElement } = effect;
                if (!pseudoElement) continue;
                const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$utils$2f$get$2d$layer$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayerName"])(pseudoElement);
                if (!name) continue;
                const targetDefinition = targets.get(name.layer);
                if (!targetDefinition) {
                    /**
                     * If transition name is group then update the timing of the animation
                     * whereas if it's old or new then we could possibly replace it using
                     * the above method.
                     */ const transitionName = name.type === "group" ? "layout" : "";
                    const animationTransition = {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValueTransition"])(defaultOptions, transitionName)
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$convert$2d$options$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyGeneratorOptions"])(animationTransition);
                    const easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapEasingToNativeEasing"])(animationTransition.ease, animationTransition.duration);
                    effect.updateTiming({
                        delay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$time$2d$conversion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondsToMilliseconds"])((_a = animationTransition.delay) !== null && _a !== void 0 ? _a : 0),
                        duration: animationTransition.duration,
                        easing
                    });
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationControls"](animation));
                } else if (hasOpacity(targetDefinition, "enter") && hasOpacity(targetDefinition, "exit") && effect.getKeyframes().some((keyframe)=>keyframe.mixBlendMode)) {
                    animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeAnimationControls"](animation));
                } else {
                    animation.cancel();
                }
            }
            resolve(new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$BaseGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseGroupPlaybackControls"](animations));
        });
    });
}
function hasOpacity(target, key) {
    var _a;
    return (_a = target === null || target === void 0 ? void 0 : target[key]) === null || _a === void 0 ? void 0 : _a.keyframes.opacity;
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewTransitionBuilder",
    ()=>ViewTransitionBuilder,
    "view",
    ()=>view
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/start.mjs [app-client] (ecmascript)");
;
;
/**
 * TODO:
 * - Create view transition on next tick
 * - Replace animations with Motion animations
 * - Return GroupAnimation on next tick
 */ class ViewTransitionBuilder {
    constructor(update, options = {}){
        this.currentTarget = "root";
        this.targets = new Map();
        this.notifyReady = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.readyPromise = new Promise((resolve)=>{
            this.notifyReady = resolve;
        });
        queueMicrotask(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startViewAnimation"])(update, options, this.targets).then((animation)=>this.notifyReady(animation));
        });
    }
    get(selector) {
        this.currentTarget = selector;
        return this;
    }
    layout(keyframes, options) {
        this.updateTarget("layout", keyframes, options);
        return this;
    }
    new(keyframes, options) {
        this.updateTarget("new", keyframes, options);
        return this;
    }
    old(keyframes, options) {
        this.updateTarget("old", keyframes, options);
        return this;
    }
    enter(keyframes, options) {
        this.updateTarget("enter", keyframes, options);
        return this;
    }
    exit(keyframes, options) {
        this.updateTarget("exit", keyframes, options);
        return this;
    }
    crossfade(options) {
        this.updateTarget("enter", {
            opacity: 1
        }, options);
        this.updateTarget("exit", {
            opacity: 0
        }, options);
        return this;
    }
    updateTarget(target, keyframes, options = {}) {
        const { currentTarget, targets } = this;
        if (!targets.has(currentTarget)) {
            targets.set(currentTarget, {});
        }
        const targetData = targets.get(currentTarget);
        targetData[target] = {
            keyframes,
            options
        };
    }
    then(resolve, reject) {
        return this.readyPromise.then(resolve, reject);
    }
}
function view(update, defaultOptions = {}) {
    return new ViewTransitionBuilder(update, defaultOptions);
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setDragLock",
    ()=>setDragLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
;
function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"][axis]) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"][axis] = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"][axis] = false;
            };
        }
    } else {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].x || __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].y) {
            return null;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].y = true;
            return ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].x = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDragging"].y = false;
            };
        }
    }
}
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$controls$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/controls/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$utils$2f$get$2d$value$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$calc$2d$duration$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$create$2d$generator$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$generators$2f$utils$2f$is$2d$generator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$NativeAnimationControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$attach$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$waapi$2f$utils$2f$linear$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/flags.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$linear$2d$easing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$view$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/view/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$is$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$state$2f$set$2d$active$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$node$2d$or$2d$child$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$utils$2f$is$2d$primary$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Menu
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Menu", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }
    ]
]);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>X
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowDown
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowDown", [
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ],
    [
        "path",
        {
            d: "m19 12-7 7-7-7",
            key: "1idqje"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-down.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowUpRight
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowUpRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowUpRight", [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-up-right.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUpRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Award
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Award = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Award", [
    [
        "path",
        {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }
    ]
]);
;
 //# sourceMappingURL=award.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Award",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Users
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Users", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "path",
        {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }
    ]
]);
;
 //# sourceMappingURL=users.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Globe
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Globe", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }
    ],
    [
        "path",
        {
            d: "M2 12h20",
            key: "9i4pu4"
        }
    ]
]);
;
 //# sourceMappingURL=globe.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Zap
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Zap", [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
]);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPin
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mail
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Mail", [
    [
        "rect",
        {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
;
 //# sourceMappingURL=mail.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Phone
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
;
 //# sourceMappingURL=phone.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Map
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Map", [
    [
        "path",
        {
            d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
            key: "169xi5"
        }
    ],
    [
        "path",
        {
            d: "M15 5.764v15",
            key: "1pn4in"
        }
    ],
    [
        "path",
        {
            d: "M9 3.236v15",
            key: "1uimfh"
        }
    ]
]);
;
 //# sourceMappingURL=map.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Map",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Linkedin
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Linkedin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Linkedin", [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }
    ],
    [
        "rect",
        {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }
    ]
]);
;
 //# sourceMappingURL=linkedin.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Linkedin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Twitter
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Twitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Twitter", [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
]);
;
 //# sourceMappingURL=twitter.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Twitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Instagram
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Instagram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Instagram", [
    [
        "rect",
        {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw"
        }
    ],
    [
        "path",
        {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }
    ],
    [
        "line",
        {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5",
            key: "r4j83e"
        }
    ]
]);
;
 //# sourceMappingURL=instagram.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Instagram",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Github
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Github = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Github", [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
]);
;
 //# sourceMappingURL=github.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Github",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/lib/has.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactIs = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/react-simple-maps/node_modules/d3-array/src/fsum.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
__turbopack_context__.s([
    "Adder",
    ()=>Adder,
    "fcumsum",
    ()=>fcumsum,
    "fsum",
    ()=>fsum
]);
class Adder {
    constructor(){
        this._partials = new Float64Array(32);
        this._n = 0;
    }
    add(x) {
        const p = this._partials;
        let i = 0;
        for(let j = 0; j < this._n && j < 32; j++){
            const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
            if (lo) p[i++] = lo;
            x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
    }
    valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
            hi = p[--n];
            while(n > 0){
                x = hi;
                y = p[--n];
                hi = x + y;
                lo = y - (hi - x);
                if (lo) break;
            }
            if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                y = lo * 2;
                x = hi + y;
                if (y == x - hi) hi = x;
            }
        }
        return hi;
    }
}
function fsum(values, valueof) {
    const adder = new Adder();
    if (valueof === undefined) {
        for (let value of values){
            if (value = +value) {
                adder.add(value);
            }
        }
    } else {
        let index = -1;
        for (let value of values){
            if (value = +valueof(value, ++index, values)) {
                adder.add(value);
            }
        }
    }
    return +adder;
}
function fcumsum(values, valueof) {
    const adder = new Adder();
    let index = -1;
    return Float64Array.from(values, valueof === undefined ? (v)=>adder.add(+v || 0) : (v)=>adder.add(+valueof(v, ++index, values) || 0));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/react-simple-maps/node_modules/d3-array/src/merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>merge
]);
function* flatten(arrays) {
    for (const array of arrays){
        yield* array;
    }
}
function merge(arrays) {
    return Array.from(flatten(arrays));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/react-simple-maps/node_modules/d3-array/src/merge.js [app-client] (ecmascript) <export default as merge>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "merge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$react$2d$simple$2d$maps$2f$node_modules$2f$d3$2d$array$2f$src$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$react$2d$simple$2d$maps$2f$node_modules$2f$d3$2d$array$2f$src$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/react-simple-maps/node_modules/d3-array/src/merge.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/react-simple-maps/node_modules/d3-array/src/range.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while(++i < n){
        range[i] = start + i * step;
    }
    return range;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/react-simple-maps/node_modules/d3-array/src/range.js [app-client] (ecmascript) <export default as range>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "range",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$react$2d$simple$2d$maps$2f$node_modules$2f$d3$2d$array$2f$src$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$react$2d$simple$2d$maps$2f$node_modules$2f$d3$2d$array$2f$src$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/react-simple-maps/node_modules/d3-array/src/range.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/identity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x) {
    return x;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/transform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/identity.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(transform) {
    if (transform == null) return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
    return function(input, i) {
        if (!i) x0 = y0 = 0;
        var j = 2, n = input.length, output = new Array(n);
        output[0] = (x0 += input[0]) * kx + dx;
        output[1] = (y0 += input[1]) * ky + dy;
        while(j < n)output[j] = input[j], ++j;
        return output;
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/bbox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/transform.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(topology) {
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(topology.transform), key, x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;
    function bboxPoint(p) {
        p = t(p);
        if (p[0] < x0) x0 = p[0];
        if (p[0] > x1) x1 = p[0];
        if (p[1] < y0) y0 = p[1];
        if (p[1] > y1) y1 = p[1];
    }
    function bboxGeometry(o) {
        switch(o.type){
            case "GeometryCollection":
                o.geometries.forEach(bboxGeometry);
                break;
            case "Point":
                bboxPoint(o.coordinates);
                break;
            case "MultiPoint":
                o.coordinates.forEach(bboxPoint);
                break;
        }
    }
    topology.arcs.forEach(function(arc) {
        var i = -1, n = arc.length, p;
        while(++i < n){
            p = t(arc[i], i);
            if (p[0] < x0) x0 = p[0];
            if (p[0] > x1) x1 = p[0];
            if (p[1] < y0) y0 = p[1];
            if (p[1] > y1) y1 = p[1];
        }
    });
    for(key in topology.objects){
        bboxGeometry(topology.objects[key]);
    }
    return [
        x0,
        y0,
        x1,
        y1
    ];
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/reverse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(array, n) {
    var t, j = array.length, i = j - n;
    while(i < --j)t = array[i], array[i++] = array[j], array[j] = t;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/feature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "object",
    ()=>object
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/reverse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/transform.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(topology, o) {
    if (typeof o === "string") o = topology.objects[o];
    return o.type === "GeometryCollection" ? {
        type: "FeatureCollection",
        features: o.geometries.map(function(o) {
            return feature(topology, o);
        })
    } : feature(topology, o);
}
function feature(topology, o) {
    var id = o.id, bbox = o.bbox, properties = o.properties == null ? {} : o.properties, geometry = object(topology, o);
    return id == null && bbox == null ? {
        type: "Feature",
        properties: properties,
        geometry: geometry
    } : bbox == null ? {
        type: "Feature",
        id: id,
        properties: properties,
        geometry: geometry
    } : {
        type: "Feature",
        id: id,
        bbox: bbox,
        properties: properties,
        geometry: geometry
    };
}
function object(topology, o) {
    var transformPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(topology.transform), arcs = topology.arcs;
    function arc(i, points) {
        if (points.length) points.pop();
        for(var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k){
            points.push(transformPoint(a[k], k));
        }
        if (i < 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(points, n);
    }
    function point(p) {
        return transformPoint(p);
    }
    function line(arcs) {
        var points = [];
        for(var i = 0, n = arcs.length; i < n; ++i)arc(arcs[i], points);
        if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
        return points;
    }
    function ring(arcs) {
        var points = line(arcs);
        while(points.length < 4)points.push(points[0]); // This may happen if an arc has only two points.
        return points;
    }
    function polygon(arcs) {
        return arcs.map(ring);
    }
    function geometry(o) {
        var type = o.type, coordinates;
        switch(type){
            case "GeometryCollection":
                return {
                    type: type,
                    geometries: o.geometries.map(geometry)
                };
            case "Point":
                coordinates = point(o.coordinates);
                break;
            case "MultiPoint":
                coordinates = o.coordinates.map(point);
                break;
            case "LineString":
                coordinates = line(o.arcs);
                break;
            case "MultiLineString":
                coordinates = o.arcs.map(line);
                break;
            case "Polygon":
                coordinates = polygon(o.arcs);
                break;
            case "MultiPolygon":
                coordinates = o.arcs.map(polygon);
                break;
            default:
                return null;
        }
        return {
            type: type,
            coordinates: coordinates
        };
    }
    return geometry(o);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/stitch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(topology, arcs) {
    var stitchedArcs = {}, fragmentByStart = {}, fragmentByEnd = {}, fragments = [], emptyIndex = -1;
    // Stitch empty arcs first, since they may be subsumed by other arcs.
    arcs.forEach(function(i, j) {
        var arc = topology.arcs[i < 0 ? ~i : i], t;
        if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
            t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
        }
    });
    arcs.forEach(function(i) {
        var e = ends(i), start = e[0], end = e[1], f, g;
        if (f = fragmentByEnd[start]) {
            delete fragmentByEnd[f.end];
            f.push(i);
            f.end = end;
            if (g = fragmentByStart[end]) {
                delete fragmentByStart[g.start];
                var fg = g === f ? f : f.concat(g);
                fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
            } else {
                fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
            }
        } else if (f = fragmentByStart[end]) {
            delete fragmentByStart[f.start];
            f.unshift(i);
            f.start = start;
            if (g = fragmentByEnd[start]) {
                delete fragmentByEnd[g.end];
                var gf = g === f ? f : g.concat(f);
                fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
            } else {
                fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
            }
        } else {
            f = [
                i
            ];
            fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
        }
    });
    function ends(i) {
        var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
        if (topology.transform) p1 = [
            0,
            0
        ], arc.forEach(function(dp) {
            p1[0] += dp[0], p1[1] += dp[1];
        });
        else p1 = arc[arc.length - 1];
        return i < 0 ? [
            p1,
            p0
        ] : [
            p0,
            p1
        ];
    }
    function flush(fragmentByEnd, fragmentByStart) {
        for(var k in fragmentByEnd){
            var f = fragmentByEnd[k];
            delete fragmentByStart[f.start];
            delete f.start;
            delete f.end;
            f.forEach(function(i) {
                stitchedArcs[i < 0 ? ~i : i] = 1;
            });
            fragments.push(f);
        }
    }
    flush(fragmentByEnd, fragmentByStart);
    flush(fragmentByStart, fragmentByEnd);
    arcs.forEach(function(i) {
        if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([
            i
        ]);
    });
    return fragments;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/mesh.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "meshArcs",
    ()=>meshArcs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/feature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$stitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/stitch.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(topology) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])(topology, meshArcs.apply(this, arguments));
}
function meshArcs(topology, object, filter) {
    var arcs, i, n;
    if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
    else for(i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i)arcs[i] = i;
    return {
        type: "MultiLineString",
        arcs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$stitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(topology, arcs)
    };
}
function extractArcs(topology, object, filter) {
    var arcs = [], geomsByArc = [], geom;
    function extract0(i) {
        var j = i < 0 ? ~i : i;
        (geomsByArc[j] || (geomsByArc[j] = [])).push({
            i: i,
            g: geom
        });
    }
    function extract1(arcs) {
        arcs.forEach(extract0);
    }
    function extract2(arcs) {
        arcs.forEach(extract1);
    }
    function extract3(arcs) {
        arcs.forEach(extract2);
    }
    function geometry(o) {
        switch(geom = o, o.type){
            case "GeometryCollection":
                o.geometries.forEach(geometry);
                break;
            case "LineString":
                extract1(o.arcs);
                break;
            case "MultiLineString":
            case "Polygon":
                extract2(o.arcs);
                break;
            case "MultiPolygon":
                extract3(o.arcs);
                break;
        }
    }
    geometry(object);
    geomsByArc.forEach(filter == null ? function(geoms) {
        arcs.push(geoms[0].i);
    } : function(geoms) {
        if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i);
    });
    return arcs;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "mergeArcs",
    ()=>mergeArcs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/feature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$stitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/stitch.js [app-client] (ecmascript)");
;
;
function planarRingArea(ring) {
    var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
    while(++i < n)a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
    return Math.abs(area); // Note: doubled area!
}
function __TURBOPACK__default__export__(topology) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])(topology, mergeArcs.apply(this, arguments));
}
function mergeArcs(topology, objects) {
    var polygonsByArc = {}, polygons = [], groups = [];
    objects.forEach(geometry);
    function geometry(o) {
        switch(o.type){
            case "GeometryCollection":
                o.geometries.forEach(geometry);
                break;
            case "Polygon":
                extract(o.arcs);
                break;
            case "MultiPolygon":
                o.arcs.forEach(extract);
                break;
        }
    }
    function extract(polygon) {
        polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
                (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
            });
        });
        polygons.push(polygon);
    }
    function area(ring) {
        return planarRingArea((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"])(topology, {
            type: "Polygon",
            arcs: [
                ring
            ]
        }).coordinates[0]);
    }
    polygons.forEach(function(polygon) {
        if (!polygon._) {
            var group = [], neighbors = [
                polygon
            ];
            polygon._ = 1;
            groups.push(group);
            while(polygon = neighbors.pop()){
                group.push(polygon);
                polygon.forEach(function(ring) {
                    ring.forEach(function(arc) {
                        polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
                            if (!polygon._) {
                                polygon._ = 1;
                                neighbors.push(polygon);
                            }
                        });
                    });
                });
            }
        }
    });
    polygons.forEach(function(polygon) {
        delete polygon._;
    });
    return {
        type: "MultiPolygon",
        arcs: groups.map(function(polygons) {
            var arcs = [], n;
            // Extract the exterior (unique) arcs.
            polygons.forEach(function(polygon) {
                polygon.forEach(function(ring) {
                    ring.forEach(function(arc) {
                        if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
                            arcs.push(arc);
                        }
                    });
                });
            });
            // Stitch the arcs into one or more rings.
            arcs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$stitch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(topology, arcs);
            // If more than one ring is returned,
            // at most one of these rings can be the exterior;
            // choose the one with the greatest absolute area.
            if ((n = arcs.length) > 1) {
                for(var i = 1, k = area(arcs[0]), ki, t; i < n; ++i){
                    if ((ki = area(arcs[i])) > k) {
                        t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
                    }
                }
            }
            return arcs;
        }).filter(function(arcs) {
            return arcs.length > 0;
        })
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/bisect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, x) {
    var lo = 0, hi = a.length;
    while(lo < hi){
        var mid = lo + hi >>> 1;
        if (a[mid] < x) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/neighbors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/bisect.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(objects) {
    var indexesByArc = {}, neighbors = objects.map(function() {
        return [];
    });
    function line(arcs, i) {
        arcs.forEach(function(a) {
            if (a < 0) a = ~a;
            var o = indexesByArc[a];
            if (o) o.push(i);
            else indexesByArc[a] = [
                i
            ];
        });
    }
    function polygon(arcs, i) {
        arcs.forEach(function(arc) {
            line(arc, i);
        });
    }
    function geometry(o, i) {
        if (o.type === "GeometryCollection") o.geometries.forEach(function(o) {
            geometry(o, i);
        });
        else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
    }
    var geometryType = {
        LineString: line,
        MultiLineString: polygon,
        Polygon: polygon,
        MultiPolygon: function(arcs, i) {
            arcs.forEach(function(arc) {
                polygon(arc, i);
            });
        }
    };
    objects.forEach(geometry);
    for(var i in indexesByArc){
        for(var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j){
            for(var k = j + 1; k < m; ++k){
                var ij = indexes[j], ik = indexes[k], n;
                if ((n = neighbors[ij])[i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(n, ik)] !== ik) n.splice(i, 0, ik);
                if ((n = neighbors[ik])[i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(n, ij)] !== ij) n.splice(i, 0, ij);
            }
        }
    }
    return neighbors;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/untransform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/identity.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(transform) {
    if (transform == null) return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    var x0, y0, kx = transform.scale[0], ky = transform.scale[1], dx = transform.translate[0], dy = transform.translate[1];
    return function(input, i) {
        if (!i) x0 = y0 = 0;
        var j = 2, n = input.length, output = new Array(n), x1 = Math.round((input[0] - dx) / kx), y1 = Math.round((input[1] - dy) / ky);
        output[0] = x1 - x0, x0 = x1;
        output[1] = y1 - y0, y0 = y1;
        while(j < n)output[j] = input[j], ++j;
        return output;
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/quantize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$bbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/bbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$untransform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/untransform.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(topology, transform) {
    if (topology.transform) throw new Error("already quantized");
    if (!transform || !transform.scale) {
        if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
        box = topology.bbox || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$bbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(topology);
        var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
        transform = {
            scale: [
                x1 - x0 ? (x1 - x0) / (n - 1) : 1,
                y1 - y0 ? (y1 - y0) / (n - 1) : 1
            ],
            translate: [
                x0,
                y0
            ]
        };
    } else {
        box = topology.bbox;
    }
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$untransform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(transform), box, key, inputs = topology.objects, outputs = {};
    function quantizePoint(point) {
        return t(point);
    }
    function quantizeGeometry(input) {
        var output;
        switch(input.type){
            case "GeometryCollection":
                output = {
                    type: "GeometryCollection",
                    geometries: input.geometries.map(quantizeGeometry)
                };
                break;
            case "Point":
                output = {
                    type: "Point",
                    coordinates: quantizePoint(input.coordinates)
                };
                break;
            case "MultiPoint":
                output = {
                    type: "MultiPoint",
                    coordinates: input.coordinates.map(quantizePoint)
                };
                break;
            default:
                return input;
        }
        if (input.id != null) output.id = input.id;
        if (input.bbox != null) output.bbox = input.bbox;
        if (input.properties != null) output.properties = input.properties;
        return output;
    }
    function quantizeArc(input) {
        var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
        output[0] = t(input[0], 0);
        while(++i < n)if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
        if (j === 1) output[j++] = [
            0,
            0
        ]; // an arc must have at least two points
        output.length = j;
        return output;
    }
    for(key in inputs)outputs[key] = quantizeGeometry(inputs[key]);
    return {
        type: "Topology",
        bbox: box,
        transform: transform,
        objects: outputs,
        arcs: topology.arcs.map(quantizeArc)
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$bbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/bbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/feature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$neighbors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/neighbors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$quantize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/quantize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$untransform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/untransform.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bbox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$bbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "feature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "merge",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "mergeArcs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeArcs"],
    "mesh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "meshArcs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshArcs"],
    "neighbors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$neighbors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "quantize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$quantize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "transform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "untransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$untransform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$bbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/bbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/feature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$neighbors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/neighbors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$quantize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/quantize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$topojson$2d$client$2f$src$2f$untransform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/untransform.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var noop = {
    value: ()=>{}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) {
            return c.value;
        }
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i){
        if (type[i].name === name) {
            type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
            break;
        }
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
const __TURBOPACK__default__export__ = dispatch;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript) <export default as dispatch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dispatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function none() {}
function __TURBOPACK__default__export__(selector) {
    return selector == null ? none : function() {
        return this.querySelector(selector);
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selector.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(select) {
    if (typeof select !== "function") select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i){
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"](subgroups, this._parents);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selectorAll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function empty() {
    return [];
}
function __TURBOPACK__default__export__(selector) {
    return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/selectAll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selectorAll.js [app-client] (ecmascript)");
;
;
;
function arrayAll(select) {
    return function() {
        var group = select.apply(this, arguments);
        return group == null ? [] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(group);
    };
}
function __TURBOPACK__default__export__(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"](subgroups, parents);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/matcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "childMatcher",
    ()=>childMatcher,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(selector) {
    return function() {
        return this.matches(selector);
    };
}
function childMatcher(selector) {
    return function(node) {
        return node.matches(selector);
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/selectChild.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/matcher.js [app-client] (ecmascript)");
;
var find = Array.prototype.find;
function childFind(match) {
    return function() {
        return find.call(this.children, match);
    };
}
function childFirst() {
    return this.firstElementChild;
}
function __TURBOPACK__default__export__(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["childMatcher"])(match)));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/selectChildren.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/matcher.js [app-client] (ecmascript)");
;
var filter = Array.prototype.filter;
function children() {
    return this.children;
}
function childrenFilter(match) {
    return function() {
        return filter.call(this.children, match);
    };
}
function __TURBOPACK__default__export__(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["childMatcher"])(match)));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/filter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/matcher.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(match) {
    if (typeof match !== "function") match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i){
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"](subgroups, this._parents);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/sparse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(update) {
    return new Array(update.length);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/enter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnterNode",
    ()=>EnterNode,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/sparse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"](this._enter || this._groups.map(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), this._parents);
}
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/constant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(x) {
    return function() {
        return x;
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/enter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/constant.js [app-client] (ecmascript)");
;
;
;
;
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i){
        if (node = group[i]) {
            node.__data__ = data[i];
            update[i] = node;
        } else {
            enter[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnterNode"](parent, data[i]);
        }
    }
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i){
        if (node = group[i]) {
            exit[i] = node;
        }
    }
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i){
        if (node = group[i]) {
            keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
            if (nodeByKeyValue.has(keyValue)) {
                exit[i] = node;
            } else {
                nodeByKeyValue.set(keyValue, node);
            }
        }
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else {
            enter[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnterNode"](parent, data[i]);
        }
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i){
        if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
            exit[i] = node;
        }
    }
}
function datum(node) {
    return node.__data__;
}
function __TURBOPACK__default__export__(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0){
            if (previous = enterGroup[i0]) {
                if (i0 >= i1) i1 = i0 + 1;
                while(!(next = updateGroup[i1]) && ++i1 < dataLength);
                previous._next = next || null;
            }
        }
    }
    update = new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"](update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/exit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/sparse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"](this._exit || this._groups.map(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sparse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), this._parents);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/join.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(selection) {
    if (!(selection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"])) throw new Error("invalid merge");
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i){
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for(; j < m0; ++j){
        merges[j] = groups0[j];
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"](merges, this._parents);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/order.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;){
            if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
    }
    return this;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/sort.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i){
            if (node = group[i]) {
                sortgroup[i] = node;
            }
        }
        sortgroup.sort(compareNode);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"](sortgroups, this._parents).order();
}
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/call.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/nodes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    return Array.from(this);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
            var node = group[i];
            if (node) return node;
        }
    }
    return null;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/size.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/empty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__() {
    return !this.node();
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/each.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i){
            if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
    }
    return this;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespaces.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "xhtml",
    ()=>xhtml
]);
var xhtml = "http://www.w3.org/1999/xhtml";
const __TURBOPACK__default__export__ = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespace.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespaces.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasOwnProperty(prefix) ? {
        space: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/attr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespace.js [app-client] (ecmascript)");
;
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function __TURBOPACK__default__export__(name, value) {
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/window.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView; // node is a Document
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/style.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "styleValue",
    ()=>styleValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/window.js [app-client] (ecmascript)");
;
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function __TURBOPACK__default__export__(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function __TURBOPACK__default__export__(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/classed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}
function __TURBOPACK__default__export__(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function __TURBOPACK__default__export__(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/html.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function __TURBOPACK__default__export__(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/raise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function __TURBOPACK__default__export__() {
    return this.each(raise);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/lower.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function __TURBOPACK__default__export__() {
    return this.each(lower);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/creator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespaces.js [app-client] (ecmascript)");
;
;
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xhtml"] && document.documentElement.namespaceURI === __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xhtml"] ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function __TURBOPACK__default__export__(name) {
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/append.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/creator.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(name) {
    var create = typeof name === "function" ? name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/insert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/creator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selector.js [app-client] (ecmascript)");
;
;
function constantNull() {
    return null;
}
function __TURBOPACK__default__export__(name, before) {
    var create = typeof name === "function" ? name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name), select = before == null ? constantNull : typeof before === "function" ? before : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/remove.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function __TURBOPACK__default__export__() {
    return this.each(remove);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/clone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function __TURBOPACK__default__export__(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/datum.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/on.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j){
            if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
            } else {
                on[++i] = o;
            }
        }
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) for(var j = 0, m = on.length; j < m; ++j){
            if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function __TURBOPACK__default__export__(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j){
            for(i = 0, o = on[j]; i < n; ++i){
                if ((t = typenames[i]).type === o.type && t.name === o.name) {
                    return o.value;
                }
            }
        }
        return;
    }
    on = value ? onAdd : onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/dispatch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/window.js [app-client] (ecmascript)");
;
function dispatchEvent(node, type, params) {
    var window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node), event = window.CustomEvent;
    if (typeof event === "function") {
        event = new event(type, params);
    } else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function __TURBOPACK__default__export__(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/iterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function* __TURBOPACK__default__export__() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i){
            if (node = group[i]) yield node;
        }
    }
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Selection",
    ()=>Selection,
    "default",
    ()=>__TURBOPACK__default__export__,
    "root",
    ()=>root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/selectAll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChild$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/selectChild.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/selectChildren.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/filter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/enter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$exit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/exit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$join$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/join.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/order.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sort$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/sort.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/nodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$each$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/each.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$attr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/attr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$classed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/classed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$raise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/raise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$lower$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/lower.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$append$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/append.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$insert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/insert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/remove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/clone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$datum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/datum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/on.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/dispatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/iterator.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
function selection_selection() {
    return this;
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    selectAll: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    selectChild: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChild$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    selectChildren: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$selectChildren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    filter: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    enter: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$enter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    exit: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$exit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    join: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$join$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    merge: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    selection: selection_selection,
    order: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$order$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    sort: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$sort$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    call: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    nodes: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$nodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    node: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    empty: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    each: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$each$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    attr: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$attr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    style: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    property: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    classed: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$classed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    html: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    raise: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$raise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    lower: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$lower$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    append: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$append$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    insert: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$insert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    remove: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    clone: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    datum: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$datum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    on: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    dispatch: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    [Symbol.iterator]: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const __TURBOPACK__default__export__ = selection;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(selector) {
    return typeof selector === "string" ? new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"]([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"]([
        [
            selector
        ]
    ], __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["root"]);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "select",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/select.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/sourceEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/pointer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$sourceEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/sourceEvent.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(event, node) {
    event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$sourceEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [
                event.clientX - rect.left - node.clientLeft,
                event.clientY - rect.top - node.clientTop
            ];
        }
    }
    return [
        event.pageX,
        event.pageY
    ];
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/pointer.js [app-client] (ecmascript) <export default as pointer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pointer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/pointer.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript) <export default as selection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespace.js [app-client] (ecmascript) <export default as namespace>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "namespace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespace.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/matcher.js [app-client] (ecmascript) <export default as matcher>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/matcher.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selector.js [app-client] (ecmascript) <export default as selector>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selector.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selectorAll.js [app-client] (ecmascript) <export default as selectorAll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectorAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selectorAll.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/style.js [app-client] (ecmascript) <export styleValue as style>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "style",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleValue"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/style.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
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
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/create.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/creator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/select.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(name).call(document.documentElement));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/local.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>local
]);
var nextId = 0;
function local() {
    return new Local;
}
function Local() {
    this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
    constructor: Local,
    get: function(node) {
        var id = this._;
        while(!(id in node))if (!(node = node.parentNode)) return;
        return node[id];
    },
    set: function(node, value) {
        return node[this._] = value;
    },
    remove: function(node) {
        return this._ in node && delete node[this._];
    },
    toString: function() {
        return this._;
    }
};
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/pointers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/pointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$sourceEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/sourceEvent.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(events, node) {
    if (events.target) {
        events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$sourceEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(events);
        if (node === undefined) node = events.currentTarget;
        events = events.touches || [
            events
        ];
    }
    return Array.from(events, (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event, node));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selectAll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(selector) {
    return typeof selector === "string" ? new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"]([
        document.querySelectorAll(selector)
    ], [
        document.documentElement
    ]) : new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Selection"]([
        selector == null ? [] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(selector)
    ], __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["root"]);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "creator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "local",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$local$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "matcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "namespace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "namespaces",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "pointer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "pointers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "select",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "selectAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "selection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "selector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "selectorAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "style",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleValue"],
    "window",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/create.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$creator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/creator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$local$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/local.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/matcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespace.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/pointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/pointers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selectAll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selectorAll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/window.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-drag/src/noevent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "nopropagation",
    ()=>nopropagation
]);
function nopropagation(event) {
    event.stopImmediatePropagation();
}
function __TURBOPACK__default__export__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "yesdrag",
    ()=>yesdrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-drag/src/noevent.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(view) {
    var root = view.document.documentElement, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(view).on("dragstart.drag", __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], true);
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], true);
    } else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function yesdrag(view, noclick) {
    var root = view.document.documentElement, selection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], true);
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) {
        selection.on("selectstart.drag", null);
    } else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript) <export default as dragDisable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dragDisable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript) <export yesdrag as dragEnable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dragEnable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yesdrag"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/zoom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var epsilon2 = 1e-12;
function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
const __TURBOPACK__default__export__ = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/zoom.js [app-client] (ecmascript) <export default as interpolateZoom>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateZoom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/zoom.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/number.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function __TURBOPACK__default__export__(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/transform/decompose.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "identity",
    ()=>identity
]);
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function __TURBOPACK__default__export__(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/transform/parse.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCss",
    ()=>parseCss,
    "parseSvg",
    ()=>parseSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/transform/decompose.js [app-client] (ecmascript)");
;
var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null) return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
    value = value.matrix;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$decompose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/transform/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateTransformCss",
    ()=>interpolateTransformCss,
    "interpolateTransformSvg",
    ()=>interpolateTransformSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/transform/parse.js [app-client] (ecmascript)");
;
;
function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(xa, xb)
            }, {
                i: i - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ya, yb)
            });
        } else if (xb || yb) {
            s.push("translate(" + xb + pxComma + yb + pxParen);
        }
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a, b)
            });
        } else if (b) {
            s.push(pop(s) + "rotate(" + b + degParen);
        }
    }
    function skewX(a, b, s, q) {
        if (a !== b) {
            q.push({
                i: s.push(pop(s) + "skewX(", null, degParen) - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a, b)
            });
        } else if (b) {
            s.push(pop(s) + "skewX(" + b + degParen);
        }
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(xa, xb)
            }, {
                i: i - 2,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) {
            s.push(pop(s) + "scale(" + xb + "," + yb + ")");
        }
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSvg"], ", ", ")", ")");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/number.js [app-client] (ecmascript) <export default as interpolateNumber>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/number.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/basis.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basis",
    ()=>basis,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function __TURBOPACK__default__export__(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/basisClosed.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/basis.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basis"])((t - i / n) * n, v0, v1, v2, v3);
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/constant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (x)=>()=>x;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/color.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nogamma,
    "gamma",
    ()=>gamma,
    "hue",
    ()=>hue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/constant.js [app-client] (ecmascript)");
;
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isNaN(a) ? b : a);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/rgb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "rgbBasis",
    ()=>rgbBasis,
    "rgbBasisClosed",
    ()=>rgbBasisClosed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-color/src/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/basis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basisClosed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/basisClosed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/color.js [app-client] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = function rgbGamma(y) {
    var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gamma"])(y);
    function rgb(start, end) {
        var r = color((start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(start)).r, (end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
var rgbBasisClosed = rgbSpline(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$basisClosed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/rgb.js [app-client] (ecmascript) <export default as interpolateRgb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateRgb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/rgb.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/number.js [app-client] (ecmascript)");
;
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function __TURBOPACK__default__export__(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = reA.exec(a)) && (bm = reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(am, bm)
            });
        }
        bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/string.js [app-client] (ecmascript) <export default as interpolateString>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interpolateString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/string.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timer",
    ()=>Timer,
    "now",
    ()=>now,
    "timer",
    ()=>timer,
    "timerFlush",
    ()=>timerFlush
]);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1){
        if (t1._call) {
            if (time > t1._time) time = t1._time;
            t0 = t1, t1 = t1._next;
        } else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-timer/src/timeout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(callback, delay, time) {
    var t = new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timer"];
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-timer/src/timeout.js [app-client] (ecmascript) <export default as timeout>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timeout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-timer/src/timeout.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CREATED",
    ()=>CREATED,
    "ENDED",
    ()=>ENDED,
    "ENDING",
    ()=>ENDING,
    "RUNNING",
    ()=>RUNNING,
    "SCHEDULED",
    ()=>SCHEDULED,
    "STARTED",
    ()=>STARTED,
    "STARTING",
    ()=>STARTING,
    "default",
    ()=>__TURBOPACK__default__export__,
    "get",
    ()=>get,
    "init",
    ()=>init,
    "set",
    ()=>set
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__timeout$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-timer/src/timeout.js [app-client] (ecmascript) <export default as timeout>");
;
;
var emptyOn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function __TURBOPACK__default__export__(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
        name: name,
        index: index,
        group: group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
    });
}
function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
}
function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
}
function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timer"])(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__timeout$3e$__["timeout"])(start);
            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__timeout$3e$__["timeout"])(function() {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i){
            if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
                tween[++j] = o;
            }
        }
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while(++i < n){
            tween[i].call(node, t);
        }
        // Dispatch the end event.
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/interrupt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STARTING"] && schedule.state < __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDING"];
        schedule.state = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDED"];
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/selection/interrupt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/interrupt.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(name) {
    return this.each(function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this, name);
    });
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/tween.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "tweenValue",
    ()=>tweenValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i){
                if (tween1[i].name === name) {
                    tween1 = tween1.slice();
                    tween1.splice(i, 1);
                    break;
                }
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i){
                if (tween1[i].name === name) {
                    tween1[i] = t;
                    break;
                }
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function __TURBOPACK__default__export__(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) {
                return t.value;
            }
        }
        return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(node, id).value[name];
    };
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/interpolate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-color/src/color.js [app-client] (ecmascript) <export default as color>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/number.js [app-client] (ecmascript) <export default as interpolateNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRgb$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/rgb.js [app-client] (ecmascript) <export default as interpolateRgb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateString$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/string.js [app-client] (ecmascript) <export default as interpolateString>");
;
;
function __TURBOPACK__default__export__(a, b) {
    var c;
    return (typeof b === "number" ? __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"] : b instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"] ? __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRgb$3e$__["interpolateRgb"] : (c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__color$3e$__["color"])(b)) ? (b = c, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$rgb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRgb$3e$__["interpolateRgb"]) : __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateString$3e$__["interpolateString"])(a, b);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/attr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/transform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespace.js [app-client] (ecmascript) <export default as namespace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/tween.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/interpolate.js [app-client] (ecmascript)");
;
;
;
;
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function __TURBOPACK__default__export__(name, value) {
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__["namespace"])(name), i = fullname === "transform" ? __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolateTransformSvg"] : __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tweenValue"])(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/attrTween.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/namespace.js [app-client] (ecmascript) <export default as namespace>");
;
function attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function __TURBOPACK__default__export__(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$namespace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__namespace$3e$__["namespace"])(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/delay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
function delayFunction(id, value) {
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"])(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"])(this, id).delay = value;
    };
}
function __TURBOPACK__default__export__(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(this.node(), id).delay;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/duration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
function durationFunction(id, value) {
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(this, id).duration = value;
    };
}
function __TURBOPACK__default__export__(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(this.node(), id).duration;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/ease.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(this, id).ease = value;
    };
}
function __TURBOPACK__default__export__(value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(this.node(), id).ease;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/easeVarying.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
function easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(this, id).ease = v;
    };
}
function __TURBOPACK__default__export__(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/filter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__matcher$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/matcher.js [app-client] (ecmascript) <export default as matcher>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/index.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__(match) {
    if (typeof match !== "function") match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$matcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__matcher$3e$__["matcher"])(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i){
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"](subgroups, this._parents, this._name, this._id);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/index.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i){
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for(; j < m0; ++j){
        merges[j] = groups0[j];
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"](merges, this._parents, this._name, this._id);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/on.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"] : __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"];
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function __TURBOPACK__default__export__(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/remove.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
function __TURBOPACK__default__export__() {
    return this.on("end.remove", removeFunction(this._id));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selector$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selector.js [app-client] (ecmascript) <export default as selector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
;
;
function __TURBOPACK__default__export__(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selector$3e$__["selector"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i){
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node) subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(subgroup[i], name, id, i, subgroup, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(node, id));
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"](subgroups, this._parents, name, id);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/selectAll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selectorAll$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selectorAll.js [app-client] (ecmascript) <export default as selectorAll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
;
;
function __TURBOPACK__default__export__(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selectorAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selectorAll$3e$__["selectorAll"])(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(node, id), k = 0, l = children.length; k < l; ++k){
                    if (child = children[k]) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(child, name, id, k, children, inherit);
                    }
                }
                subgroups.push(children);
                parents.push(node);
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"](subgroups, parents, name, id);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/selection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript) <export default as selection>");
;
var Selection = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype.constructor;
function __TURBOPACK__default__export__() {
    return new Selection(this._groups, this._parents);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/style.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/transform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/style.js [app-client] (ecmascript) <export styleValue as style>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/tween.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/interpolate.js [app-client] (ecmascript)");
;
;
;
;
;
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name), string1 = (this.style.removeProperty(name), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__styleValue__as__style$3e$__["style"])(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function __TURBOPACK__default__export__(name, value, priority) {
    var i = (name += "") === "transform" ? __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$transform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolateTransformCss"] : __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$interpolate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tweenValue"])(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/styleTween.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function __TURBOPACK__default__export__(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/tween.js [app-client] (ecmascript)");
;
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function __TURBOPACK__default__export__(value) {
    return this.tween("text", typeof value === "function" ? textFunction((0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tweenValue"])(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/textTween.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function __TURBOPACK__default__export__(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/transition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
;
function __TURBOPACK__default__export__() {
    var name = this._name, id0 = this._id, id1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newId"])();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                var inherit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(node, id0);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, name, id1, i, group, {
                    time: inherit.time + inherit.delay + inherit.duration,
                    delay: 0,
                    duration: inherit.duration,
                    ease: inherit.ease
                });
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"](groups, this._parents, name, id1);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/end.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
function __TURBOPACK__default__export__() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>Transition,
    "default",
    ()=>transition,
    "newId",
    ()=>newId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript) <export default as selection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/attr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attrTween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/attrTween.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$delay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/delay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$duration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/duration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$ease$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/ease.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$easeVarying$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/easeVarying.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/filter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/on.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/remove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selectAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/selectAll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/selection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$styleTween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/styleTween.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$textTween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/textTween.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/tween.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/end.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"])().transition(name);
}
function newId() {
    return ++id;
}
var selection_prototype = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    selectAll: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selectAll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    filter: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    merge: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    selection: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$selection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    transition: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    attr: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    attrTween: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$attrTween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    style: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    styleTween: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$styleTween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    textTween: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$textTween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    remove: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$remove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    tween: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$tween$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    delay: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$delay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    duration: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$duration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ease: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$ease$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    easeVarying: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$easeVarying$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    end: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/selection/transition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-ease/src/cubic.js [app-client] (ecmascript) <export cubicInOut as easeCubicInOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-timer/src/timer.js [app-client] (ecmascript)");
;
;
;
;
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__cubicInOut__as__easeCubicInOut$3e$__["easeCubicInOut"]
};
function inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) {
            throw new Error(`transition ${id} not found`);
        }
    }
    return timing;
}
function __TURBOPACK__default__export__(name) {
    var id, timing;
    if (name instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"]) {
        id = name._id, name = name._name;
    } else {
        id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newId"])(), (timing = defaultTiming).time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$timer$2f$src$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["now"])(), name = name == null ? null : name + "";
    }
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i){
            if (node = group[i]) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node, name, id, i, group, timing || inherit(node, id));
            }
        }
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"](groups, this._parents, name, id);
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/selection/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/selection/index.js [app-client] (ecmascript) <export default as selection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/selection/interrupt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/selection/transition.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype.interrupt = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__selection$3e$__["selection"].prototype.transition = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/active.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/schedule.js [app-client] (ecmascript)");
;
;
var root = [
    null
];
function __TURBOPACK__default__export__(node, name) {
    var schedules = node.__transition, schedule, i;
    if (schedules) {
        name = name == null ? null : name + "";
        for(i in schedules){
            if ((schedule = schedules[i]).state > __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$schedule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCHEDULED"] && schedule.name === name) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"]([
                    [
                        node
                    ]
                ], root, name, +i);
            }
        }
    }
    return null;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$selection$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/selection/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$transition$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/transition/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/active.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/interrupt.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/interrupt.js [app-client] (ecmascript) <export default as interrupt>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interrupt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/interrupt.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-color/src/define.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "extend",
    ()=>extend
]);
function __TURBOPACK__default__export__(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-color/src/color.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Color",
    ()=>Color,
    "Rgb",
    ()=>Rgb,
    "brighter",
    ()=>brighter,
    "darker",
    ()=>darker,
    "default",
    ()=>color,
    "hsl",
    ()=>hsl,
    "hslConvert",
    ()=>hslConvert,
    "rgb",
    ()=>rgb,
    "rgbConvert",
    ()=>rgbConvert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-color/src/define.js [app-client] (ecmascript)");
;
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Color, color, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHex8() {
    return this.rgb().formatHex8();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null) // invalid hex
     : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Rgb, rgb, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else {
        s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Hsl, hsl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$define$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-color/src/color.js [app-client] (ecmascript) <export default as color>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "color",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$color$2f$src$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-color/src/color.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-ease/src/cubic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicIn",
    ()=>cubicIn,
    "cubicInOut",
    ()=>cubicInOut,
    "cubicOut",
    ()=>cubicOut
]);
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-ease/src/cubic.js [app-client] (ecmascript) <export cubicInOut as easeCubicInOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeCubicInOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicInOut"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$ease$2f$src$2f$cubic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-ease/src/cubic.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/constant.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (x)=>()=>x;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZoomEvent
]);
function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transform",
    ()=>Transform,
    "default",
    ()=>transform,
    "identity",
    ()=>identity
]);
function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
        return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return identity;
    return node.__zoom;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/noevent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "nopropagation",
    ()=>nopropagation
]);
function nopropagation(event) {
    event.stopImmediatePropagation();
}
function __TURBOPACK__default__export__(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/zoom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-dispatch/src/dispatch.js [app-client] (ecmascript) <export default as dispatch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dragDisable$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript) <export default as dragDisable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__yesdrag__as__dragEnable$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-drag/src/nodrag.js [app-client] (ecmascript) <export yesdrag as dragEnable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateZoom$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-interpolate/src/zoom.js [app-client] (ecmascript) <export default as interpolateZoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/pointer.js [app-client] (ecmascript) <export default as pointer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-transition/src/interrupt.js [app-client] (ecmascript) <export default as interrupt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/constant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/noevent.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}
function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function defaultTransform() {
    return this.__zoom || __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
}
function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function __TURBOPACK__default__export__() {
    var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateZoom$3e$__["interpolateZoom"], listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$dispatch$2f$src$2f$dispatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dispatch$3e$__["dispatch"])("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", defaultTransform);
        if (collection !== selection) {
            schedule(collection, transform, point, event);
        } else {
            selection.interrupt().each(function() {
                gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
            });
        }
    };
    zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain(__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"].translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"](k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"](transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point, event) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"](k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this.that).datum();
            listeners.call(type, this.that, new __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
                g.mouse[1] = t.invert(g.mouse[0] = p);
            }
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
            g.start();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var g = gesture(this, args, true).event(event), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event, currentTarget), currentTarget = event.currentTarget, x0 = event.clientX, y0 = event.clientY;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__dragDisable$3e$__["dragDisable"])(event.view);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
        g.start();
        function mousemoved(event) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$drag$2f$src$2f$nodrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__yesdrag__as__dragEnable$3e$__["dragEnable"])(event.view, g.moved);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
        if (duration > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).transition().duration(duration).call(schedule, t1, p0, event);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$transition$2f$src$2f$interrupt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interrupt$3e$__["interrupt"])(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$noevent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nopropagation"])(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$pointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pointer$3e$__["pointer"])(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript)");
;
;
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "zoomIdentity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"],
    "zoomTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Pictures$2f$dgsoft$2d$website$2d$v2$2f$node_modules$2f$d3$2d$zoom$2f$src$2f$transform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/transform.js [app-client] (ecmascript)");
}),
"[project]/Pictures/dgsoft-website-v2/node_modules/react-simple-maps/dist/index.umd.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? t(exports, __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/prop-types/index.js [app-client] (ecmascript)"), __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/react-simple-maps/node_modules/d3-geo/src/index.js [app-client] (ecmascript)"), __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/topojson-client/src/index.js [app-client] (ecmascript)"), __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/d3-zoom/src/index.js [app-client] (ecmascript)"), __turbopack_context__.r("[project]/Pictures/dgsoft-website-v2/node_modules/d3-selection/src/index.js [app-client] (ecmascript)")) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(e, t, r, o, n, a, u) {
    "use strict";
    function s(e) {
        return e && "object" == typeof e && "default" in e ? e : {
            default: e
        };
    }
    function l(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return e && Object.keys(e).forEach(function(r) {
            if ("default" !== r) {
                var o = Object.getOwnPropertyDescriptor(e, r);
                Object.defineProperty(t, r, o.get ? o : {
                    enumerable: !0,
                    get: function() {
                        return e[r];
                    }
                });
            }
        }), t.default = e, Object.freeze(t);
    }
    var i = s(t), c = s(r), f = l(o);
    function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), r.push.apply(r, o);
        }
        return r;
    }
    function p(e) {
        for(var t = 1; t < arguments.length; t++){
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(r), !0).forEach(function(t) {
                y(e, t, r[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
        }
        return e;
    }
    function m(e) {
        return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, m(e);
    }
    function y(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e;
    }
    function g() {
        return g = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", g.apply(this, arguments);
    }
    function v(e, t) {
        if (null == e) return {};
        var r, o, n = function(e, t) {
            if (null == e) return {};
            var r, o, n = {}, a = Object.keys(e);
            for(o = 0; o < a.length; o++)r = a[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for(o = 0; o < a.length; o++)r = a[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
        }
        return n;
    }
    function h(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == r) return;
            var o, n, a = [], u = !0, s = !1;
            try {
                for(r = r.call(e); !(u = (o = r.next()).done) && (a.push(o.value), !t || a.length !== t); u = !0);
            } catch (e) {
                s = !0, n = e;
            } finally{
                try {
                    u || null == r.return || r.return();
                } finally{
                    if (s) throw n;
                }
            }
            return a;
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return b(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, t);
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for(var r = 0, o = new Array(t); r < t; r++)o[r] = e[r];
        return o;
    }
    var j = [
        "width",
        "height",
        "projection",
        "projectionConfig"
    ], M = f.geoPath, E = v(f, [
        "geoPath"
    ]), x = t.createContext(), k = function(e) {
        var r = e.width, o = e.height, n = e.projection, a = e.projectionConfig, u = v(e, j), s = h(a.center || [], 2), l = s[0], c = s[1], f = h(a.rotate || [], 3), d = f[0], p = f[1], m = f[2], y = h(a.parallels || [], 2), b = y[0], k = y[1], w = a.scale || null, O = t.useMemo({
            "k.useMemo[O]": function() {
                return ({
                    "k.useMemo[O]": function(e) {
                        var t = e.projectionConfig, r = void 0 === t ? {} : t, o = e.projection, n = void 0 === o ? "geoEqualEarth" : o, a = e.width, u = void 0 === a ? 800 : a, s = e.height, l = void 0 === s ? 600 : s;
                        if ("function" == typeof n) return n;
                        var i = E[n]().translate([
                            u / 2,
                            l / 2
                        ]);
                        return [
                            i.center ? "center" : null,
                            i.rotate ? "rotate" : null,
                            i.scale ? "scale" : null,
                            i.parallels ? "parallels" : null
                        ].forEach({
                            "k.useMemo[O]": function(e) {
                                e && (i = i[e](r[e] || i[e]()));
                            }
                        }["k.useMemo[O]"]), i;
                    }
                })["k.useMemo[O]"]({
                    projectionConfig: {
                        center: l || 0 === l || c || 0 === c ? [
                            l,
                            c
                        ] : null,
                        rotate: d || 0 === d || p || 0 === p ? [
                            d,
                            p,
                            m
                        ] : null,
                        parallels: b || 0 === b || k || 0 === k ? [
                            b,
                            k
                        ] : null,
                        scale: w
                    },
                    projection: n,
                    width: r,
                    height: o
                });
            }
        }["k.useMemo[O]"], [
            r,
            o,
            n,
            l,
            c,
            d,
            p,
            m,
            b,
            k,
            w
        ]), N = t.useCallback(O, [
            O
        ]), S = t.useMemo({
            "k.useMemo[S]": function() {
                return {
                    width: r,
                    height: o,
                    projection: N,
                    path: M().projection(N)
                };
            }
        }["k.useMemo[S]"], [
            r,
            o,
            N
        ]);
        return i.default.createElement(x.Provider, g({
            value: S
        }, u));
    };
    k.propTypes = {
        width: c.default.number,
        height: c.default.number,
        projection: c.default.oneOfType([
            c.default.string,
            c.default.func
        ]),
        projectionConfig: c.default.object
    };
    var w = [
        "width",
        "height",
        "projection",
        "projectionConfig",
        "className"
    ], O = t.forwardRef(function(e, t) {
        var r = e.width, o = void 0 === r ? 800 : r, n = e.height, a = void 0 === n ? 600 : n, u = e.projection, s = void 0 === u ? "geoEqualEarth" : u, l = e.projectionConfig, c = void 0 === l ? {} : l, f = e.className, d = void 0 === f ? "" : f, p = v(e, w);
        return i.default.createElement(k, {
            width: o,
            height: a,
            projection: s,
            projectionConfig: c
        }, i.default.createElement("svg", g({
            ref: t,
            viewBox: "0 0 ".concat(o, " ").concat(a),
            className: "rsm-svg ".concat(d)
        }, p)));
    });
    function N(e, t, r) {
        var o = (e * r.k - e) / 2, n = (t * r.k - t) / 2;
        return [
            e / 2 - (o + r.x) / r.k,
            t / 2 - (n + r.y) / r.k
        ];
    }
    function S(e, t) {
        if (!("Topology" === e.type)) return t ? t(e.features || e) : e.features || e;
        var r = n.feature(e, e.objects[Object.keys(e.objects)[0]]).features;
        return t ? t(r) : r;
    }
    function P(e) {
        return "Topology" === e.type ? {
            outline: n.mesh(e, e.objects[Object.keys(e.objects)[0]], function(e, t) {
                return e === t;
            }),
            borders: n.mesh(e, e.objects[Object.keys(e.objects)[0]], function(e, t) {
                return e !== t;
            })
        } : null;
    }
    function C(e, t) {
        return e ? e.map(function(e, r) {
            return p(p({}, e), {}, {
                rsmKey: "geo-".concat(r),
                svgPath: t(e)
            });
        }) : [];
    }
    function T(e) {
        var r = e.geography, o = e.parseGeographies, n = t.useContext(x).path, a = h(t.useState({}), 2), u = a[0], s = a[1];
        t.useEffect({
            "T.useEffect": function() {
                var e;
                "undefined" !== ("undefined" == typeof window ? "undefined" : m(window)) && r && ("string" == typeof r ? (e = r, fetch(e).then({
                    "T.useEffect": function(e) {
                        if (!e.ok) throw Error(e.statusText);
                        return e.json();
                    }
                }["T.useEffect"]).catch({
                    "T.useEffect": function(e) {
                        console.log("There was a problem when fetching the data: ", e);
                    }
                }["T.useEffect"])).then({
                    "T.useEffect": function(e) {
                        e && s({
                            geographies: S(e, o),
                            mesh: P(e)
                        });
                    }
                }["T.useEffect"]) : s({
                    geographies: S(r, o),
                    mesh: P(r)
                }));
            }
        }["T.useEffect"], [
            r,
            o
        ]);
        var l = t.useMemo({
            "T.useMemo[l]": function() {
                var e = u.mesh || {}, t = ({
                    "T.useMemo[l].t": function(e, t, r) {
                        return e && t ? {
                            outline: p(p({}, e), {}, {
                                rsmKey: "outline",
                                svgPath: r(e)
                            }),
                            borders: p(p({}, t), {}, {
                                rsmKey: "borders",
                                svgPath: r(t)
                            })
                        } : {};
                    }
                })["T.useMemo[l].t"](e.outline, e.borders, n);
                return {
                    geographies: C(u.geographies, n),
                    outline: t.outline,
                    borders: t.borders
                };
            }
        }["T.useMemo[l]"], [
            u,
            n
        ]);
        return {
            geographies: l.geographies,
            outline: l.outline,
            borders: l.borders
        };
    }
    O.displayName = "ComposableMap", O.propTypes = {
        width: c.default.number,
        height: c.default.number,
        projection: c.default.oneOfType([
            c.default.string,
            c.default.func
        ]),
        projectionConfig: c.default.object,
        className: c.default.string
    };
    var R = [
        "geography",
        "children",
        "parseGeographies",
        "className"
    ], Z = t.forwardRef(function(e, r) {
        var o = e.geography, n = e.children, a = e.parseGeographies, u = e.className, s = void 0 === u ? "" : u, l = v(e, R), c = t.useContext(x), f = c.path, d = c.projection, p = T({
            geography: o,
            parseGeographies: a
        }), m = p.geographies, y = p.outline, h = p.borders;
        return i.default.createElement("g", g({
            ref: r,
            className: "rsm-geographies ".concat(s)
        }, l), m && m.length > 0 && n({
            geographies: m,
            outline: y,
            borders: h,
            path: f,
            projection: d
        }));
    });
    Z.displayName = "Geographies", Z.propTypes = {
        geography: c.default.oneOfType([
            c.default.string,
            c.default.object,
            c.default.array
        ]),
        children: c.default.func,
        parseGeographies: c.default.func,
        className: c.default.string
    };
    var z = [
        "geography",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseDown",
        "onMouseUp",
        "onFocus",
        "onBlur",
        "style",
        "className"
    ], G = t.forwardRef(function(e, r) {
        var o = e.geography, n = e.onMouseEnter, a = e.onMouseLeave, u = e.onMouseDown, s = e.onMouseUp, l = e.onFocus, c = e.onBlur, f = e.style, d = void 0 === f ? {} : f, p = e.className, m = void 0 === p ? "" : p, y = v(e, z), b = h(t.useState(!1), 2), j = b[0], M = b[1], E = h(t.useState(!1), 2), x = E[0], k = E[1];
        return i.default.createElement("path", g({
            ref: r,
            tabIndex: "0",
            className: "rsm-geography ".concat(m),
            d: o.svgPath,
            onMouseEnter: function(e) {
                k(!0), n && n(e);
            },
            onMouseLeave: function(e) {
                k(!1), j && M(!1), a && a(e);
            },
            onFocus: function(e) {
                k(!0), l && l(e);
            },
            onBlur: function(e) {
                k(!1), j && M(!1), c && c(e);
            },
            onMouseDown: function(e) {
                M(!0), u && u(e);
            },
            onMouseUp: function(e) {
                M(!1), s && s(e);
            },
            style: d[j || x ? j ? "pressed" : "hover" : "default"]
        }, y));
    });
    G.displayName = "Geography", G.propTypes = {
        geography: c.default.object,
        onMouseEnter: c.default.func,
        onMouseLeave: c.default.func,
        onMouseDown: c.default.func,
        onMouseUp: c.default.func,
        onFocus: c.default.func,
        onBlur: c.default.func,
        style: c.default.object,
        className: c.default.string
    };
    var D = t.memo(G), L = [
        "fill",
        "stroke",
        "step",
        "className"
    ], A = t.forwardRef(function(e, r) {
        var n = e.fill, a = void 0 === n ? "transparent" : n, u = e.stroke, s = void 0 === u ? "currentcolor" : u, l = e.step, c = void 0 === l ? [
            10,
            10
        ] : l, f = e.className, d = void 0 === f ? "" : f, p = v(e, L), m = t.useContext(x).path;
        return i.default.createElement("path", g({
            ref: r,
            d: m(o.geoGraticule().step(c)()),
            fill: a,
            stroke: s,
            className: "rsm-graticule ".concat(d)
        }, p));
    });
    A.displayName = "Graticule", A.propTypes = {
        fill: c.default.string,
        stroke: c.default.string,
        step: c.default.array,
        className: c.default.string
    };
    var B = t.memo(A), F = [
        "value"
    ], U = t.createContext(), q = {
        x: 0,
        y: 0,
        k: 1,
        transformString: "translate(0 0) scale(1)"
    }, W = function(e) {
        var t = e.value, r = void 0 === t ? q : t, o = v(e, F);
        return i.default.createElement(U.Provider, g({
            value: r
        }, o));
    };
    W.propTypes = {
        x: c.default.number,
        y: c.default.number,
        k: c.default.number,
        transformString: c.default.string
    };
    function I(e) {
        var r = e.center, o = e.filterZoomEvent, n = e.onMoveStart, s = e.onMoveEnd, l = e.onMove, i = e.translateExtent, c = void 0 === i ? [
            [
                -1 / 0,
                -1 / 0
            ],
            [
                1 / 0,
                1 / 0
            ]
        ] : i, f = e.scaleExtent, d = void 0 === f ? [
            1,
            8
        ] : f, p = e.zoom, m = void 0 === p ? 1 : p, y = t.useContext(x), g = y.width, v = y.height, b = y.projection, j = h(r, 2), M = j[0], E = j[1], k = h(t.useState({
            x: 0,
            y: 0,
            k: 1
        }), 2), w = k[0], O = k[1], S = t.useRef({
            x: 0,
            y: 0,
            k: 1
        }), P = t.useRef(), C = t.useRef(), T = t.useRef(!1), R = h(c, 2), Z = R[0], z = R[1], G = h(Z, 2), D = G[0], L = G[1], A = h(z, 2), B = A[0], F = A[1], U = h(d, 2), q = U[0], W = U[1];
        return t.useEffect({
            "I.useEffect": function() {
                var e = u.select(P.current);
                var t = a.zoom().filter({
                    "I.useEffect.t": function(e) {
                        return o ? o(e) : !!e && !e.ctrlKey && !e.button;
                    }
                }["I.useEffect.t"]).scaleExtent([
                    q,
                    W
                ]).translateExtent([
                    [
                        D,
                        L
                    ],
                    [
                        B,
                        F
                    ]
                ]).on("start", {
                    "I.useEffect.t": function(e) {
                        n && !T.current && n({
                            coordinates: b.invert(N(g, v, e.transform)),
                            zoom: e.transform.k
                        }, e);
                    }
                }["I.useEffect.t"]).on("zoom", {
                    "I.useEffect.t": function(e) {
                        if (!T.current) {
                            var t = e.transform, r = e.sourceEvent;
                            O({
                                x: t.x,
                                y: t.y,
                                k: t.k,
                                dragging: r
                            }), l && l({
                                x: t.x,
                                y: t.y,
                                zoom: t.k,
                                dragging: r
                            }, e);
                        }
                    }
                }["I.useEffect.t"]).on("end", {
                    "I.useEffect.t": function(e) {
                        if (T.current) T.current = !1;
                        else {
                            var t = h(b.invert(N(g, v, e.transform)), 2), r = t[0], o = t[1];
                            S.current = {
                                x: r,
                                y: o,
                                k: e.transform.k
                            }, s && s({
                                coordinates: [
                                    r,
                                    o
                                ],
                                zoom: e.transform.k
                            }, e);
                        }
                    }
                }["I.useEffect.t"]);
                C.current = t, e.call(t);
            }
        }["I.useEffect"], [
            g,
            v,
            D,
            L,
            B,
            F,
            q,
            W,
            b,
            n,
            l,
            s,
            o
        ]), t.useEffect({
            "I.useEffect": function() {
                if (M !== S.current.x || E !== S.current.y || m !== S.current.k) {
                    var e = b([
                        M,
                        E
                    ]), t = e[0] * m, r = e[1] * m, o = u.select(P.current);
                    T.current = !0, o.call(C.current.transform, a.zoomIdentity.translate(g / 2 - t, v / 2 - r).scale(m)), O({
                        x: g / 2 - t,
                        y: v / 2 - r,
                        k: m
                    }), S.current = {
                        x: M,
                        y: E,
                        k: m
                    };
                }
            }
        }["I.useEffect"], [
            M,
            E,
            m,
            g,
            v,
            b
        ]), {
            mapRef: P,
            position: w,
            transformString: "translate(".concat(w.x, " ").concat(w.y, ") scale(").concat(w.k, ")")
        };
    }
    var K = [
        "center",
        "zoom",
        "minZoom",
        "maxZoom",
        "translateExtent",
        "filterZoomEvent",
        "onMoveStart",
        "onMove",
        "onMoveEnd",
        "className"
    ], _ = t.forwardRef(function(e, r) {
        var o = e.center, n = void 0 === o ? [
            0,
            0
        ] : o, a = e.zoom, u = void 0 === a ? 1 : a, s = e.minZoom, l = void 0 === s ? 1 : s, c = e.maxZoom, f = void 0 === c ? 8 : c, d = e.translateExtent, p = e.filterZoomEvent, m = e.onMoveStart, y = e.onMove, h = e.onMoveEnd, b = e.className, j = v(e, K), M = t.useContext(x), E = M.width, k = M.height, w = I({
            center: n,
            filterZoomEvent: p,
            onMoveStart: m,
            onMove: y,
            onMoveEnd: h,
            scaleExtent: [
                l,
                f
            ],
            translateExtent: d,
            zoom: u
        }), O = w.mapRef, N = w.transformString, S = w.position;
        return i.default.createElement(W, {
            value: {
                x: S.x,
                y: S.y,
                k: S.k,
                transformString: N
            }
        }, i.default.createElement("g", {
            ref: O
        }, i.default.createElement("rect", {
            width: E,
            height: k,
            fill: "transparent"
        }), i.default.createElement("g", g({
            ref: r,
            transform: N,
            className: "rsm-zoomable-group ".concat(b)
        }, j))));
    });
    _.displayName = "ZoomableGroup", _.propTypes = {
        center: c.default.array,
        zoom: c.default.number,
        minZoom: c.default.number,
        maxZoom: c.default.number,
        translateExtent: c.default.arrayOf(c.default.array),
        onMoveStart: c.default.func,
        onMove: c.default.func,
        onMoveEnd: c.default.func,
        className: c.default.string
    };
    var Q = [
        "id",
        "fill",
        "stroke",
        "strokeWidth",
        "className"
    ], $ = t.forwardRef(function(e, r) {
        var o = e.id, n = void 0 === o ? "rsm-sphere" : o, a = e.fill, u = void 0 === a ? "transparent" : a, s = e.stroke, l = void 0 === s ? "currentcolor" : s, c = e.strokeWidth, f = void 0 === c ? .5 : c, d = e.className, p = void 0 === d ? "" : d, m = v(e, Q), y = t.useContext(x).path, h = t.useMemo({
            "$.useMemo[h]": function() {
                return y({
                    type: "Sphere"
                });
            }
        }["$.useMemo[h]"], [
            y
        ]);
        return i.default.createElement(t.Fragment, null, i.default.createElement("defs", null, i.default.createElement("clipPath", {
            id: n
        }, i.default.createElement("path", {
            d: h
        }))), i.default.createElement("path", g({
            ref: r,
            d: h,
            fill: u,
            stroke: l,
            strokeWidth: f,
            style: {
                pointerEvents: "none"
            },
            className: "rsm-sphere ".concat(p)
        }, m)));
    });
    $.displayName = "Sphere", $.propTypes = {
        id: c.default.string,
        fill: c.default.string,
        stroke: c.default.string,
        strokeWidth: c.default.number,
        className: c.default.string
    };
    var H = t.memo($), J = [
        "coordinates",
        "children",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseDown",
        "onMouseUp",
        "onFocus",
        "onBlur",
        "style",
        "className"
    ], V = t.forwardRef(function(e, r) {
        var o = e.coordinates, n = e.children, a = e.onMouseEnter, u = e.onMouseLeave, s = e.onMouseDown, l = e.onMouseUp, c = e.onFocus, f = e.onBlur, d = e.style, p = void 0 === d ? {} : d, m = e.className, y = void 0 === m ? "" : m, b = v(e, J), j = t.useContext(x).projection, M = h(t.useState(!1), 2), E = M[0], k = M[1], w = h(t.useState(!1), 2), O = w[0], N = w[1], S = h(j(o), 2), P = S[0], C = S[1];
        return i.default.createElement("g", g({
            ref: r,
            transform: "translate(".concat(P, ", ").concat(C, ")"),
            className: "rsm-marker ".concat(y),
            onMouseEnter: function(e) {
                N(!0), a && a(e);
            },
            onMouseLeave: function(e) {
                N(!1), E && k(!1), u && u(e);
            },
            onFocus: function(e) {
                N(!0), c && c(e);
            },
            onBlur: function(e) {
                N(!1), E && k(!1), f && f(e);
            },
            onMouseDown: function(e) {
                k(!0), s && s(e);
            },
            onMouseUp: function(e) {
                k(!1), l && l(e);
            },
            style: p[E || O ? E ? "pressed" : "hover" : "default"]
        }, b), n);
    });
    V.displayName = "Marker", V.propTypes = {
        coordinates: c.default.array,
        children: c.default.oneOfType([
            c.default.node,
            c.default.arrayOf(c.default.node)
        ]),
        onMouseEnter: c.default.func,
        onMouseLeave: c.default.func,
        onMouseDown: c.default.func,
        onMouseUp: c.default.func,
        onFocus: c.default.func,
        onBlur: c.default.func,
        style: c.default.object,
        className: c.default.string
    };
    var X = [
        "from",
        "to",
        "coordinates",
        "stroke",
        "strokeWidth",
        "fill",
        "className"
    ], Y = t.forwardRef(function(e, r) {
        var o = e.from, n = void 0 === o ? [
            0,
            0
        ] : o, a = e.to, u = void 0 === a ? [
            0,
            0
        ] : a, s = e.coordinates, l = e.stroke, c = void 0 === l ? "currentcolor" : l, f = e.strokeWidth, d = void 0 === f ? 3 : f, p = e.fill, m = void 0 === p ? "transparent" : p, y = e.className, h = void 0 === y ? "" : y, b = v(e, X), j = t.useContext(x).path, M = {
            type: "LineString",
            coordinates: s || [
                n,
                u
            ]
        };
        return i.default.createElement("path", g({
            ref: r,
            d: j(M),
            className: "rsm-line ".concat(h),
            stroke: c,
            strokeWidth: d,
            fill: m
        }, b));
    });
    Y.displayName = "Line", Y.propTypes = {
        from: c.default.array,
        to: c.default.array,
        coordinates: c.default.array,
        stroke: c.default.string,
        strokeWidth: c.default.number,
        fill: c.default.string,
        className: c.default.string
    };
    var ee = [
        "subject",
        "children",
        "connectorProps",
        "dx",
        "dy",
        "curve",
        "className"
    ], te = t.forwardRef(function(e, r) {
        var o = e.subject, n = e.children, a = e.connectorProps, u = e.dx, s = void 0 === u ? 30 : u, l = e.dy, c = void 0 === l ? 30 : l, f = e.curve, d = void 0 === f ? 0 : f, p = e.className, m = void 0 === p ? "" : p, y = v(e, ee), b = h((0, t.useContext(x).projection)(o), 2), j = b[0], M = b[1], E = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5, o = Array.isArray(r) ? r : [
                r,
                r
            ], n = e / 2 * o[0], a = t / 2 * o[1];
            return "M".concat(0, ",", 0, " Q", -e / 2 - n, ",").concat(-t / 2 + a, " ").concat(-e, ",").concat(-t);
        }(s, c, d);
        return i.default.createElement("g", g({
            ref: r,
            transform: "translate(".concat(j + s, ", ").concat(M + c, ")"),
            className: "rsm-annotation ".concat(m)
        }, y), i.default.createElement("path", g({
            d: E,
            fill: "transparent",
            stroke: "#000"
        }, a)), n);
    });
    te.displayName = "Annotation", te.propTypes = {
        subject: c.default.array,
        children: c.default.oneOfType([
            c.default.node,
            c.default.arrayOf(c.default.node)
        ]),
        dx: c.default.number,
        dy: c.default.number,
        curve: c.default.number,
        connectorProps: c.default.object,
        className: c.default.string
    }, e.Annotation = te, e.ComposableMap = O, e.Geographies = Z, e.Geography = D, e.Graticule = B, e.Line = Y, e.MapContext = x, e.MapProvider = k, e.Marker = V, e.Sphere = H, e.ZoomPanContext = U, e.ZoomPanProvider = W, e.ZoomableGroup = _, e.useGeographies = T, e.useMapContext = function() {
        return t.useContext(x);
    }, e.useZoomPan = I, e.useZoomPanContext = function() {
        return t.useContext(U);
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    });
});
}),
]);

//# sourceMappingURL=9c41f_4b803f94._.js.map