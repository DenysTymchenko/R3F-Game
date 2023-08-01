import { useGLTF } from '@react-three/drei'

export default function Shield(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/shield/model.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4204.geometry} material={materials['Metal.099']} />
        <mesh geometry={nodes.Cube4204_1.geometry} material={materials['BrownDark.069']} />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/shield/model.gltf')
