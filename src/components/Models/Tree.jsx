import { useGLTF, } from '@react-three/drei'
import { floor2Material, wood } from '../../utils/Materials.js';

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/tree.gltf')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_tree_large.geometry} material={floor2Material} />
      <mesh geometry={nodes.Mesh_tree_large_1.geometry} material={wood} />
    </group>
  )
}

useGLTF.preload('./models/tree.gltf')
