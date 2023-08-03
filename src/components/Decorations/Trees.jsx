import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { woodHitSound } from '../../utils/Audio.js';
import Tree from '../Models/Tree.jsx';

export default function Trees({ trees }) {
  return (
    <>
      {trees.map((tree, index) => (
        <RigidBody
          key={'tree' + index}
          position={tree.position}
          scale={tree.scale}
          rotation={tree.rotation}
          type='fixed'
          colliders={false}
          restitution={0.1}
          onCollisionEnter={() => {
            woodHitSound.volume = 0.2
            woodHitSound.play()
          }}
        >
          <Tree />
          {/*Wood*/}
          <CuboidCollider args={[0.3, 1.2, 0.4]} position={[-0.6, 1, -0.2]} />
        </RigidBody>
      ))}
    </>
  );
}
