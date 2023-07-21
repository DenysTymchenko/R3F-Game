import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../utils/Geometries';
import { floor1Material } from '../../utils/Materials';
import Flag from '../Flag';


export default function BlockEnd({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <RigidBody type='fixed' colliders='hull'>
        <Flag />
      </RigidBody>

      {/*Floor*/}
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        scale={[4, 0.2, 4]}
        receiveShadow
      >
      </mesh>
    </group>
  );
}
