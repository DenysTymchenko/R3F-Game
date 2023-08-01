import { useGLTF } from '@react-three/drei'

export default function Crate(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/crate/model.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube013.geometry} material={materials['BrownDark.057']} castShadow receiveShadow />
        <mesh geometry={nodes.Cube013_1.geometry} material={materials['Metal.089']} castShadow receiveShadow />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/crate/model.gltf')
