import { useGLTF } from '@react-three/drei'
import { stone } from '../../utils/Materials.js';

export default function Fence(props) {
  const { nodes, materials } = useGLTF('./models/fence.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder095.geometry} material={materials['Black.011']} />
      <mesh geometry={nodes.Cylinder095_1.geometry} material={stone} />
    </group>
  );
}

useGLTF.preload('./models/fence.gltf')
