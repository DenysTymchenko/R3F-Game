import { useGLTF } from '@react-three/drei'
import { metal, stone, wood } from '../../utils/Materials.js';


export default function Sword(props) {
  const { nodes } = useGLTF('./models/sword.gltf')

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4214.geometry} material={metal} />
        <mesh geometry={nodes.Cube4214_1.geometry} material={wood} />
        <mesh geometry={nodes.Cube4214_2.geometry} material={stone} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/sword.gltf')
