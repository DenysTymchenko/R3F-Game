import { useGLTF } from '@react-three/drei'


export default function Fence(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/fence/model.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder095.geometry} material={materials['Black.011']} />
      <mesh geometry={nodes.Cylinder095_1.geometry} material={materials['Stone.003']} />
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/fence/model.gltf')
