import { useGLTF } from '@react-three/drei'

export default function WoodenDoor(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/door-old/model.gltf')

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4153.geometry} material={materials['BrownDark.060']} castShadow receiveShadow />
        <mesh geometry={nodes.Cube4153_1.geometry} material={materials['Metal.093']} castShadow receiveShadow />
      </group>
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/door-old/model.gltf')
