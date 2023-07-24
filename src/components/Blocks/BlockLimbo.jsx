import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';


export default function BlockLimbo({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  // timeOffset will help us to make different BlockLimbo go up and down differently, so they don't do it be simultaneously.
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const y = Math.sin(2.5 * time + timeOffset) + 1.15; // because of + 1.15, obstacle will never go under the floor

    obstacle.current.setNextKinematicTranslation({ x: position[0], y, z: position[2] });
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
