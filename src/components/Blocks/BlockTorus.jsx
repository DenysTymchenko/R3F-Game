import { RigidBody } from '@react-three/rapier';
import { boxGeometry, torusGeometry } from '../../utils/Geometries';
import { floor2Material, obstacleMaterial } from '../../utils/Materials';

export default function BlockTorus({ position = [0, 0, 0] }) {
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

      <Torus position={[1.5, 0.3, 0]} />
      <Torus position={[0, 1.5, 0]} />
      <Torus position={[-1.5, 0.3, 0]} />
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
