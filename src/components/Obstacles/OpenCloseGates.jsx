import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { Euler, Quaternion } from 'three';
import { hitSound } from '../../utils/Audio.js';
import Decorations from '../Decorations/Decorations.jsx';
import WallBorders from '../WallBorders.jsx';
import Gate from '../Models/Gate.jsx';
import Wall from '../Models/Wall.jsx';
import Crate from '../Models/Crate.jsx';
import Floor from '../Floor.jsx';

export default function OpenCloseGates({ position = [0, 0, 0] }) {
  const rocksPositions = [
    [1, 0, 1],
    [-1, 0, 0],
  ];

  return (
    <group position={position}>
      <Gates />
      <Walls />
      <Crates />
      <Decorations rocksPositions={rocksPositions} />
      <WallBorders />
      <Floor />
    </group>
  )
}

function Gates() {
  const frontGate = useRef();
  const backGate = useRef();
  const gates = [
    {
      ref: frontGate,
      position: [-2, 0.75, 1.9],
    },
    {
      ref: backGate,
      position: [0.4, 0.75, -1.9],
    },
  ];

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const speed = 4;

    const frontGateSwingAngle = (Math.sin(time * speed) + 1) / 2; // from 1 to 0
    const frontGateRotation = new Quaternion();
    frontGateRotation.setFromEuler(new Euler(0, frontGateSwingAngle, 0));
    frontGate.current.setNextKinematicRotation(frontGateRotation);

    const backGateSwingAngle = -(Math.sin(time * speed) + 1) / 2; // from 1 to 0
    const backGateRotation = new Quaternion();
    backGateRotation.setFromEuler(new Euler(0, backGateSwingAngle, 0));
    backGate.current.setNextKinematicRotation(backGateRotation);
  });

  return (
    <>
      {gates.map((gate, index) => (
        <RigidBody
          key={'gates' + index}
          ref={gate.ref}
          position={gate.position}
          scale={[0.8, 0.59, 1]}
          type='kinematicPosition'
          colliders={false}
          restitution={0.2}
          onCollisionEnter={() => hitSound.play()}
        >
          <Gate />
          <CuboidCollider args={[0.9, 1.5, 0.1]} position={[1, 0, 0]} />
        </RigidBody>
      ))}
    </>
  )
}

function Walls() {
  const wallsPositions = [
    [0.8, 0, 1.9],
    [-0.8, 0, -1.9],
  ];

  return (
    <>
      {wallsPositions.map((position, index) => (
        <RigidBody
          key={'wall' + index}
          position={position}
          scale={[0.6, 0.67, 0.6]}
          type='fixed'
          colliders={false}
          restitution={0.2}
          friction={0}
          onCollisionEnter={() => hitSound.play()}
        >
          <Wall />
          <CuboidCollider args={[2, 1, 0.15]} position={[0, 1.4, 0]} />
        </RigidBody>
      ))}
    </>
  );
}

function Crates() {
  const createsPositions = [
    [-1.6, 0.4, -1.5], // left
    [-0.85, 0.4, -1.5], // right bottom
    [-0.85, 1.1, -1.5], // right top
  ];

  return (
    <>
      {createsPositions.map((position, index) => (
        <RigidBody
          key={'crate' + index}
          position={position}
          scale={0.75}
          type='fixed'
        >
          <Crate />
        </RigidBody>
      ))}
    </>
  )
}
