import { Fragment } from 'react';
import { RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';
import FloorWithHoles from '../Models/FloorWithHoles.jsx';
import Tree from '../Models/Tree.jsx';
import Tree2 from '../Models/Tree2.jsx';
import Shovel from '../Models/Shovel.jsx';
import WallBorders from '../WallBorders.jsx';

export default function ({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <RigidBody
        position={[0, 0.1, 0]}
        type='fixed'
        colliders='trimesh'
      >
        <FloorWithHoles />
      </RigidBody>
      <Shovels />
      <Trees />
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

function Trees() {
  const trees = [
    {
      position: [0, 0.1, 0],
      scale: 0.15,
      component: <Tree />
    },
    {
      position: [-1, 0.1, 1.5],
      scale: [0.15, 0.2, 0.15],
      component: <Tree2 />
    },
    {
      position: [1, 0.1, 1.8],
      scale: 0.1,
      component: <Tree2 />
    },
  ];

  return (
    <>
      {trees.map((tree, index) => (
        <RigidBody
          key={index}
          position={tree.position}
          scale={tree.scale}
          type='fixed'
          colliders='trimesh'
          restitution={0.1}
          onCollisionEnter={() => hitSound.play()}
        >
          <Fragment>{tree.component}</Fragment>
        </RigidBody>
      ))}
    </>
  )
}
