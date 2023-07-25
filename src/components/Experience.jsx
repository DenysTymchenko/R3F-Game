import { Physics } from '@react-three/rapier'
import Lights from './Lights'
import Level from './Level'
import Ball from './Ball'
import useGame from '../store/useGame'
import { bgMusic } from '../utils/Audio'

export default function Experince() {
  const obstaclesCount = useGame((state) => state.obstaclesCount);
  
  return (
    <>
      <Physics>
        <Lights />
        <Level obstaclesCount={obstaclesCount} />
        <Ball />
      </Physics>
    </>
  )
}
