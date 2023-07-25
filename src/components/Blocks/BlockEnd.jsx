import { Float, Text } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../utils/Geometries';
import { floor1Material } from '../../utils/Materials';
import Flag from '../Flag';


export default function BlockEnd({ position = [0, 0, 0] }) {
  console.log(position);
  return (
    <group position={position}>
      <Float>
        <Text
          position={[0, 1, 1]}
        >
          Finish!!!
          <meshBasicMaterial toneMapped={false} />
        </Text>
      </Float>

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
