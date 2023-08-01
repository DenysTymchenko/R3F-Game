import { useGLTF } from '@react-three/drei'

export default function Bricks(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bricks/model.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.bricks.geometry}
        material={materials['Stone.014']} r
        otation={[Math.PI / 2, 0, 0,]}
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bricks/model.gltf')
