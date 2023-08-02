import { useGLTF } from '@react-three/drei'
import { stone, wood } from '../../utils/Materials.js';

export default function Shovel(props) {
  const {
    nodes,
    materials
  } = useGLTF('./models/shovel.gltf');

  return (
      <group {...props}>
        <mesh geometry={nodes.shovel_1.geometry} material={wood} />
        <mesh geometry={nodes.shovel_2.geometry} material={stone} />
      </group>
  );
}

useGLTF.preload('./models/shovel.gltf')
