import { useGLTF } from '@react-three/drei'

export default function Shovel(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/shovel/model.gltf');

  return (
      <group {...props}>
        <mesh geometry={nodes.shovel_1.geometry} material={materials['wood.021']} />
        <mesh geometry={nodes.shovel_2.geometry} material={materials['stone.003']} />
      </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/shovel/model.gltf')
