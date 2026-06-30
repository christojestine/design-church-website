/**
 * MarianBackground3D
 * ─────────────────────────────────────────────────────────────────────────────
 * Transparent Three.js canvas overlaid on the existing light CSS background.
 * Shows the watercolour image of Our Lady at centre with a full, animated
 * 5-decade rosary (traditional bead layout + cross tail) orbiting her.
 */
import { useRef, useMemo, Suspense, Component, type ReactNode } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";

// ─── image ────────────────────────────────────────────────────────────────────
import maryJpg from "../assets/images/mary.jpg";

// ─── constants ────────────────────────────────────────────────────────────────
const OA = 1.9; // ellipse x semi-axis
const OB = 2.55; // ellipse y semi-axis

const SR = 0.055; // small (Hail Mary) bead radius
const LR = 0.092; // large (Our Father) bead radius

const C_SMALL = new THREE.Color("#7a8090");
const C_LARGE = new THREE.Color("#4a5060");
const C_CORD = new THREE.Color("#9aa0ae");
const C_CROSS = new THREE.Color("#8a9099");
const C_HALO = new THREE.Color("#f5c842");

// ─── helpers ──────────────────────────────────────────────────────────────────
function ellipsePos(angle: number, z = 0): THREE.Vector3 {
  return new THREE.Vector3(OA * Math.cos(angle), OB * Math.sin(angle), z);
}

function buildLoopPattern(): ("L" | "S")[] {
  const arr: ("L" | "S")[] = [];
  for (let d = 0; d < 5; d++) {
    arr.push("L");
    for (let s = 0; s < 10; s++) arr.push("S");
  }
  return arr; // 55 beads
}

// ─── Cord ─────────────────────────────────────────────────────────────────────
function Cord({
  points,
  closed,
}: {
  points: THREE.Vector3[];
  closed?: boolean;
}) {
  const lineObj = useMemo(() => {
    const pts = closed ? [...points, points[0].clone()] : points;
    const geom = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
      color: C_CORD,
      transparent: true,
      opacity: 0.55,
    });
    return new THREE.Line(geom, mat);
  }, [points, closed]);
  return <primitive object={lineObj} />;
}

// ─── Instanced small beads ────────────────────────────────────────────────────
function SmallBeads({ positions }: { positions: THREE.Vector3[] }) {
  const ref = useRef<THREE.InstancedMesh>(null!);
  const count = positions.length;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      dummy.position.copy(positions[i]);
      dummy.scale.setScalar(1 + Math.sin(t * 1.4 + i * 0.35) * 0.04);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[SR, 14, 14]} />
      <meshStandardMaterial color={C_SMALL} metalness={0.55} roughness={0.32} />
    </instancedMesh>
  );
}

// ─── Large bead ───────────────────────────────────────────────────────────────
function LargeBead({ position }: { position: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.4;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[LR, 18, 18]} />
      <meshStandardMaterial color={C_LARGE} metalness={0.65} roughness={0.22} />
    </mesh>
  );
}

// ─── Crucifix ─────────────────────────────────────────────────────────────────
function Crucifix({ position }: { position: THREE.Vector3 }) {
  const crossShape = useMemo(() => {
    const s = new THREE.Shape();
    const w = 0.065,
      h = 0.36,
      aw = 0.058,
      ax = 0.22,
      top = h * 0.18;
    s.moveTo(-w / 2, -h / 2);
    s.lineTo(w / 2, -h / 2);
    s.lineTo(w / 2, top - aw / 2);
    s.lineTo(ax / 2, top - aw / 2);
    s.lineTo(ax / 2, top + aw / 2);
    s.lineTo(w / 2, top + aw / 2);
    s.lineTo(w / 2, h / 2);
    s.lineTo(-w / 2, h / 2);
    s.lineTo(-w / 2, top + aw / 2);
    s.lineTo(-ax / 2, top + aw / 2);
    s.lineTo(-ax / 2, top - aw / 2);
    s.lineTo(-w / 2, top - aw / 2);
    s.closePath();
    return s;
  }, []);

  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current)
      ref.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.06;
  });

  return (
    <mesh ref={ref} position={position}>
      <extrudeGeometry
        args={[
          crossShape,
          {
            depth: 0.03,
            bevelEnabled: true,
            bevelSize: 0.008,
            bevelThickness: 0.006,
            bevelSegments: 3,
          },
        ]}
      />
      <meshStandardMaterial
        color={C_CROSS}
        metalness={0.7}
        roughness={0.2}
        emissive={C_CROSS}
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}

// ─── Full Rosary ──────────────────────────────────────────────────────────────
function Rosary() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 0.28) * 0.045;
      groupRef.current.rotation.x = Math.sin(t * 0.18) * 0.018;
    }
  });

  const loopPattern = useMemo(() => buildLoopPattern(), []);
  const N = loopPattern.length; // 55

  // Bead positions on the oval — start at 6 o'clock (bottom = junction)
  const loopPositions = useMemo(
    () =>
      loopPattern.map((_, i) =>
        ellipsePos(Math.PI / 2 + (i / N) * Math.PI * 2),
      ),
    [loopPattern, N],
  );

  const smallLoopPos = useMemo(
    () => loopPositions.filter((_, i) => loopPattern[i] === "S"),
    [loopPositions, loopPattern],
  );
  const largeLoopPos = useMemo(
    () => loopPositions.filter((_, i) => loopPattern[i] === "L"),
    [loopPositions, loopPattern],
  );

  // Tail (hangs from junction at bottom of oval)
  const jY = -OB;
  const gap = 0.19;
  const tailDefs: { type: "L" | "S"; y: number }[] = [
    { type: "S", y: jY - gap * 0.8 },
    { type: "L", y: jY - gap * 1.9 },
    { type: "S", y: jY - gap * 3.1 },
    { type: "S", y: jY - gap * 4.0 },
    { type: "S", y: jY - gap * 4.9 },
    { type: "L", y: jY - gap * 6.1 },
  ];
  const crossY = jY - gap * 8.0;

  const tailSmallPos = useMemo(
    () =>
      tailDefs
        .filter((b) => b.type === "S")
        .map((b) => new THREE.Vector3(0, b.y, 0)),
    [],
  );
  const tailLargePos = useMemo(
    () =>
      tailDefs
        .filter((b) => b.type === "L")
        .map((b) => new THREE.Vector3(0, b.y, 0)),
    [],
  );

  const loopCordPts = useMemo(() => [...loopPositions], [loopPositions]);
  const tailCordPts = useMemo(
    () => [
      new THREE.Vector3(0, jY, 0),
      ...tailDefs.map((b) => new THREE.Vector3(0, b.y, 0)),
      new THREE.Vector3(0, crossY + 0.16, 0),
    ],
    [],
  );

  const allSmall = useMemo(
    () => [...smallLoopPos, ...tailSmallPos],
    [smallLoopPos, tailSmallPos],
  );

  return (
    <group ref={groupRef} position={[0, 0.18, 0.15]}>
      <Cord points={loopCordPts} closed />
      <Cord points={tailCordPts} />
      <SmallBeads positions={allSmall} />
      {largeLoopPos.map((p, i) => (
        <LargeBead key={`ll${i}`} position={p} />
      ))}
      {tailLargePos.map((p, i) => (
        <LargeBead key={`lt${i}`} position={p} />
      ))}
      <Crucifix position={new THREE.Vector3(0, crossY, 0)} />
    </group>
  );
}

// ─── Very soft warm glow behind image (no visible disc edge) ─────────────────
function GoldenAura() {
  const glowMap = useMemo(() => {
    const size = 256;
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const ctx = c.getContext("2d")!;
    const grad = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    grad.addColorStop(0.0, "rgba(245,200,66,0.55)");
    grad.addColorStop(0.45, "rgba(245,200,66,0.20)");
    grad.addColorStop(0.75, "rgba(245,200,66,0.04)");
    grad.addColorStop(1.0, "rgba(245,200,66,0.00)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(c);
  }, []);

  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current)
      (ref.current.material as THREE.MeshBasicMaterial).opacity =
        0.65 + Math.sin(clock.getElapsedTime() * 0.5) * 0.12;
  });
  return (
    <mesh ref={ref} position={[0, 0.22, -0.52]}>
      <planeGeometry args={[4.2, 4.2]} />
      <meshBasicMaterial
        map={glowMap}
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </mesh>
  );
}

// ─── Mary image — edge-fade so it dissolves into the background ───────────────
function MaryImage() {
  const texture = useLoader(TextureLoader, maryJpg as string);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Radial alpha map: white (opaque) at centre → black (transparent) at edges
  const alphaMap = useMemo(() => {
    const size = 512;
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, size, size);

    // Oval-shaped fade: squeeze x so sides fade faster than top/bottom
    ctx.save();
    ctx.translate(size / 2, size / 2);
    ctx.scale(0.82, 1);
    const grad = ctx.createRadialGradient(0, 0, size * 0.12, 0, 0, size * 0.5);
    grad.addColorStop(0.0, "#ffffff");
    grad.addColorStop(0.42, "#ffffff");
    grad.addColorStop(0.62, "rgba(255,255,255,0.80)");
    grad.addColorStop(0.78, "rgba(255,255,255,0.35)");
    grad.addColorStop(0.9, "rgba(255,255,255,0.06)");
    grad.addColorStop(1.0, "#000000");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    return new THREE.CanvasTexture(c);
  }, []);

  return (
    <mesh position={[0, 0.22, -0.18]}>
      <planeGeometry args={[3.1, 3.78]} />
      <meshBasicMaterial
        map={texture}
        alphaMap={alphaMap}
        transparent
        opacity={0.95}
        toneMapped={false}
        depthWrite={false}
      />
    </mesh>
  );
}

// ─── Error boundary ───────────────────────────────────────────────────────────
interface EBState {
  err: boolean;
}
class ImageEB extends Component<{ children: ReactNode }, EBState> {
  state: EBState = { err: false };
  static getDerivedStateFromError() {
    return { err: true };
  }
  render() {
    return this.state.err ? null : this.props.children;
  }
}

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

      {/* ── Mary image + halo ── */}
      <GoldenAura />
      <ImageEB>
        <Suspense fallback={null}>
          <MaryImage />
        </Suspense>
      </ImageEB>

      {/* ── Crown of 12 stars above Mary ── */}
      <CrownOfStars />

      {/* ── Rosary ── */}
      <Rosary />

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
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, -0.3, 8.5], fov: 54, near: 0.1, far: 80 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <Suspense fallback={null}>
          <MarianScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
