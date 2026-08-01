"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import type { Group } from "three";

export function ThreeDBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[660px] opacity-55 sm:opacity-70">
      <Canvas
        camera={{ position: [5.1, 4.4, 9.4], fov: 42 }}
        dpr={[1, 1.35]}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        fallback={<ThreeDFallback />}
      >
        <ambientLight intensity={0.78} />
        <directionalLight position={[3.5, 5.2, 4]} intensity={1.35} />
        <pointLight color="#38bdf8" intensity={1.1} position={[-3, 2.5, 3]} />
        <CityBlocks reduceMotion={Boolean(reduceMotion)} />
      </Canvas>
    </div>
  );
}

function ThreeDFallback() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute right-[16%] top-24 h-48 w-36 rounded-lg border border-sky-200 bg-sky-100/30 shadow-2xl" />
      <div className="absolute right-[29%] top-32 h-64 w-40 rounded-lg border border-blue-200 bg-blue-100/30 shadow-2xl" />
      <div className="absolute right-[42%] top-44 h-44 w-32 rounded-lg border border-emerald-200 bg-emerald-100/25 shadow-2xl" />
    </div>
  );
}

function CityBlocks({ reduceMotion }: { reduceMotion: boolean }) {
  const groupRef = useRef<Group>(null);
  const blocks = useMemo(
    () => [
      { position: [-2.2, -0.35, 0], scale: [1.15, 1.9, 1.15], color: "#2563eb" },
      { position: [-0.9, 0.05, 0.35], scale: [0.92, 2.65, 0.92], color: "#38bdf8" },
      { position: [0.35, -0.1, -0.05], scale: [1.2, 2.25, 1.2], color: "#0ea5e9" },
      { position: [1.68, -0.52, 0.28], scale: [0.9, 1.45, 0.9], color: "#10b981" },
      { position: [2.78, -0.72, -0.12], scale: [0.76, 1.05, 0.76], color: "#0284c7" }
    ],
    []
  );
  const decks = useMemo(
    () => [
      { position: [-1.5, -1.32, 1.35], scale: [2.3, 0.06, 0.72], color: "#e0f2fe" },
      { position: [0.8, -1.2, 1.05], scale: [2.1, 0.06, 0.68], color: "#bae6fd" },
      { position: [2.2, -1.05, 0.74], scale: [1.35, 0.06, 0.56], color: "#ccfbf1" }
    ],
    []
  );
  const slabs = useMemo(
    () => [
      {
        position: [-2.35, 0.95, -0.15],
        rotation: [0.12, -0.42, 0.08],
        scale: [1.15, 0.04, 0.72],
        color: "#eff6ff"
      },
      {
        position: [0.85, 1.3, 0.42],
        rotation: [-0.08, 0.32, -0.06],
        scale: [1.35, 0.04, 0.82],
        color: "#dbeafe"
      },
      {
        position: [2.75, 0.42, 0.06],
        rotation: [0.14, 0.18, -0.12],
        scale: [0.92, 0.04, 0.62],
        color: "#ecfeff"
      }
    ],
    []
  );

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current) {
      return;
    }

    const time = clock.elapsedTime;
    const mouseX = reduceMotion ? 0 : pointer.x * 0.1;
    const mouseY = reduceMotion ? 0 : pointer.y * 0.06;

    groupRef.current.rotation.y = -0.34 + mouseX + Math.sin(time * 0.25) * 0.06;
    groupRef.current.rotation.x = 0.08 - mouseY;
    groupRef.current.position.y = reduceMotion ? -1.15 : -1.15 + Math.sin(time * 0.5) * 0.06;
  });

  return (
    <group ref={groupRef} position={[1.15, -1.15, -1.25]} rotation={[0.08, -0.34, 0]}>
      <gridHelper args={[15, 15, "#38bdf8", "#94a3b8"]} position={[0, -1.45, 0]} />
      {decks.map((deck, index) => (
        <mesh
          key={`deck-${index}`}
          position={deck.position as [number, number, number]}
          scale={deck.scale as [number, number, number]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={deck.color} opacity={0.5} roughness={0.62} transparent />
        </mesh>
      ))}
      {slabs.map((slab, index) => (
        <mesh
          key={`floating-slab-${index}`}
          position={slab.position as [number, number, number]}
          rotation={slab.rotation as [number, number, number]}
          scale={slab.scale as [number, number, number]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={slab.color} opacity={0.42} roughness={0.5} transparent />
        </mesh>
      ))}
      {blocks.map((block, index) => (
        <mesh
          key={`tower-${index}`}
          position={block.position as [number, number, number]}
          scale={block.scale as [number, number, number]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={block.color}
            metalness={0.08}
            opacity={0.3}
            roughness={0.55}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}
