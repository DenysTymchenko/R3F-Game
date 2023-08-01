import { useGLTF } from '@react-three/drei'


export default function Tower(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tower/model.gltf');

  return (
    <group {...props} dispose={null}>
      <group position={[-5.51, 0, -1.63,]}>
        <mesh geometry={nodes.tower_1.geometry} material={materials['stone.006']} receiveShadow />
        <mesh geometry={nodes.tower_2.geometry} material={materials['woodDark.003']} receiveShadow />
        <mesh geometry={nodes.tower_3.geometry} material={materials['_defaultMat.007']} receiveShadow />
        <mesh geometry={nodes.tower_4.geometry} material={materials['iron.011']} receiveShadow />
        <mesh geometry={nodes.tower_5.geometry} material={materials['wood.024']} receiveShadow />
        <mesh geometry={nodes.tower_6.geometry} material={materials['sand.006']} receiveShadow />
        <mesh geometry={nodes.tower_7.geometry} material={materials['textile.008']} receiveShadow />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tower/model.gltf')
