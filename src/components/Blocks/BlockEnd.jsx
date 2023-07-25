import { Float, Text3D } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../utils/Geometries';
import { floor1Material } from '../../utils/Materials';
import Flag from '../Flag';


export default function BlockEnd({ position = [0, 0, 0] }) {
  console.log(position);
  return (
    <group position={position}>
      <Float>
        <Text3D
          font='./fonts/Bebas Neue_Regular.json'
          scale={0.5}
          position={[-0.5, 2, 0]}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Finish!!!
          <meshPhysicalMaterial color='#4B91C2' />
        </Text3D>
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
