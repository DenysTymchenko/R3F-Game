import { RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';
import Decorations from '../Decorations/Decorations.jsx';
import WallBorders from '../WallBorders.jsx';
import Floor from '../Floor.jsx';
import Tree from '../Models/Tree.jsx';
import Tree2 from '../Models/Tree2.jsx';
import Fence from '../Models/Fence.jsx';

export default function FencesObstacle({ position = [0, 0, 0] }) {
  const fencesPositions = [
    [1.05, 0, 1.8], // Front
    [-1.05, 0, 0], // Middle
    [1.05, 0, -1.8], // Back
  ];
  const trees = [
    {
      position: [-1.4, 0.1, 1.8],
      scale: 3,
      component: <Tree />
    },
    {
      position: [-1, 0.1, -0.7],
      scale: 0.1,
      component: <Tree2 />
    },
  ]
  const bushesPositions = [
    [1.4, 0, 0.7],
    [-0.4, 0, -0.6],
  ];
  const rocksPositions = [
    [-0.4, 0, 1.2],
    [1.4, 0, -0.2],
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
