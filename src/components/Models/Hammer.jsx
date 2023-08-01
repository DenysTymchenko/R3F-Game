import { useGLTF } from '@react-three/drei'


export default function Hammer(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/hammer/model.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4163.geometry} material={materials['Metal.094']} castShadow receiveShadow />
        <mesh geometry={nodes.Cube4163_1.geometry} material={materials['BrownDark.061']} castShadow receiveShadow />
        <mesh geometry={nodes.Cube4163_2.geometry} material={materials['Stone.030']} castShadow receiveShadow />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/hammer/model.gltf')
