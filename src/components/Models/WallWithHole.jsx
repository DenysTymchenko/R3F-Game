import { useGLTF } from '@react-three/drei'
import { stone, stoneDark } from '../../utils/Materials.js';


export default function WallWithHole(props) {
  const { nodes } = useGLTF('./models/wallWithHole.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4245.geometry} material={stone} />
        <mesh geometry={nodes.Cube4245_1.geometry} material={stoneDark} />
      </group>
    </group>
  );
}

useGLTF.preload('./models/wallWithHole.gltf')
