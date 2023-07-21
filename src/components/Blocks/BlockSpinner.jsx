import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Euler, Quaternion } from 'three';
import { boxGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';

export default function BlockSpinner({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  // Setting speed value from 1 to 3.
  // Then, depending on Math.random result, multiplying speed value to 1 or -1.
  // By doing this multiplying we randobly set spinning direction (from right to left or from left to right).
  const [speed] = useState(() => Math.floor(Math.random() * 3 + 1) * (Math.random() < 0.5 ? -1 : 1));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const rotation = new Quaternion();
    rotation.setFromEuler(new Euler(0, time * speed, 0));

    obstacle.current.setNextKinematicRotation(rotation);
  })

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
      <RigidBody type='kinematicPosition' ref={obstacle} position-y={0.2} restitution={0.2} friction={0}>
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  )
}
