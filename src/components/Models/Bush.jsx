import { useGLTF } from '@react-three/drei'
import { limegreen } from '../../utils/Materials.js';

export default function Bush(props) {
  const { nodes } = useGLTF('./models/bush.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.plant.geometry}
        material={limegreen}
        scale={0.69} />
    </group>
  );
}

useGLTF.preload('./models/bush.gltf');
