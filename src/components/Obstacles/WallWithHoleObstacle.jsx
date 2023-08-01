import WallBorders from '../WallBorders.jsx';
import Floor from '../Floor.jsx';
import WallWithHole from '../Models/WallWithHole.jsx';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { hitSound } from '../../utils/Audio.js';

export default function WallWithHoleObstacle({ position = [0, 0, 0] }) {
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
