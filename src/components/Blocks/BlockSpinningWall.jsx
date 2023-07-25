import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Euler, Quaternion } from 'three';
import { boxGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';
import { hitSound } from '../../utils/Audio';

export default function BlockSpinningWall({ position = [0, 0, 0], direction = 'left' }) {
  const obstacle = useRef();

  useFrame((state) => {
    let time = state.clock.getElapsedTime();
    if (direction === 'right') time *= -1;

    const rotation = new Quaternion();
    rotation.setFromEuler(new Euler(0, time * 4.5, 0));

    obstacle.current.setNextKinematicRotation(rotation);
  });

  return (
    <group position={position}>
      {/*Floor*/}
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        scale={[4, 0.2, 4]}
        position-y={-0.1}
        receiveShadow
      />

      {/*Obstacle*/}
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        position-y={0.6}
        restitution={0.2}
        friction={0}
        onContactForce={() => {
          hitSound.currentTime = 0;
          hitSound.play();
        }}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3, 1.5, 0.2]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  )
}
