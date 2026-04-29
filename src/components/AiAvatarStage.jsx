import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";

function AvatarCore() {
  const coreRef = useRef(null);
  const auraRef = useRef(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.35;
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.16;
    }
    if (auraRef.current) {
      auraRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={coreRef} position={[0, 0.15, 0]}>
        <icosahedronGeometry args={[1.05, 2]} />
        <meshStandardMaterial color="#76cbff" emissive="#3776c4" emissiveIntensity={0.9} />
      </mesh>
      <mesh ref={auraRef} rotation={[Math.PI / 2.8, 0, 0]}>
        <torusGeometry args={[1.6, 0.04, 20, 120]} />
        <meshStandardMaterial color="#8ad7ff" emissive="#52a7e8" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0, -1.25, 0]}>
        <cylinderGeometry args={[0.42, 0.72, 1.35, 24]} />
        <meshStandardMaterial color="#1f375a" emissive="#122847" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

const panels = [
  "Сценарий маршрута",
  "Контекст пользователя",
  "AI-подсказка шага"
];

export default function AiAvatarStage() {
  const panelMotion = useMemo(
    () => ({
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 }
    }),
    []
  );

  return (
    <div className="ai-avatar-stage premium-card">
      <div className="ai-avatar-stage__scene">
        <Canvas dpr={[1, 1.35]} camera={{ position: [0, 0.2, 5], fov: 46 }}>
          <ambientLight intensity={0.72} />
          <pointLight position={[3, 2, 4]} intensity={1.1} color="#7ed4ff" />
          <pointLight position={[-2, -2, 2]} intensity={0.7} color="#4f76bd" />
          <AvatarCore />
          <Sparkles count={45} scale={5.5} size={2.2} speed={0.2} color="#8bd9ff" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} />
        </Canvas>
      </div>
      <div className="ai-avatar-stage__panels">
        {panels.map((label, index) => (
          <motion.div
            key={label}
            className="motion-panel glow-border"
            initial={panelMotion.initial}
            animate={panelMotion.animate}
            transition={{ delay: index * 0.08, duration: 0.22 }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
