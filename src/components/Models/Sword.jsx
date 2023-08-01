import { useGLTF } from '@react-three/drei'


export default function Sword(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/sword-1/model.gltf')

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4214.geometry} material={materials['Metal.102']} />
        <mesh geometry={nodes.Cube4214_1.geometry} material={materials['BrownDark.073']} />
        <mesh geometry={nodes.Cube4214_2.geometry} material={materials['Stone.037']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/sword-1/model.gltf')
