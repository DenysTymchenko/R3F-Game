import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'
import Level from './Level'
import { Physics } from '@react-three/rapier'
import Player from './Player'
import useGame from '../store/useGame'

export default function Experince() {
  const obstaclesCount = useGame((state) => state.obstaclesCount);

  return (
    <>
      <Physics>
        <Lights />
        <Level obstaclesCount={obstaclesCount} />
        <Player />
      </Physics>
    </>
  )
}
