import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { Euler, Quaternion } from 'three';
import useGame from '../../store/useGame.jsx';
import { slainSound } from '../../utils/Audio.js';
import Decorations from '../Decorations/Decorations.jsx';
import WallBorders from '../WallBorders.jsx';
import Sword from '../Models/Sword.jsx';
import Floor from '../Floor.jsx';

export default function SpinningSwords({ position = [0, 0, 0] }) {
  const { restart } = useGame((state) => state);
  const topSword = useRef();
  const middleSword = useRef();
  const bottomSword = useRef();
  const swords = [
    {
      ref: topSword,
      position: [0, 0, -1],
    },
    {
      ref: middleSword,
      position: [0, 0, -0.5],
    },
    {
      ref: bottomSword,
      position: [0, 0, 0],
    },
  ];
  const bushesPositions = [
    [1.3, 0, 1.6],
    [-1.5, 0, 1.4],
    [-1.6, 0, -1.6],
  ];
  const rocksPositions = [
    [1.9, 0, 1.8],
    [1.1, 0, 1.5],
    [-0.8, 0, 1.2],
    [-1, 0, -1.2],
    [1.4, 0, -1],
  ];
  const speed = 2;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const rotationRightToLeft = new Quaternion();
    rotationRightToLeft.setFromEuler(new Euler(Math.PI / 2, 0, time * speed));

    const rotationLeftToRight = new Quaternion();
    rotationLeftToRight.setFromEuler(new Euler(Math.PI / 2, 0, -time * speed));

    topSword.current.setNextKinematicRotation(rotationRightToLeft);
    middleSword.current.setNextKinematicRotation(rotationLeftToRight);
    bottomSword.current.setNextKinematicRotation(rotationRightToLeft);
  })

  return (
    <group position={position}>
      {swords.map((sword, index) => (
        <RigidBody
          key={'sword' + index}
          scale={1.3}
          ref={sword.ref}
          type='kinematicPosition'
          colliders={false}
          position-y={0.2}
          restitution={0.2}
          friction={0}
          onCollisionEnter={() => {
            slainSound.volume = 0.2
            slainSound.play();
          }}
        >
          <Sword position={sword.position} />
          <CuboidCollider args={[0.1, 0.7, 0.1]} position={[0, 0.6, sword.position[2]]} />
        </RigidBody>
      ))}
      <Decorations
        bushesPositions={bushesPositions}
        rocksPositions={rocksPositions}
      />
      <WallBorders />
      <Floor />
    </group>
  )
}
