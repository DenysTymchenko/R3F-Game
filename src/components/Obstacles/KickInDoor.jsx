import { useState } from 'react';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';
import WoodenDoor from '../Models/WoodenDoor.jsx';
import Wall from '../Models/Wall.jsx';
import Decorations from '../Decorations/Decorations.jsx';
import WallBorders from '../WallBorders.jsx';
import Floor from '../Floor.jsx';

export default function KickInDoor({ position = [0, 0, 0] }) {
  const bushesPositions = [
    [-1.4, 0, 0],
    [1.4, 0, 1],
    [1, 0, -1],
  ];
  const rocksPositions = [
    [-0.7, 0, 0],
    [-0.9, 0, 0.5],
    [1.6, 0, -1],
  ];
  const [rigidBodyType, setRigidBodyType] = useState('fixed');
  const [doorKicked, setDoorKicked] = useState(false);

  const kickDoor = () => {
    hitSound.play();
    setRigidBodyType('dynamic')
    setTimeout(() => {
      setRigidBodyType('fixed')
    }, 3000);
    setDoorKicked(true);
  }

  return (
    <group position={position}>
      <RigidBody
        position={[0, 0.7, 1.95]}
        scale={[0.75, 0.75, 0.5]}
        type={rigidBodyType}
        restitution={0.2}
        colliders={false}
        onCollisionEnter={() => {
          if (!doorKicked) kickDoor();
        }}
      >
        <WoodenDoor />
        <CuboidCollider args={[0.8, 1.2, 0.2]} position={[0, 0.2, 0]} />
      </RigidBody>
      <Walls />
      <Decorations bushesPositions={bushesPositions} rocksPositions={rocksPositions} />
      <WallBorders />
      <Floor />
    </group>
  )
}

function Walls() {
  const wallsPositions = [
    // Right
    [1.35, 0, 1.9],
    // Left
    [-1.35, 0, 1.9],
  ]
  return (
    <>
      {wallsPositions.map((positions, index) => (
        <RigidBody
          key={'wall' + index}
          position={positions}
          scale={[0.35, 0.75, 1]}
          type='fixed'
          colliders={false}
        >
          <Wall />
          <CuboidCollider args={[2, 1.4, 0.2]} position={[0, 1, 0]} />
        </RigidBody>
      ))}
    </>
  )
}
