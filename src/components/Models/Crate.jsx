import { useGLTF } from '@react-three/drei'
import { metal, wood } from '../../utils/Materials.js';

export default function Crate(props) {
  const { nodes } = useGLTF('./models/crate.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0,]}>
        <mesh
          geometry={nodes.Cube013.geometry}
          material={wood}
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube013_1.geometry}
          material={metal}
          receiveShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload('./models/crate.gltf')
