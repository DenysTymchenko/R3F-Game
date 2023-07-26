import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';
import { hitSound } from '../../utils/Audio';
import Floor from '../Floor.jsx';
import WallBorders from '../WallBorders.jsx';

export default function BlockLeftRightWall({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  // timeOffset will help us to make different BlockAxe go left and right differently, so they don't do it be simultaneously.
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const x = Math.sin(5 * time + timeOffset) * 1.25 // multiplying by 1.25 makes obstacle go from one edge to enother perfectly

    obstacle.current.setNextKinematicTranslation({ x, y: position[1] + 0.75, z: position[2] });
  })

  return (
    <group position={position}>
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        restitution={0.2}
        friction={0}
        onCollisionEnter={() => hitSound.play()}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[1.5, 1.5, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
      <WallBorders />
      <Floor />
    </group>
  )
}
