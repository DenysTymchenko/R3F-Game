import { useGLTF } from '@react-three/drei'
import { stoneDark } from '../../utils/Materials.js';

export default function Gate(props) {
  const { nodes, materials } = useGLTF('./models/gate.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh geometry={nodes.Cube4154.geometry} material={stoneDark} />
        <mesh geometry={nodes.Cube4154_1.geometry} material={materials['Black.037']} />
      </group>
    </group>
  );
}

useGLTF.preload('./models/gate.gltf')
