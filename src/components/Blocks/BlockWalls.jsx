import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';
import { hitSound } from '../../utils/Audio';
import Floor from '../Floor.jsx';
import WallBorders from '../WallBorders.jsx';

export default function BlockWalls({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Wall position={[-1.3, 0.6, 0]} />
      <Wall position={[1.3, 0.6, 0]} />
      <WallBorders />
      <Floor />
    </group>
  )
}

function Wall({ position }) {
  return (
    <RigidBody
      position={position}
      type='fixed'
      restitution={0.2}
      fFriction={0}
      onCollisionEnter={() => hitSound.play()}
    >
      <mesh
        geometry={boxGeometry}
        material={obstacleMaterial}
        scale={[1.5, 1.5, 0.3]}
        castShadow
        receiveShadow
      />
    </RigidBody>
  )
}
