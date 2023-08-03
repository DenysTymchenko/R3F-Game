import { useGLTF } from '@react-three/drei'
import { metal, wood } from '../../utils/Materials.js';

export default function Shield(props) {
  const {
    nodes,
    materials
  } = useGLTF('./models/shield.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4204.geometry} material={metal} />
        <mesh geometry={nodes.Cube4204_1.geometry} material={wood} />
      </group>
    </group>
  );
}

useGLTF.preload('./models/shield.gltf')
