"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* 1️⃣ BRAND COLORS (DEFINED ONCE) */
const BRAND_COLORS = [
  "#E05A00", // dark orange (brand)
  "#1A1A1A", // dark charcoal
  "#D1D1D1", // light silver/gray
];

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  /* 2️⃣ PARTICLE GENERATION WITH BRAND COLORS */
  const particles = useMemo(() => {
    const count = 400;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // random brand color
      color.set(
        BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)]
      );

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  /* 4️⃣ EXISTING MOTION (UNCHANGED) */
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={pointsRef}>
    <bufferGeometry>
  <bufferAttribute
    attach="attributes-position"
    args={[particles.positions, 3]}
  />
  <bufferAttribute
    attach="attributes-color"
    args={[particles.colors, 3]}
  />
</bufferGeometry>


      {/* 3️⃣ PER-PARTICLE BRAND COLORS */}
      <pointsMaterial
        size={1.05}
        vertexColors
        transparent
        opacity={9.0}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
    >
      <Particles />
    </Canvas>
  );
}
