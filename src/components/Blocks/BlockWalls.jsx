import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';
import { hitSound } from '../../utils/Audio';

export default function BlockWalls({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/*Floor*/}
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        scale={[4, 0.2, 4]}
        position-y={-0.1}
        receiveShadow
      />

      <Wall position={[-1.3, 0.6, 0]} />
      <Wall position={[1.3, 0.6, 0]} />
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
