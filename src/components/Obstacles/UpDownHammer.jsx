import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';
import Hammer from '../Models/Hammer.jsx';
import WallBorders from '../WallBorders.jsx';
import Floor from '../Floor.jsx';

export default function UpDownHammer({ position = [0, 0, 0] }) {
  const hammer = useRef();
  // timeOffset will help us to make different hammers go up and down differently, so they don't do it be simultaneously.
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const y = Math.sin(2.5 * time + timeOffset) + 1.15; // because of + 1.15, obstacle will never go under the floor

    hammer.current.setNextKinematicTranslation({ x: position[0], y, z: position[2] });
  })

  return (
    <group position={position}>
      <RigidBody
        ref={hammer}
        rotation-x={Math.PI}
        scale={3}
        type='kinematicPosition'
        colliders={false}
        restitution={0.2}
        onCollisionEnter={() => hitSound.play()}
      >
        <Hammer position-y={-0.55} />
        {/*Handle*/}
        <CuboidCollider args={[0.1, 0.3, 0.1]} position={[0, -0.5, 0]} />
        {/*Stone*/}
        <CuboidCollider args={[0.4, 0.15, 0.2]} position={[0, -0.15, 0]} />
      </RigidBody>
      <WallBorders />
      <Floor />
    </group>
  );
}
