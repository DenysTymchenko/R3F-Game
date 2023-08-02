import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';
import Decorations from '../Decorations/Decorations.jsx';
import WallBorders from '../WallBorders.jsx';
import WallWithHole from '../Models/WallWithHole.jsx';
import Floor from '../Floor.jsx';

export default function WallWithHoleObstacle({ position = [0, 0, 0] }) {
  const trees = [
    {
      position: [-0.8, 0.1, 1],
      scale: 0.3,
    },
    {
      position: [1.1, 0.1, 1.5],
      scale: 0.25,
      rotation: [0, Math.PI / 2, 0]
    },
  ];
  const bushesPositions = [
    [1.5, 0, 1.6],
    [-1.5, 0, 1.2],
  ];
  const rocksPositions = [
    [1.3, 0, -1.3],
    [-1, 0, -1.1],
    [0, 0, -0.5],
  ];

  return (
    <group position={position}>
      <RigidBody
        scale={[1, 0.6, 0.2]}
        type='fixed'
        colliders={false}
        restitution={0.2}
        onCollisionEnter={() => hitSound.play()}
      >
        <WallWithHole />
        <Collider />
      </RigidBody>
      <Decorations
        trees={trees}
        bushesPositions={bushesPositions}
        rocksPositions={rocksPositions}
      />
      <WallBorders />
      <Floor />
    </group>
  )
}

function Collider() {
  return (
    <>
      {/*Top*/}
      <CuboidCollider args={[2, 0.75, 1]} position={[0, 3, 0]} />
      {/*Right*/}
      <CuboidCollider args={[0.5, 0.65, 1]} position={[1.3, 1.6, 0]} />
      {/*Left*/}
      <CuboidCollider args={[0.4, 0.65, 1]} position={[-1.4, 1.6, 0]} />
      {/*Bottom*/}
      <CuboidCollider args={[2, 0.5, 1]} position={[0, 0.5, 0]} />
    </>
  )
}
