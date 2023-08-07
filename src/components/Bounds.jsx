import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { hitSound } from '../utils/Audio.js';

export default function Bounds({ length }) {
  const depthOfOneBlock = 4;

  return (
    <group>
      <RigidBody type='fixed' restitution={0.2}>
        {/* Right wall */}
        <CuboidCollider
          args={[0.2, 1.2, length * depthOfOneBlock / 2]}
          position={[2.15, 1.2, -(length * 2) + 2]}
          onCollisionEnter={() => hitSound.play()}
        />
        {/* Left wall */}
        <CuboidCollider
          args={[0.2, 1.2, length * depthOfOneBlock / 2]}
          position={[-2.15, 1.2, -(length * 2) + 2]}
          onCollisionEnter={() => hitSound.play()}
        />
        {/* End wall */}
        <CuboidCollider
          args={[2, 1, 0.1]}
          position={[0, 1, -(length * depthOfOneBlock) + 2]}
          onCollisionEnter={() => hitSound.play()}
        />
        {/*Sky Box*/}
        <CuboidCollider
          args={[2, 0.1, length * 2]}
          position={[0, 2.9, -(length * 2) + 2]}
        />
      </RigidBody>
    </group>
  )
}
