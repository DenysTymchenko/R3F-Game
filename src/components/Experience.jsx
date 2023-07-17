import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'
import Level from './Level'
import { Physics } from '@react-three/rapier'
import Player from './Player'

export default function Experince() {
  return (
    <>
      <Physics>
        <Lights />
        <Level />
        <Player />
      </Physics>
    </>
  )
}
