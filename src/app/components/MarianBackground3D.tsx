/**
 * MarianBackground3D
 * ─────────────────────────────────────────────────────────────────────────────
 * Full-screen background video with a transparent Canvas 2D overlay
 * (petals, doves, sparkles). Zero external dependencies — pure browser APIs.
 */
import { useRef, useEffect, useState } from "react";

import bgVideo from "../assets/Videos/backgroundVideo.webm";

// ─── device capability detection ───────────────────────────────────────────────
function useDeviceTier() {
  const [tier, setTier] = useState<"full" | "lite" | "none">(() => {
    if (typeof window === "undefined") return "lite";
    return detectTier();
  });

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const recompute = () => setTier(detectTier());
    mql.addEventListener("change", recompute);
    return () => mql.removeEventListener("change", recompute);
  }, []);

  return tier;
}

function detectTier(): "full" | "lite" | "none" {
  if (typeof window === "undefined") return "lite";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return "none";

  const isNarrow = window.matchMedia("(max-width: 767px)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const cores = navigator.hardwareConcurrency || 4;
  const lowMemory =
    "deviceMemory" in navigator && (navigator as any).deviceMemory <= 4;

  if (isNarrow || isCoarsePointer || cores <= 4 || lowMemory) return "lite";
  return "full";
}

// ─── Canvas 2D scene builders ──────────────────────────────────────────────────
// Each builder captures its own state and returns a per-frame draw function.
type DrawFn = (
  ctx: CanvasRenderingContext2D,
  elapsed: number,
  delta: number,
  w: number,
  h: number,
) => void;

function buildLightRays(count: number): DrawFn {
  return (ctx, elapsed, _delta, w, h) => {
    const cx = w * 0.5;
    const cy = h * 0.3;
    const rayLength = Math.sqrt(w * w + h * h);
    const baseOpacity = 0.045 + Math.sin(elapsed * 0.5) * 0.015;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(elapsed * 0.01);
    for (let i = 0; i < count; i++) {
      ctx.save();
      ctx.rotate((i / count) * Math.PI * 2);
      const tipW = rayLength * 0.058;
      const baseW = rayLength * 0.011;
      ctx.beginPath();
      ctx.moveTo(-baseW, 0);
      ctx.lineTo(baseW, 0);
      ctx.lineTo(tipW, -rayLength);
      ctx.lineTo(-tipW, -rayLength);
      ctx.closePath();
      ctx.fillStyle = `rgba(253,230,138,${baseOpacity.toFixed(3)})`;
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
  };
}

interface PetalState {
  nx: number; // normalized x [-0.9, 0.9] from center
  ny: number; // normalized y [-0.5, 0.5] from center
  speed: number;
  phase: number;
  angle: number;
  rotSpeed: number;
  sway: number;
  size: number; // fraction of min(w, h)
}

function buildRosePetals(count: number): DrawFn {
  const petals: PetalState[] = Array.from({ length: count }, () => ({
    nx: (Math.random() - 0.5) * 1.8,
    ny: (Math.random() - 0.5) * 1.0,
    speed: 0.012 + Math.random() * 0.018,
    phase: Math.random() * Math.PI * 2,
    angle: Math.random() * Math.PI * 2,
    rotSpeed: 0.18 + Math.random() * 0.22,
    sway: 0.022 + Math.random() * 0.02,
    size: 0.032 + Math.random() * 0.018,
  }));

  return (ctx, elapsed, delta, w, h) => {
    const dt = Math.min(delta, 1 / 20);
    ctx.save();
    ctx.translate(w * 0.5, h * 0.5);

    for (const p of petals) {
      p.ny += p.speed * dt;
      if (p.ny > 0.6) p.ny = -0.6;

      const px = p.nx * w + Math.sin(elapsed * 0.3 + p.phase) * p.sway * w;
      const py = p.ny * h;
      const s = p.size * Math.min(w, h);
      const scaleX = Math.cos(elapsed * 0.18 + p.phase);
      const angle =
        p.angle +
        elapsed * p.rotSpeed +
        Math.sin(elapsed * 0.4 + p.phase) * 0.15;

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(angle);
      ctx.scale(scaleX, 1);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(s * 0.25, s * 0.19, s * 0.44, s * 0.56, 0, s);
      ctx.bezierCurveTo(-s * 0.44, s * 0.56, -s * 0.25, s * 0.19, 0, 0);
      ctx.closePath();
      ctx.fillStyle = "rgba(253,164,175,0.6)";
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
  };
}

// nx, ny: -1 to +1 (right/up) mapped to ~42% of canvas half-dimension
function buildLilyFlower(
  nx: number,
  ny: number,
  scale: number,
  delay: number,
): DrawFn {
  return (ctx, elapsed, _delta, w, h) => {
    const t = elapsed + delay;
    const cx = w * 0.5 + nx * w * 0.42;
    const cy = h * 0.5 - ny * h * 0.42 + Math.sin(t * 0.28) * h * 0.018;
    const size = Math.min(w, h) * 0.065 * scale;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(t * 0.07);
    ctx.globalAlpha = 0.85;

    for (let i = 0; i < 6; i++) {
      ctx.save();
      ctx.rotate((i / 6) * Math.PI * 2 + Math.sin(t * 0.18) * 0.06);
      const s = size;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(s * 0.093, s * 0.222, s * 0.222, s * 0.556, 0, s);
      ctx.bezierCurveTo(-s * 0.222, s * 0.556, -s * 0.093, s * 0.222, 0, 0);
      ctx.closePath();
      ctx.fillStyle = "rgba(254,252,232,0.85)";
      ctx.fill();
      ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(0, size * 0.13, size * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(217,119,6,0.9)";
    ctx.fill();

    ctx.restore();
  };
}

function buildDove(
  nx: number,
  ny: number,
  speed: number,
  phase: number,
): DrawFn {
  return (ctx, elapsed, _delta, w, h) => {
    const t = elapsed + phase;
    const initX = w * 0.5 + nx * w * 0.42;
    const initY = h * 0.5 - ny * h * 0.42;
    const cx = initX + Math.sin(t * speed * 0.4) * w * 0.19;
    const cy = initY + Math.sin(t * speed * 0.25) * h * 0.05;
    const size = Math.min(w, h) * 0.04;
    const flap = Math.sin(t * 3.5) * 0.35;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.sin(t * speed * 0.4) * 0.3);
    ctx.globalAlpha = 0.72;

    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.55, size * 0.38, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(240,244,255,0.72)";
    ctx.fill();

    for (const flip of [1, -1] as const) {
      ctx.save();
      ctx.scale(flip, 1);
      ctx.rotate(flap);
      ctx.beginPath();
      ctx.moveTo(size * 0.1, 0);
      ctx.bezierCurveTo(
        size * 0.48,
        size * 0.22,
        size * 1.1,
        size * 0.17,
        size * 1.28,
        0,
      );
      ctx.bezierCurveTo(
        size * 0.88,
        -size * 0.11,
        size * 0.32,
        -size * 0.08,
        size * 0.1,
        0,
      );
      ctx.closePath();
      ctx.fillStyle = "rgba(224,234,255,0.65)";
      ctx.fill();
      ctx.restore();
    }

    ctx.restore();
  };
}

interface SparkleState {
  x: number; // 0–1 fraction of canvas width
  y: number; // 0–1 fraction of canvas height
  vx: number; // fraction/sec
  vy: number;
}

function buildSparkles(count: number, opacity: number): DrawFn {
  const particles: SparkleState[] = Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.015,
    vy: (Math.random() - 0.5) * 0.015,
  }));

  return (ctx, elapsed, delta, w, h) => {
    const dt = Math.min(delta, 1 / 20);
    const alpha = opacity * (0.85 + Math.sin(elapsed * 1.5) * 0.15);
    const r = Math.min(w, h) * 0.004;

    ctx.save();
    ctx.fillStyle = `rgba(251,191,36,${alpha.toFixed(3)})`;
    for (const p of particles) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      if (p.x < 0 || p.x > 1) p.vx *= -1;
      if (p.y < 0 || p.y > 1) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };
}

// ─── Canvas 2D overlay component ──────────────────────────────────────────────
function CanvasOverlay({ tier }: { tier: "full" | "lite" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = tier === "lite";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    // Positions mirror the original Three.js world coords mapped to [-1, 1] screen space
    const draws: DrawFn[] = [];
    if (!isMobile) {
      draws.push(buildLightRays(16));
      draws.push(buildLilyFlower(-0.71, 0.18, 1.1, 0));
      draws.push(buildLilyFlower(0.68, 0.09, 0.95, 2.5));
      draws.push(buildLilyFlower(-0.55, -0.28, 0.75, 5));
      draws.push(buildLilyFlower(0.62, 0.51, 0.7, 7));
      draws.push(buildRosePetals(22));
      draws.push(buildDove(-0.78, 0.35, 0.55, 0));
      draws.push(buildDove(0.65, 0.18, 0.42, 2.1));
      draws.push(buildSparkles(60, 0.3));
    } else {
      draws.push(buildRosePetals(8));
      draws.push(buildSparkles(24, 0.25));
    }

    window.addEventListener("resize", setSize);

    const startTime = performance.now();
    let lastTime = startTime;
    let rafId: number;

    const animate = (timestamp: number) => {
      rafId = requestAnimationFrame(animate);
      const elapsed = (timestamp - startTime) / 1000;
      const delta = Math.min((timestamp - lastTime) / 1000, 0.05);
      lastTime = timestamp;

      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      for (const draw of draws) draw(ctx, elapsed, delta, w, h);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setSize);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    />
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function MarianBackground3D() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const tier = useDeviceTier();
  const isMobileLayout = tier === "lite";

  const videoSize = isMobileLayout ? "60%" : "80%";

  // ── Scroll-scrubbed video ──
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isMobileLayout) {
      const showLastFrame = () => {
        const duration = Number.isFinite(video.duration) ? video.duration : 0;
        // Use max(duration - tiny offset, 0) so browser can decode the final frame.
        video.currentTime = Math.max(duration - 0.001, 0);
        video.pause();
      };

      if (video.readyState >= 1) {
        showLastFrame();
      } else {
        video.addEventListener("loadedmetadata", showLastFrame);
      }

      return () => {
        video.removeEventListener("loadedmetadata", showLastFrame);
      };
    }

    let targetProgress = 0;
    let smoothedProgress = 0;
    let lastTimestamp = performance.now();
    let duration = 0;
    let rafId: number;

    // Gate seeks on the previous seek actually finishing, instead of a fixed
    // timer. Firing `currentTime =` again before the browser has finished
    // decoding the last seek is what causes the "frame by frame" stepping —
    // seeks get queued/dropped rather than smoothly scrubbed.
    let isSeeking = false;
    let seekSafetyTimer: ReturnType<typeof setTimeout> | null = null;

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

    const syncDuration = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
    };

    const updateTarget = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const fraction = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      targetProgress = clamp01(fraction);
    };

    const handleSeeking = () => {
      isSeeking = true;
    };

    const handleSeeked = () => {
      isSeeking = false;
      if (seekSafetyTimer) {
        clearTimeout(seekSafetyTimer);
        seekSafetyTimer = null;
      }
    };

    const requestSeek = (time: number) => {
      video.currentTime = time;
      isSeeking = true;
      // Safety net: some browsers/codecs occasionally don't fire 'seeked'
      // for very small seeks. Don't let that permanently stall scrubbing.
      if (seekSafetyTimer) clearTimeout(seekSafetyTimer);
      seekSafetyTimer = setTimeout(() => {
        isSeeking = false;
      }, 150);
    };

    const animate = (timestamp: number) => {
      const dt = Math.min(timestamp - lastTimestamp, 50);
      lastTimestamp = timestamp;

      if (duration > 0 && video.readyState >= 2 && !document.hidden) {
        const alpha = 1 - Math.exp((-14 * dt) / 1000);
        smoothedProgress += (targetProgress - smoothedProgress) * alpha;
        smoothedProgress = clamp01(smoothedProgress);
        const desiredTime = smoothedProgress * duration;

        if (!isSeeking && Math.abs(desiredTime - video.currentTime) > 0.008) {
          requestSeek(desiredTime);
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    const handleLoadedMetadata = () => {
      syncDuration();
      updateTarget();
      smoothedProgress = targetProgress;
      if (duration > 0) {
        video.currentTime = smoothedProgress * duration;
      }
    };

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget, { passive: true });
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeking", handleSeeking);
    video.addEventListener("seeked", handleSeeked);

    syncDuration();
    updateTarget();
    if (duration > 0) {
      smoothedProgress = targetProgress;
      video.currentTime = smoothedProgress * duration;
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeking", handleSeeking);
      video.removeEventListener("seeked", handleSeeked);
      if (seekSafetyTimer) clearTimeout(seekSafetyTimer);
      cancelAnimationFrame(rafId);
    };
  }, [isMobileLayout]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        filter: "blur(1px)",
        transform: "scale(1.01)",
      }}
    >
      {/* Full-screen background video — scroll-scrubbed, no borders */}
      <video
        ref={videoRef}
        muted
        playsInline
        disablePictureInPicture
        preload={isMobileLayout ? "metadata" : "auto"}
        src={bgVideo as string}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: videoSize,
          height: videoSize,
          objectFit: "cover",
          display: "block",
          opacity: 0.38,
          willChange: "transform, opacity",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.92) 18%, rgba(0,0,0,0.65) 34%, rgba(0,0,0,0.28) 48%, rgba(0,0,0,0.06) 58%, transparent 63%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.92) 18%, rgba(0,0,0,0.65) 34%, rgba(0,0,0,0.28) 48%, rgba(0,0,0,0.06) 58%, transparent 63%)",
        }}
      />

      {/* Keep mobile static: no animated canvas overlay. */}
      {tier === "full" && <CanvasOverlay tier={tier} />}
    </div>
  );
}
