import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";

import Computer from "./Computer";

const ContactExperience = () => {
  // Memoize lighting configuration for better performance
  const lightingConfig = useMemo(() => ({
    ambient: { intensity: 0.6, color: "#fff4e6" },
    directional: { 
      position: [5, 5, 3], 
      intensity: 1.5, 
      color: "#ffd9b3",
      castShadow: false // Disable shadows for performance
    }
  }), []);

  return (
    <Canvas 
      shadows={false} // Disable shadows for better performance
      camera={{ position: [0, 3, 7], fov: 45 }}
      dpr={[1, 1.5]} // Reduce pixel ratio for better performance
      gl={{ 
        antialias: false, // Disable antialiasing for performance
        alpha: true,
        powerPreference: "high-performance"
      }}
    >
      <Suspense fallback={null}>
        {/* Optimized lighting */}
        <ambientLight 
          intensity={lightingConfig.ambient.intensity} 
          color={lightingConfig.ambient.color} 
        />

        <directionalLight 
          position={lightingConfig.directional.position} 
          intensity={lightingConfig.directional.intensity} 
          color={lightingConfig.directional.color}
          castShadow={lightingConfig.directional.castShadow}
        />

        {/* Disable OrbitControls on mobile for better performance */}
        {window.innerWidth > 768 && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.05}
          />
        )}

        {/* Ground plane */}
        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow={false} // Disable shadows for performance
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#a46b2d" />
          </mesh>
        </group>

        {/* Computer model */}
        <group scale={0.03} position={[0, -1.49, -2]} castShadow={false}>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
