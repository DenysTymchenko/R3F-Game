import { useGLTF, } from '@react-three/drei'

export default function Axe(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/double-axe/model.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cube014.geometry} material={materials['Metal.074']} castShadow receiveShadow />
        <mesh geometry={nodes.Cube014_1.geometry} material={materials['BrownDark.039']} castShadow receiveShadow />
        <mesh geometry={nodes.Cube014_2.geometry} material={materials['Stone.012']} castShadow receiveShadow />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/double-axe/model.gltf')
