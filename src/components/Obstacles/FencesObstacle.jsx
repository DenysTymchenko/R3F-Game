import { RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';
import Fence from '../Models/Fence.jsx';
import WallBorders from '../WallBorders.jsx';
import Floor from '../Floor.jsx';

export default function FencesObstacle({ position = [0, 0, 0] }) {
  const fencesPositions = [
    [1.05, 0, 1.8], // Front
    [-1.05, 0, 0], // Middle
    [1.05, 0, -1.8], // Back
  ];

  return (
    <group position={position}>
      {fencesPositions.map((position, index) => (
        <RigidBody
          key={index}
          position={position}
          scale={[0.75, 1, 1]}
          type='fixed'
          restitution={0.2}
          friction={0}
          onCollisionEnter={() => hitSound.play()}
        >
          <Fence />
        </RigidBody>
      ))}
      <WallBorders />
      <Floor />
    </group>
  )
}
