import { useGLTF } from '@react-three/drei'
import { limegreen } from '../../utils/Materials.js';

export default function FloorWithHoles(props) {
  const { nodes } = useGLTF('./models/floorWithHoles.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={limegreen}
        position={[0, -0.1, 0]}
        scale={[2, 0.1, 2]}
        rotation-y={-Math.PI / 2}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('./models/floorWithHoles.glb')
