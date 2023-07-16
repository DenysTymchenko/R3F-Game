import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'
import Level from './Level'
import { Physics } from '@react-three/rapier'

export default function Experince() {
  return (
    <>
      <Physics debug>
        <Lights />
        <OrbitControls />
        <Level />
      </Physics>
    </>
  )
}
