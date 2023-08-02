import { useGLTF, } from '@react-three/drei'
import { metal, stone, wood } from '../../utils/Materials.js';

export default function Axe(props) {
  const { nodes } = useGLTF('./models/axe.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cube014.geometry} material={metal} castShadow receiveShadow />
        <mesh geometry={nodes.Cube014_1.geometry} material={wood} receiveShadow />
        <mesh geometry={nodes.Cube014_2.geometry} material={stone} receiveShadow />
      </group>
    </group>
  );
}

useGLTF.preload('./models/axe.gltf')
