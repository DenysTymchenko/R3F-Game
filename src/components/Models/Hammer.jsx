import { useGLTF } from '@react-three/drei'
import { metal, stone, wood } from '../../utils/Materials.js';

export default function Hammer(props) {
  const { nodes, materials } = useGLTF('./models/hammer.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4163.geometry} material={metal} castShadow receiveShadow />
        <mesh geometry={nodes.Cube4163_1.geometry} material={wood} castShadow receiveShadow />
        <mesh geometry={nodes.Cube4163_2.geometry} material={stone} />
      </group>
    </group>
  );
}

useGLTF.preload('./models/hammer.gltf')
