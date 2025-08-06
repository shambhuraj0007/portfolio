import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useCallback, Suspense } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const { scene } = useGLTF(model.modelPath);

  // Memoize material creation to prevent unnecessary re-renders
  const optimizedScene = useMemo(() => {
    const clonedScene = scene.clone();
    
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        // Optimize materials
        if (child.material) {
          child.material.side = THREE.FrontSide;
          child.material.needsUpdate = true;
        }
        
        // Apply specific material for Interactive Developer
        if (model.name === "Interactive Developer" && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ 
            color: "white",
            side: THREE.FrontSide 
          });
        }
      }
    });
    
    return clonedScene;
  }, [scene, model.name]);

  // Optimized Float animation
  const floatConfig = useMemo(() => ({
    speed: 4,
    rotationIntensity: 0.3,
    floatIntensity: 0.6
  }), []);

  return (
    <Canvas
      dpr={[1, 1.5]} // Reduce pixel ratio for better performance
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ 
        antialias: false, // Disable antialiasing for performance
        alpha: true,
        powerPreference: "high-performance"
      }}
    >
      <Suspense fallback={null}>
        {/* Optimized lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8}
          castShadow={false} // Disable shadows for performance
        />
        
        {/* Environment with blur for better performance */}
        <Environment preset="city" blur={0.8} />

        {/* Optimized Float component */}
        <Float {...floatConfig}>
          <group scale={model.scale} rotation={model.rotation}>
            <primitive object={optimizedScene} />
          </group>
        </Float>

        {/* Disable OrbitControls on mobile for better performance */}
        {window.innerWidth > 768 && (
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
      </Suspense>
    </Canvas>
  );
};

export default TechIconCardExperience;
