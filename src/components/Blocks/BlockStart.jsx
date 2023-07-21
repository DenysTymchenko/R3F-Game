import { boxGeometry } from '../../utils/Geometries';
import { floor1Material } from '../../utils/Materials';

export default function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
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
