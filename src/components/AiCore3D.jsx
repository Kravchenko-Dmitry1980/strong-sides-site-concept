import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CoreMesh() {
  const coreRef = useRef(null);
  const ringARef = useRef(null);
  const ringBRef = useRef(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.55;
      coreRef.current.rotation.x += delta * 0.2;
    }
    if (ringARef.current) {
      ringARef.current.rotation.z += delta * 0.7;
    }
    if (ringBRef.current) {
      ringBRef.current.rotation.y -= delta * 0.45;
      ringBRef.current.rotation.x += delta * 0.25;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial color="#65b9ff" emissive="#2c8fe8" emissiveIntensity={0.8} />
      </mesh>
      <mesh ref={ringARef} rotation={[Math.PI / 2.8, 0, 0]}>
        <torusGeometry args={[1.55, 0.03, 16, 120]} />
        <meshStandardMaterial color="#9bd7ff" emissive="#4ea8ea" emissiveIntensity={0.55} />
      </mesh>
      <mesh ref={ringBRef} rotation={[Math.PI / 3.2, Math.PI / 4, 0]}>
        <torusGeometry args={[1.88, 0.02, 16, 90]} />
        <meshStandardMaterial color="#7fc6ff" emissive="#3178cc" emissiveIntensity={0.45} />
      </mesh>
    </group>
  );
}

function CoreParticles() {
  const positions = useMemo(() => {
    const data = [];
    for (let i = 0; i < 220; i += 1) {
      data.push((Math.random() - 0.5) * 7.5);
      data.push((Math.random() - 0.5) * 7.5);
      data.push((Math.random() - 0.5) * 7.5);
    }
    return new Float32Array(data);
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial color="#95d2ff" size={0.025} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export default function AiCore3D() {
  return (
    <div className="ai-core-3d">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.5], fov: 48 }}>
        <ambientLight intensity={0.75} />
        <pointLight position={[3, 2, 4]} intensity={1.4} color="#7dc9ff" />
        <pointLight position={[-2, -3, -1]} intensity={0.8} color="#3f79b9" />
        <CoreMesh />
        <CoreParticles />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
