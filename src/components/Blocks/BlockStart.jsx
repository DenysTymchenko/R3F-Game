import { Float, Text3D } from '@react-three/drei';
import { boxGeometry } from '../../utils/Geometries';
import { floor1Material } from '../../utils/Materials';
import Wall from '../Models/Wall.jsx';
import WallBorders from '../WallBorders.jsx';
import FloorDarker from '../FloorDarker.jsx';

export default function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Float>
        <Text3D
          font='./fonts/Bebas Neue_Regular.json'
          scale={0.2}
          position={[-0.5, 1, 0]}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Castle Run
          <meshPhysicalMaterial color='#66bfff' />
        </Text3D>
      </Float>
      <WallBorders />
      <FloorDarker />
    </group>
  );
}
