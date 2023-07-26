import { RigidBody } from '@react-three/rapier';
import { boxGeometry, torusGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';
import { hitSound } from '../../utils/Audio';
import Floor from '../Floor.jsx';
import WallBorders from '../WallBorders.jsx';

export default function BlockTorus({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Torus position={[1.5, 0.3, 0]} />
      <Torus position={[0, 1.5, 0]} />
      <Torus position={[-1.5, 0.3, 0]} />
      <WallBorders />
      <Floor />
    </group>
  )
}

function Torus({ position }) {
  return (
    <RigidBody
      position={position}
      type='fixed'
      colliders='trimesh'
      restitution={0.2}
      fFriction={0}
      onCollisionEnter={() => hitSound.play()}
    >
      <mesh
        geometry={torusGeometry}
        material={obstacleMaterial}
        scale={0.15}
        castShadow
        receiveShadow
      />
    </RigidBody>
  )
}
