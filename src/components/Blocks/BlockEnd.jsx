import { Float, Text3D } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import Flag from '../Models/Flag.jsx';
import FloorDarker from '../FloorDarker.jsx';
import WallBorders from '../WallBorders.jsx';
import Wall from '../Models/Wall.jsx';


export default function BlockEnd({ position = [0, 0, 0] }) {
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
      <WallBorders /> {/*Left and right walls*/}
      <Wall position={[0, 0, -2]} /> {/*End wall*/}
      <FloorDarker />
    </group>
  );
}
