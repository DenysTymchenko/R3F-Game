import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';
import Decorations from '../Decorations/Decorations.jsx';
import WallBorders from '../WallBorders.jsx';
import Floor from '../Floor.jsx';
import Shield from '../Models/Shield.jsx';

export default function LeftRightShield({ position = [0, 0, 0] }) {
  const shield = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const speed = 3;
    const x = Math.sin(time * speed);
    shield.current.setNextKinematicTranslation({ x, y: 1, z: position[2] });
  })

  const rocksPositions = [
    [1.7, 0, 1.7],
    [1, 0, 1.5],
    [-1.5, 0, 1.7],
    [-1, 0, 1.4],
    [-0.2, 0, -1.3]
  ];
  const bushesPositions = [
    [-0.1, 0, 1.4],
    [1, 0, -1.4],
    [-1.3, 0, -1],
  ];

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
      <Decorations
        bushesPositions={bushesPositions}
        rocksPositions={rocksPositions}
      />
      <WallBorders />
      <Floor />
    </group>
  )
}
