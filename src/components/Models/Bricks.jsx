import { useGLTF } from '@react-three/drei'
import { stone } from '../../utils/Materials.js';

export default function Bricks(props) {
  const { nodes } = useGLTF('./models/bricks.gltf')

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.bricks.geometry}
        material={stone}
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload('./models/bricks.gltf')
