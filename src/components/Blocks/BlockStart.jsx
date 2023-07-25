import { Float, Text3D } from '@react-three/drei';
import { boxGeometry } from '../../utils/Geometries';
import { floor1Material } from '../../utils/Materials';

export default function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Float>
        <Text3D
          font='./fonts/Bebas Neue_Regular.json'
          scale={0.2}
          position={[-0.75, 1, 0]}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Obstacle Course
          <meshPhysicalMaterial color='#66bfff' />
        </Text3D>
      </Float>

      {/*Floor*/}
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position-y={-0.1} // Placing floor at y = 0
        scale={[4, 0.2, 4]}
        receiveShadow
      >
      </mesh>
    </group>
  );
}
