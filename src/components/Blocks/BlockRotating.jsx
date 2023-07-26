import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';
import { Euler, Quaternion } from 'three';
import { hitSound } from '../../utils/Audio';
import WallBorders from '../WallBorders.jsx';
import Floor from '../Floor.jsx';

export default function BlockRotating({ position = [0, 0, 0], direction = 'left' }) {
  const obstacle = useRef();

  useFrame((state) => {
    let time = state.clock.getElapsedTime();
    if (direction === 'right') time *= -1;

    const rotation = new Quaternion();
    rotation.setFromEuler(new Euler(0, 0, time * 4));

    obstacle.current.setNextKinematicRotation(rotation);
  })

  return (
    <group position={position}>
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        position-y={1.5}
        restitution={0.2}
        friction={0}
        onCollisionEnter={() => hitSound.play()}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
      <WallBorders />
      <Floor />
    </group>
  )
}
