/**
 * MarianBackground3D
 * ─────────────────────────────────────────────────────────────────────────────
 * Full-screen background video with a transparent Three.js canvas overlay
 * for ambient animations (light rays, crown of stars, lily flowers, rose
 * petals, floating doves, sparkles).
 */
import {
  useRef,
  useMemo,
  useEffect,
  useState,
  Suspense,
  Component,
  type ReactNode,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

// ─── video ────────────────────────────────────────────────────────────────────
import bgVideo from "../assets/Videos/backgroundVideo.webm";

// ─── Divine Light Rays ────────────────────────────────────────────────────────
function LightRays() {
  const groupRef = useRef<THREE.Group>(null!);
  const RAY = 16;

  const rayShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-0.06, 0);
    s.lineTo(0.06, 0);
    s.lineTo(0.32, 11);
    s.lineTo(-0.32, 11);
    s.closePath();
    return s;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.rotation.z = t * 0.01;
    groupRef.current.children.forEach((child, i) => {
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = 0.04 + Math.sin(t * 0.5 + i * 0.7) * 0.02;
    });
  });

  return (
    <group ref={groupRef} position={[0, 1.5, -1.8]}>
      {Array.from({ length: RAY }).map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i / RAY) * Math.PI * 2]}>
          <shapeGeometry args={[rayShape]} />
          <meshBasicMaterial
            color="#fde68a"
            transparent
            opacity={0.04}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// ─── Crown of 12 Stars ────────────────────────────────────────────────────────
function CrownOfStars() {
  const starShape = useMemo(() => {
    const s = new THREE.Shape();
    const outer = 0.1,
      inner = 0.042;
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const rr = i % 2 === 0 ? outer : inner;
      if (i === 0) s.moveTo(Math.cos(a) * rr, Math.sin(a) * rr);
      else s.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
    }
    s.closePath();
    return s;
  }, []);

  return (
    <group position={[0, 1.82, -0.1]}>
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const R = 1.78;
        return (
          <StarMesh
            key={i}
            idx={i}
            shape={starShape}
            basePos={
              new THREE.Vector3(
                Math.cos(angle) * R,
                Math.sin(angle) * R * 0.38,
                0,
              )
            }
          />
        );
      })}
    </group>
  );
}

function StarMesh({
  idx,
  shape,
  basePos,
}: {
  idx: number;
  shape: THREE.Shape;
  basePos: THREE.Vector3;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.position.x = basePos.x + Math.sin(t * 0.3 + idx * 0.8) * 0.03;
    ref.current.position.y = basePos.y + Math.cos(t * 0.25 + idx * 0.6) * 0.04;
    ref.current.rotation.z = t * 0.4 + idx;
    ref.current.scale.setScalar(0.8 + Math.sin(t * 1.2 + idx) * 0.2);
  });
  return (
    <mesh ref={ref} position={basePos}>
      <extrudeGeometry args={[shape, { depth: 0.015, bevelEnabled: false }]} />
      <meshStandardMaterial
        color="#fbbf24"
        emissive="#f59e0b"
        emissiveIntensity={1.0}
        metalness={0.5}
        roughness={0.1}
        transparent
        opacity={0.82}
      />
    </mesh>
  );
}

// ─── Rose Petal ───────────────────────────────────────────────────────────────
interface PetalData {
  pos: THREE.Vector3;
  rot: THREE.Euler;
  speed: number;
  drift: number;
  phase: number;
}

function RosePetals() {
  const COUNT = 22;
  const groupRef = useRef<THREE.Group>(null!);

  const petalShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0.08, 0.06, 0.14, 0.18, 0, 0.32);
    s.bezierCurveTo(-0.14, 0.18, -0.08, 0.06, 0, 0);
    return s;
  }, []);

  const petals = useMemo<PetalData[]>(() => {
    const list: PetalData[] = [];
    for (let i = 0; i < COUNT; i++) {
      list.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10 + 2,
          (Math.random() - 0.5) * 6 - 2,
        ),
        rot: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ),
        speed: 0.12 + Math.random() * 0.18,
        drift: (Math.random() - 0.5) * 0.6,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return list;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const p = petals[i];
      const mesh = child as THREE.Mesh;
      // drift downward and sideways, wrap when off-screen
      let newY = p.pos.y - p.speed * 0.012;
      if (newY < -6) newY = 7;
      p.pos.y = newY;
      mesh.position.y = newY;
      mesh.position.x = p.pos.x + Math.sin(t * 0.3 + p.phase) * 0.4;
      mesh.position.z = p.pos.z;
      mesh.rotation.x = p.rot.x + t * 0.18;
      mesh.rotation.y = p.rot.y + t * 0.12;
      mesh.rotation.z = p.rot.z + t * 0.22 + Math.sin(t * 0.4 + p.phase) * 0.15;
    });
  });

  return (
    <group ref={groupRef}>
      {petals.map((p, i) => (
        <mesh key={i} position={p.pos} rotation={p.rot}>
          <shapeGeometry args={[petalShape]} />
          <meshStandardMaterial
            color="#fda4af"
            emissive="#fb7185"
            emissiveIntensity={0.22}
            side={THREE.DoubleSide}
            transparent
            opacity={0.55 + Math.random() * 0.3}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// ─── Lily Petal ───────────────────────────────────────────────────────────────
function LilyPetal({ idx, total }: { idx: number; total: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const angle = (idx / total) * Math.PI * 2;
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0.05, 0.12, 0.12, 0.3, 0, 0.54);
    s.bezierCurveTo(-0.12, 0.3, -0.05, 0.12, 0, 0);
    return s;
  }, []);
  useFrame(({ clock }) => {
    if (ref.current)
      ref.current.rotation.z =
        Math.sin(clock.getElapsedTime() * 0.4 + idx) * 0.07;
  });
  return (
    <mesh ref={ref} rotation={[0, 0, angle]}>
      <shapeGeometry args={[shape]} />
      <meshStandardMaterial
        color="#fefce8"
        emissive="#fef9c3"
        emissiveIntensity={0.22}
        side={THREE.DoubleSide}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function LilyFlower({
  position,
  scale = 1,
  delay = 0,
}: {
  position: [number, number, number];
  scale?: number;
  delay?: number;
}) {
  const ref = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + delay;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t * 0.28) * 0.18;
      ref.current.rotation.y = t * 0.07;
      ref.current.rotation.z = Math.sin(t * 0.18) * 0.06;
    }
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      {Array.from({ length: 6 }).map((_, i) => (
        <LilyPetal key={i} idx={i} total={6} />
      ))}
      <mesh position={[0, 0.07, 0.01]}>
        <circleGeometry args={[0.055, 20]} />
        <meshStandardMaterial
          color="#d97706"
          emissive="#d97706"
          emissiveIntensity={0.9}
        />
      </mesh>
    </group>
  );
}

// ─── Floating Doves (simple geometric) ───────────────────────────────────────
function Dove({
  initPos,
  speed,
  phase,
}: {
  initPos: THREE.Vector3;
  speed: number;
  phase: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const wingRef1 = useRef<THREE.Mesh>(null!);
  const wingRef2 = useRef<THREE.Mesh>(null!);

  const wingShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0.12, 0.08, 0.28, 0.06, 0.32, 0);
    s.bezierCurveTo(0.22, -0.04, 0.08, -0.03, 0, 0);
    return s;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + phase;
    if (!groupRef.current) return;
    // Glide across the scene
    groupRef.current.position.x = initPos.x + Math.sin(t * speed * 0.4) * 3.5;
    groupRef.current.position.y = initPos.y + Math.sin(t * speed * 0.25) * 0.5;
    groupRef.current.position.z = initPos.z;
    groupRef.current.rotation.y = Math.sin(t * speed * 0.4) * 0.3;
    // Flap wings
    const flap = Math.sin(t * 3.5) * 0.35;
    if (wingRef1.current) wingRef1.current.rotation.z = flap;
    if (wingRef2.current) wingRef2.current.rotation.z = -flap;
  });

  return (
    <group ref={groupRef} position={initPos} scale={0.7}>
      {/* Body */}
      <mesh>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial
          color="#f0f4ff"
          emissive="#dbeafe"
          emissiveIntensity={0.3}
          transparent
          opacity={0.72}
        />
      </mesh>
      {/* Wings */}
      <mesh ref={wingRef1} position={[0.02, 0.02, 0]}>
        <shapeGeometry args={[wingShape]} />
        <meshStandardMaterial
          color="#e0eaff"
          emissive="#bfdbfe"
          emissiveIntensity={0.25}
          side={THREE.DoubleSide}
          transparent
          opacity={0.65}
        />
      </mesh>
      <mesh ref={wingRef2} position={[-0.02, 0.02, 0]} scale={[-1, 1, 1]}>
        <shapeGeometry args={[wingShape]} />
        <meshStandardMaterial
          color="#e0eaff"
          emissive="#bfdbfe"
          emissiveIntensity={0.25}
          side={THREE.DoubleSide}
          transparent
          opacity={0.65}
        />
      </mesh>
    </group>
  );
}

function FloatingDoves() {
  const doves = useMemo(
    () => [
      { initPos: new THREE.Vector3(-6, 1.5, -3), speed: 0.55, phase: 0 },
      { initPos: new THREE.Vector3(5, 0.8, -4), speed: 0.42, phase: 2.1 },
      { initPos: new THREE.Vector3(-4, -0.5, -5), speed: 0.6, phase: 4.3 },
    ],
    [],
  );
  return (
    <>
      {doves.map((d, i) => (
        <Dove key={i} initPos={d.initPos} speed={d.speed} phase={d.phase} />
      ))}
    </>
  );
}

// ─── Scene ────────────────────────────────────────────────────────────────────
function MarianScene() {
  return (
    <>
      <ambientLight color="#e8f0ff" intensity={1.1} />
      <directionalLight position={[2, 5, 4]} color="#fff8e8" intensity={1.8} />
      <pointLight
        position={[0, 1, 2]}
        color="#fbbf24"
        intensity={0.7}
        distance={9}
        decay={2}
      />
      <pointLight
        position={[-3, 0, 1]}
        color="#93c5fd"
        intensity={0.4}
        distance={8}
        decay={2}
      />
      <pointLight
        position={[3, 0, 1]}
        color="#93c5fd"
        intensity={0.4}
        distance={8}
        decay={2}
      />

      {/* ── Far back: light rays ── */}
      <LightRays />

      {/* ── Crown of 12 stars ── */}
      <CrownOfStars />

      {/* ── Lily blossoms on the sides ── */}
      <LilyFlower position={[-5.5, 0.8, -3.5]} scale={1.1} delay={0} />
      <LilyFlower position={[5.2, 0.4, -3.0]} scale={0.95} delay={2.5} />
      <LilyFlower position={[-4.2, -1.2, -4.5]} scale={0.75} delay={5} />
      <LilyFlower position={[4.8, 2.2, -5.0]} scale={0.7} delay={7} />
      <LilyFlower position={[-6.0, 2.8, -6.0]} scale={0.6} delay={3} />
      <LilyFlower position={[6.2, -0.8, -6.0]} scale={0.6} delay={8} />

      {/* ── Drifting rose petals ── */}
      <RosePetals />

      {/* ── Gliding doves ── */}
      <FloatingDoves />

      {/* ── Gold sparkle particles ── */}
      <Sparkles
        count={80}
        scale={[14, 10, 5]}
        size={1.1}
        speed={0.15}
        opacity={0.3}
        color="#fbbf24"
        noise={0.5}
      />
      <Sparkles
        count={40}
        scale={[10, 8, 3]}
        size={0.7}
        speed={0.22}
        opacity={0.18}
        color="#93c5fd"
        noise={0.3}
      />
    </>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function MarianBackground3D() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const videoSize = isMobile ? "60%" : "80%";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let smoothedTime = 0;
    let lastWrittenTime = -1;
    let lastTimestamp = performance.now();
    let rafId: number;

    // Only seek when change ≥ 1 frame at 25 fps — avoids constant decoding on mobile
    const MIN_SEEK_DELTA = 1 / 25;

    const updateTarget = () => {
      if (!video.duration) return;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const fraction = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      targetTime = fraction * video.duration;
    };

    // fastSeek() snaps to nearest keyframe — far cheaper on mobile than currentTime=
    const seekTo = (t: number) => {
      if (typeof (video as any).fastSeek === "function") {
        (video as any).fastSeek(t);
      } else {
        video.currentTime = t;
      }
    };

    const animate = (timestamp: number) => {
      const dt = Math.min(timestamp - lastTimestamp, 50);
      lastTimestamp = timestamp;

      if (video.duration) {
        const alpha = 1 - Math.exp((-2.5 * dt) / 1000);
        smoothedTime += (targetTime - smoothedTime) * alpha;
        smoothedTime = Math.max(0, Math.min(video.duration, smoothedTime));

        // Skip write if change is sub-frame — reduces decode thrash on mobile
        if (Math.abs(smoothedTime - lastWrittenTime) >= MIN_SEEK_DELTA) {
          seekTo(smoothedTime);
          lastWrittenTime = smoothedTime;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    // touchmove reads scrollY before the compositor updates it on iOS —
    // causes jumps when touch point changes. scroll alone is correct on all devices.
    window.addEventListener("scroll", updateTarget, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      cancelAnimationFrame(rafId);
    };
  }, []);

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
        preload="auto"
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
          maskImage:
            "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.92) 18%, rgba(0,0,0,0.65) 34%, rgba(0,0,0,0.28) 48%, rgba(0,0,0,0.06) 58%, transparent 63%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, rgba(0,0,0,0.92) 18%, rgba(0,0,0,0.65) 34%, rgba(0,0,0,0.28) 48%, rgba(0,0,0,0.06) 58%, transparent 63%)",
        }}
      />

      {/* Transparent 3D animation overlay */}
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, -0.3, 8.5], fov: 54, near: 0.1, far: 80 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <Suspense fallback={null}>
          <MarianScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
