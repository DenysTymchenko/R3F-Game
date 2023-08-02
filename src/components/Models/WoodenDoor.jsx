import { useGLTF } from '@react-three/drei'
import { metal, wood } from '../../utils/Materials.js';

export default function WoodenDoor(props) {
  const { nodes } = useGLTF('./models/door.gltf')

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4153.geometry} material={wood} castShadow receiveShadow />
        <mesh geometry={nodes.Cube4153_1.geometry} material={metal} castShadow receiveShadow />
      </group>
    </group>
  )
}

useGLTF.preload('./models/door.gltf')
