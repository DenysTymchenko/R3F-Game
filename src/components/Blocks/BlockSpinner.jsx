import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Euler, Quaternion } from 'three';
import { boxGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';
import { hitSound } from '../../utils/Audio';
import Floor from '../Floor.jsx';
import WallBorders from '../WallBorders.jsx';

export default function BlockSpinner({ position = [0, 0, 0], direction = 'left' }) {
  const obstacle = useRef();

  useFrame((state) => {
    let time = state.clock.getElapsedTime();
    if (direction === 'right') time *= -1;

    const rotation = new Quaternion();
    rotation.setFromEuler(new Euler(0, time * 4, 0));

    obstacle.current.setNextKinematicRotation(rotation);
  })

  return (
    <group position={position}>
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        position-y={0.2}
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
