import { useGLTF } from '@react-three/drei'

export default function Flag() {
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/flag/model.gltf');

  return (
    <group rotation={[Math.PI / 2, 0, 0,]} >
      <mesh geometry={nodes.Cube1351.geometry} material={materials['Blue.011']} castShadow />
      <mesh geometry={nodes.Cube1351_1.geometry} material={materials['Brown.006']} castShadow />
      <mesh geometry={nodes.Cube1351_2.geometry} material={materials['Metal.019']} castShadow />
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/flag/model.gltf')
