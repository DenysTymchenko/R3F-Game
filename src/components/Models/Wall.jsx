import { useGLTF, } from '@react-three/drei'
import { stone, stoneDark } from '../../utils/Materials.js';


export default function Wall(props) {
  const { nodes } = useGLTF('./models/wall.gltf')

  return (
    <group {...props} dispose={null}>
      <group scale={[1, 0.25, 0.6]} rotation={[Math.PI / 2, 0, 0,]}>
        <mesh
          geometry={nodes.Cube4230.geometry}
          material={stone}
          castShadow
        />
        <mesh
          geometry={nodes.Cube4230_1.geometry}
          material={stoneDark}
          castShadow
        />
      </group>

    </group>
  )
}

useGLTF.preload('./models/wall.gltf')
