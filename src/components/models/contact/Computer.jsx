import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export function Computer(props) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  // Memoize optimized materials to prevent unnecessary re-renders
  const optimizedMaterials = useMemo(() => {
    const optimized = {};
    Object.keys(materials).forEach(key => {
      if (materials[key]) {
        optimized[key] = materials[key].clone();
        optimized[key].side = THREE.FrontSide;
        optimized[key].needsUpdate = true;
      }
    });
    return optimized;
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow={false} // Disable shadows for performance
          receiveShadow={false} // Disable shadows for performance
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={optimizedMaterials["ComputerDesk.001"]}
        />
        <mesh
          castShadow={false} // Disable shadows for performance
          receiveShadow={false} // Disable shadows for performance
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={optimizedMaterials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
