import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'

export default function Experince() {
  return (
    <>
      <OrbitControls />
      <Lights />

      <mesh
        position-x={-2}
        castShadow
      >
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>

      <mesh
        scale={1.5}
        position-x={2}
        castShadow
      >
        <boxGeometry />
        <meshStandardMaterial color='purple' />
      </mesh>

      <mesh
        scale={10}
        position-y={-1}
        rotation-x={-Math.PI / 2}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial color='green' />
      </mesh>
    </>
  )
}
