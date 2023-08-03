import { Float, Text3D } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import FloorLighter from '../FloorLighter.jsx';
import WallBorders from '../WallBorders.jsx';
import Wall from '../Models/Wall.jsx';
import TreasureChest from '../Models/TreasureChest.jsx';
import Decorations from '../Decorations/Decorations.jsx';
import { gold } from '../../utils/Materials.js';


export default function BlockEnd({ position = [0, 0, 0] }) {
  const trees = [
    {
      position: [-1, 0, 1.5],
      rotation: [0, Math.PI / 2, 0],
      scale: 0.4,
    },
    {
      position: [1.3, 0, -1],
      rotation: [0, - Math.PI / 2, 0],
      scale: 0.3,
    }
  ]

  const rocksPositions = [
    [1.4, 0, 0],
    [0.8, 0, 0.7],
    [-0, 0, 1.3],
    [-1, 0, 0.5],
    [1, 0, -0.7],
  ];

  const bushesPositions = [
    [1.5, 0, 1.5],
    [-1.5, 0, -1.5],
  ]

  return (
    <group position={position}>
      <Float>
        <Text3D
          font='./fonts/Bebas Neue_Regular.json'
          scale={0.5}
          position={[-0.5, 2, 0]}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={gold}
        >
          Finish!!!
        </Text3D>
      </Float>

      <RigidBody
        rotation-y={Math.PI * 1.2}
        type='fixed'
        colliders={false}
      >
        <TreasureChest />
        <CuboidCollider args={[0.9, 0.3, 0.5]} position={[0, 0.4, 0]} />
      </RigidBody>
      <WallBorders /> {/*Left and right walls*/}
      <Wall position={[0, 0, -2]} /> {/*End wall*/}
      <Decorations
        trees={trees}
        rocksPositions={rocksPositions}
        bushesPositions={bushesPositions}
      />
      <FloorLighter />
    </group>
  );
}
