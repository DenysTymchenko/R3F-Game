import { Fragment } from 'react';
import { RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';

export default function Trees({ trees }) {
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
  );
}
