import { useGLTF } from '@react-three/drei'

export default function Bush(props) {
  const {
    nodes,
    materials
  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/plant-pirate-kit/model.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.plant.geometry}
        material={materials['leaves.005']}
        scale={0.69} />
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/plant-pirate-kit/model.gltf');
