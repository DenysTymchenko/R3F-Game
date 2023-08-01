import { boxGeometry } from '../utils/Geometries.js';
import { floor1Material } from '../utils/Materials.js';
import { RigidBody } from '@react-three/rapier';

export default function FloorDarker() {
  return (
    <RigidBody type='fixed'>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </RigidBody>
  )
}
