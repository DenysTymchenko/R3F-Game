import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { Html, KeyboardControls } from '@react-three/drei';
import Experince from './components/Experience'
import Interface from './components/Interface/Interface.jsx';

function Loader() {
  return (
    <Html transform>
      <div className='loader-wrapper'>
        <span className='loader'></span>
      </div>
    </Html>
  )
}

function App() {
  const currentVersion = '1.0.0';
  const savedVersion = localStorage.getItem('websiteVersion');

  if (savedVersion !== currentVersion) {
    localStorage.clear();
    localStorage.setItem('websiteVersion', currentVersion);
  }

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
      <Canvas shadows camera={{ near: 0.6, far: 40 }}>
        <Suspense fallback={<Loader />}>
          <Experince />
        </Suspense>
      </Canvas>
      <Interface />
    </KeyboardControls>
  )
}

export default App
