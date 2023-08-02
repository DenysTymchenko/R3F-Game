import { boxGeometry } from '../utils/Geometries.js';
import { lime } from '../utils/Materials.js';
import { RigidBody } from '@react-three/rapier';

export default function FloorLighter() {
  return (
    <RigidBody type='fixed'>
      <mesh
        geometry={boxGeometry}
        material={lime}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </RigidBody>
  )
}
