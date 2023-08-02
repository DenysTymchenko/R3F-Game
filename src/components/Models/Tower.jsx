import { useGLTF } from '@react-three/drei'
import { stone, wood } from '../../utils/Materials.js';


export default function Tower(props) {
  const { nodes, materials } = useGLTF('./models/tower.gltf');

  return (
    <group {...props} dispose={null}>
      <group position={[-5.51, 0, -1.63,]}>
        <mesh geometry={nodes.tower_1.geometry} material={stone} receiveShadow />
        <mesh geometry={nodes.tower_2.geometry} material={wood} receiveShadow />
        <mesh geometry={nodes.tower_3.geometry} material={materials['_defaultMat.007']} receiveShadow />
        <mesh geometry={nodes.tower_4.geometry} material={materials['iron.011']} receiveShadow />
        <mesh geometry={nodes.tower_5.geometry} material={wood} receiveShadow />
        <mesh geometry={nodes.tower_6.geometry} material={stone} receiveShadow />
        <mesh geometry={nodes.tower_7.geometry} material={stone} receiveShadow />
      </group>
    </group>
  );
}

useGLTF.preload('./models/tower.gltf')
