import { useGLTF } from '@react-three/drei'
import { gold, metal, wood } from '../../utils/Materials.js';

export default function TreasureChest(props) {
  const {
    nodes,
    materials
  } = useGLTF('./models/treasureChest.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube051.geometry} material={metal} receiveShadow />
        <mesh geometry={nodes.Cube051_1.geometry} material={wood} receiveShadow />
        <mesh geometry={nodes.Cube051_2.geometry} material={gold} receiveShadow />
        <mesh geometry={nodes.Cube051_3.geometry} material={materials['Red.039']} receiveShadow />
      </group>
    </group>
  );
}

useGLTF.preload('./models/treasureChest.gltf')
