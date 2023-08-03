import { useGLTF } from '@react-three/drei'
import { metal, wood } from '../../utils/Materials.js';

export default function TreasureChest(props) {
  const {
    nodes,
    materials
  } = useGLTF('./models/treasureChest.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube051.geometry} material={metal} />
        <mesh geometry={nodes.Cube051_1.geometry} material={wood} />
        <mesh geometry={nodes.Cube051_2.geometry} material={materials['Gold.006']} />
        <mesh geometry={nodes.Cube051_3.geometry} material={materials['Red.039']} />
      </group>
    </group>
  );
}

useGLTF.preload('./models/treasureChest.gltf')
