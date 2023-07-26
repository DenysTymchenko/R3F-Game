import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { boxGeometry } from '../utils/Geometries';
import { wallMaterial } from '../utils/Materials';

export default function Bounds({ length }) {
  const depthOfOneBlock = 4;

  return (
    <group>
      <RigidBody type='fixed' restitution={0.2} friction={0}>
        {/* Right wall */}
        <CuboidCollider
          args={[0.3, 1, length * depthOfOneBlock / 2]}
          position={[2.15, 1, -(length * 2) + 2]}
          restitution={0.2}
          friction={1}
        />
        {/* Left wall */}
        <CuboidCollider
          args={[0.3, 1, length * depthOfOneBlock / 2]}
          position={[-2.15, 1, -(length * 2) + 2]}
          restitution={0.2}
          friction={1}
        />
        {/* End wall */}
        <CuboidCollider
          args={[1.8, 1, 0.3]}
          position={[0, 1, -(length * depthOfOneBlock) + 2]}
          restitution={0.2}
          friction={1}
        />
        {/* Floor */}
        <CuboidCollider
          args={[2, 0.1, length * 2]}
          position={[0, -0.1, -(length * 2) + 2]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </group>
  )
}
