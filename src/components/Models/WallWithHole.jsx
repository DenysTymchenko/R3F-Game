import { useGLTF } from '@react-three/drei'


export default function WallWithHole(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/broken-wall/model.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4245.geometry} material={materials['Stone.051']} />
        <mesh geometry={nodes.Cube4245_1.geometry} material={materials['StoneDark.012']} />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/broken-wall/model.gltf')
