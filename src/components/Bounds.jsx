import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { boxGeometry } from '../utils/Geometries';
import { wallMaterial } from '../utils/Materials';

export default function Bounds({ length }) {
  const depthOfOneBlock = 4;

  return (
    <group>
      <RigidBody type='fixed' restitution={0.2} friction={0}>
        {/* Right wall */}
        <Wall
          position={[2.15, 1.3, - (length * 2) + 2]}
          scale={[0.3, 3, length * depthOfOneBlock]}
          castShadow
        />
        {/* Left wall */}
        <Wall
          position={[-2.15, 1.3, - (length * 2) + 2]}
          scale={[0.3, 3, length * depthOfOneBlock]}
          castShadow
        />
        {/* End wall */}
        <Wall
          position={[0, 1.3, - (length * depthOfOneBlock) + 2]}
          scale={[4, 3, 0.3]}
          receiveShadow
        />
        {/* Floor */}
        <CuboidCollider
          args={[2, 0.1, length * 2]}
          position={[0, -0.1, - (length * 2) + 2]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </group>
  )
}

function Wall({ position, scale, ...shadows }) {
  return (
    <mesh
      geometry={boxGeometry}
      material={wallMaterial}
      position={position}
      scale={scale}
      {...shadows}
    />
  );
}
