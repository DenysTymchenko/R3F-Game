import { boxGeometry } from '../utils/Geometries.js';
import { RigidBody } from '@react-three/rapier';
import { limegreen } from '../utils/Materials.js';

export default function Floor() {
  return (
    <RigidBody type='fixed'>
      <mesh
        geometry={boxGeometry}
        material={limegreen}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </RigidBody>
  )
}
