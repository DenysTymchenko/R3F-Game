import { useGLTF } from '@react-three/drei'


export default function Rocks(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/rocks-forrest/model.gltf')

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.rocksA_forest.geometry}
        material={materials['Stone.007']}
        rotation={[Math.PI / 2, 0, 0,]}
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/rocks-forrest/model.gltf')
