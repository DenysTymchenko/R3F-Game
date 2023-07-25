import { Float, Text } from '@react-three/drei';
import { boxGeometry } from '../../utils/Geometries';
import { floor1Material } from '../../utils/Materials';

export default function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Float>
        <Text
          position={[1, 0.75, 0]}
          scale={0.5}
          maxWidth={0.25}
          lineHeight={0.85}
          textAlign='center'
        >
          Obstacle Course
          <meshBasicMaterial toneMapped={false} />
        </Text>
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
