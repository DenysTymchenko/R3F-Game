import { boxGeometry } from '../utils/Geometries.js';
import { floor2Material } from '../utils/Materials.js';

export default function Floor() {
  return (
    <mesh
      geometry={boxGeometry}
      material={floor2Material}
      scale={[4, 0.2, 4]}
      position-y={-0.1} // Placing floor at y = 0
      receiveShadow
    />
  )
}
