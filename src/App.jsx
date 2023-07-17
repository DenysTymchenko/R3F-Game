import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei';
import Experince from './components/Experience'

function App() {
  return (
    <KeyboardControls
      map={[
        {
          name: 'forward',
          keys: ['ArrowUp', 'KeyW'],
        },
        {
          name: 'backward',
          keys: ['ArrowDown', 'KeyS'],
        },
        {
          name: 'leftward',
          keys: ['ArrowLeft', 'KeyA'],
        },
        {
          name: 'rightward',
          keys: ['ArrowRight', 'KeyD'],
        },
        {
          name: 'jump',
          keys: ['Space'],
        },
      ]}
    >
      <Canvas shadows>
        <Experince />
      </Canvas>
    </KeyboardControls>
  )
}

export default App
