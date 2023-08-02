import { useGLTF } from '@react-three/drei';
import { limegreen, wood } from '../../utils/Materials.js';


export default function Tree(props) {
  const { nodes } = useGLTF('./models/tree.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={limegreen}
        position={[-1.748, 3.119, 1.059]}
        scale={1.294}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={limegreen}
        position={[-0.746, 3.634, -1.289]}
        scale={0.929}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={limegreen}
        position={[0.716, 2.99, -0.129]}
        scale={1.121}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={limegreen}
        position={[-2.172, 3.389, 0.426]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={limegreen}
        position={[-1.208, 2.861, 1.598]}
        scale={1.099}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={limegreen}
        position={[-0.631, 4.195, -0.129]}
        scale={1.437}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere006.geometry}
        material={limegreen}
        position={[-1.24, 2.854, -0.428]}
        scale={0.715}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={limegreen}
        position={[0.07, 2.713, 1.073]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={limegreen}
        position={[-1.684, 2.759, -0.803]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere009.geometry}
        material={limegreen}
        position={[-0.223, 2.572, -1.353]}
      />
    </group>
  );
}

useGLTF.preload('./models/tree.glb');
