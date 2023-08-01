import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';
import Shield from '../Models/Shield.jsx';
import WallBorders from '../WallBorders.jsx';
import Floor from '../Floor.jsx';

export default function LeftRightShield({ position = [0, 0, 0] }) {
  const shield = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const speed = 3;
    const x = Math.sin(time * speed);
    shield.current.setNextKinematicTranslation({ x, y: 1, z: position[2] });
  })

  return (
    <group position={position}>
      <RigidBody
        ref={shield}
        scale={2}
        type='kinematicPosition'
        colliders={false}
        restitution={1}
        onCollisionEnter={() => hitSound.play()}
      >
        <Shield />
        <CuboidCollider args={[0.3, 0.4, 0.1]} />
      </RigidBody>
      <WallBorders />
      <Floor />
    </group>
  )
}
