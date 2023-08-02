import { useGLTF } from '@react-three/drei'
import { metal, wood } from '../../utils/Materials.js';

export default function Barrel(props) {
  const { nodes, materials } = useGLTF('./models/barrel.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cylinder019.geometry} material={wood} />
        <mesh geometry={nodes.Cylinder019_1.geometry} material={materials['Beige.018']} />
        <mesh geometry={nodes.Cylinder019_2.geometry} material={metal} />
      </group>
    </group>
  );
}

useGLTF.preload('./models/barrel.gltf')
