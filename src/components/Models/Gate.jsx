import { useGLTF } from '@react-three/drei'

export default function Gate(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/gate-old/model.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4154.geometry} material={materials['StoneDark.003']} />
        <mesh geometry={nodes.Cube4154_1.geometry} material={materials['Black.037']} />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/gate-old/model.gltf')
