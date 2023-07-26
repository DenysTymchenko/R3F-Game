import { ConeCollider, RigidBody } from '@react-three/rapier';
import { boxGeometry, coneGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';
import { hitSound } from '../../utils/Audio';

export default function BlockBumps({ position = [0, 0, 0] }) {
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

      {/*Obstacles*/}
      {/*Back*/}
      <Bump position={[-1.5, 0.2, -1]} />
      <Bump position={[0, 0.2, -1]} />
      <Bump position={[1.5, 0.2, -1]} />
      {/*Middle*/}
      <Bump position={[-1.5, 0.2, 0]} />
      <Bump position={[0, 0.2, 0]} />
      <Bump position={[1.5, 0.2, 0]} />
      {/*Forward*/}
      <Bump position={[-1.5, 0.2, 1]} />
      <Bump position={[0, 0.2, 1]} />
      <Bump position={[1.5, 0.2, 1]} />
    </group>
  )
}

function Bump({ position }) {
  return (
    <RigidBody
      position={position}
      type='fixed'
      colliders={false}
      restitution={0}
      fFriction={-5}
      onCollisionEnter={() => hitSound.play()}
    >
      <mesh
        geometry={coneGeometry}
        material={obstacleMaterial}
        castShadow
        receiveShadow
      />
      <ConeCollider args={[0.3, 0.3]} />
    </RigidBody>
  )
}
