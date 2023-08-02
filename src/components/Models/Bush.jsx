import { useGLTF } from '@react-three/drei'
import { floor2Material } from '../../utils/Materials.js';

export default function Bush(props) {
  const { nodes } = useGLTF('./models/bush.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.plant.geometry}
        material={floor2Material}
        scale={0.69} />
    </group>
  );
}

useGLTF.preload('./models/bush.gltf');
