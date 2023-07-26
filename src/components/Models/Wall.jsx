import { useGLTF, } from '@react-three/drei'


export default function Wall(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/wall/model.gltf')

  return (
    <group {...props} dispose={null}>
      <group scale={[1, 0.25, 0.5]} rotation={[Math.PI / 2, 0, 0,]}>
        <mesh
          geometry={nodes.Cube4230.geometry}
          material={materials['Stone.050']}
          castShadow
        />
        <mesh
          geometry={nodes.Cube4230_1.geometry}
          material={materials['StoneDark.011']}
          castShadow
        />
      </group>

    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/wall/model.gltf')
