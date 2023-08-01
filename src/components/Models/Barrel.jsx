import { useGLTF } from '@react-three/drei'

export default function Barrel(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/barrel-2/model.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cylinder019.geometry} material={materials['BrownDark.041']} />
        <mesh geometry={nodes.Cylinder019_1.geometry} material={materials['Beige.018']} />
        <mesh geometry={nodes.Cylinder019_2.geometry} material={materials['Metal.075']} />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/barrel-2/model.gltf')
