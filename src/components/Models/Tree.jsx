import { useGLTF } from '@react-three/drei'

export default function Tree(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['tree-beech'].geometry} material={materials.color_main} />
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf')
