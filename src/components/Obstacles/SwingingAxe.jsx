import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { Euler, Quaternion } from 'three';
import useGame from '../../store/useGame.jsx';
import { slainSound } from '../../utils/Audio.js';
import Decorations from '../Decorations/Decorations.jsx';
import WallBorders from '../WallBorders.jsx';
import Axe from '../Models/Axe.jsx';
import Floor from '../Floor.jsx';

export default function SwingingAxe({ position = [0, 0, 0] }) {
  const { restart } = useGame((state) => state);
  const axe = useRef();
  const speed = 4;
  const bushesPositions = [
    [-1.2, 0, 1.4],
    [1.5, 0, -1.4],
  ];
  const rocksPositions = [
    [1.5, 0, 1],
    [-0.4, 0, 0.2],
    [-1.5, 0, -1],
  ];

  // Left to right swing animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const swingAngle = Math.sin(time * speed) * (Math.PI / 4) - Math.PI; // from -4 to -2
    const rotation = new Quaternion();
    rotation.setFromEuler(new Euler(0, 0, swingAngle));
    axe.current.setNextKinematicRotation(rotation);
  });

  return (
    <group position={position}>
      <RigidBody
        ref={axe}
        position-y={1.75}
        rotation-z={Math.PI}
        scale={2}
        type='kinematicPosition'
        colliders={false}
        restitution={0.2}
        onCollisionEnter={() => {
          slainSound.volume = 0.2
          slainSound.play();
        }}
      >
        <Axe />
        {/*Handle*/}
        <CuboidCollider args={[0.1, 0.3, 0.1]} position={[0, 0, 0]} />
        {/*Blade*/}
        <CuboidCollider args={[0.4, 0.2, 0.1]} position={[0, 0.5, 0]} />
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
