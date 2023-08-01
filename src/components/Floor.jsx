import { boxGeometry } from '../utils/Geometries.js';
import { floor2Material } from '../utils/Materials.js';
import { RigidBody } from '@react-three/rapier';

export default function Floor() {
  return (
    <RigidBody type='fixed'>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </RigidBody>
  )
}
