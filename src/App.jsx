import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { Html, KeyboardControls } from '@react-three/drei';
import Experince from './components/Experience'
import Interface from './components/Interface';

function Loader() {
  return (
    <Html transform className='loader-wrapper'>
      <span className='loader'>Load&nbsp;ng</span>
    </Html>
  )
}

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
      <Canvas shadows camera={{ near: 0.6, far: 100 }}>
        < Suspense fallback={<Loader />}>
          <Experince />
        </Suspense>
      </Canvas>
      <Interface />
    </KeyboardControls>
  )
}

export default App
