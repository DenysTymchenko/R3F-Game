import { RigidBody } from '@react-three/rapier';
import FloorWithHoles from '../Models/FloorWithHoles.jsx';
import Decorations from '../Decorations/Decorations.jsx';
import WallBorders from '../WallBorders.jsx';
import Shovel from '../Models/Shovel.jsx';

export default function ({ position = [0, 0, 0] }) {
  const trees = [
    {
      position: [1.3, 0.1, 0],
      scale: [0.3, 0.35, 0.3],
      rotation: [0, 0, 0],
    },
    {
      position: [-1.2, 0.1, 1.5],
      scale: 0.25,
      rotation: [0, Math.PI / 2, 0],
    },
  ];
  const bushesPositions = [
    [-1.2, 0, -1.3],
  ];
  const rocksPositions = [
    [-0.2, 0, 1],
    [1, 0, 0],
  ];

  return (
    <group position={position}>
      <RigidBody
        position={[0, 0.1, 0]}
        type='fixed'
        colliders='trimesh'
      >
        <FloorWithHoles />
      </RigidBody>
      <Decorations
        trees={trees}
        bushesPositions={bushesPositions}
        rocksPositions={rocksPositions}
      />
      <Shovels />
      <WallBorders />
    </group>
  )
}

function Shovels() {
  const shovels = [
    {
      // Front
      position: [-1, 0.1, 0.5],
      rotationY: Math.PI / 2 - 20
    },
    {
      // Middle
      position: [1, 0.1, 0.5],
      rotationY: -Math.PI / 2 + 10
    },
    {
      // Back
      position: [0.4, 0.1, -2],
      rotationY: Math.PI / 2 + 5
    },
  ];

  return (
    <>
      {shovels.map((shovel, index) => (
        <Shovel
          key={index}
          position={shovel.position}
          rotation-y={shovel.rotationY}
        />
      ))}
    </>
  );
}
