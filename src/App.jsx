import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { Html, KeyboardControls } from '@react-three/drei';
import { bgMusic } from './utils/Audio.js';
import Experince from './components/Experience'
import Interface from './components/Interface';

function Guide({ setGuideRead }) {
  return (
    <div className='guide'>
      <h1>Welcome</h1>
      <h2>TO CASTLE RUN</h2>
      <h3>A little guide for you</h3>
      <p>
        This castle is beautiful, but dangerous place. There is a treasure in the end, that waits you, but it won't be
        easy to get it!
      </p>
      {/*<p>Run through this big and dangerous castle to get its treasures.</p>*/}
      {/*<div className='screenshots'>*/}
      {/*  <img src='./pictures/treasure.png' />*/}
      {/*</div>*/}
      {/*<h3>Be aware!</h3>*/}
      {/*<p>*/}
      {/*  As mentioned earlier, the castle is a dangerous place! It will not give you its treasures so easily. There are*/}
      {/*  many obstacles that will complicate your run. Some of them are even deadly! So remember: don't touch the swords*/}
      {/*  and axes, otherwise they will cut you down and you will have to start your journey from the beginning.*/}
      {/*</p>*/}
      {/*<div className='screenshots'>*/}
      {/*  <img src='./pictures/swords.png' />*/}
      {/*  <img src='./pictures/axe.png' />*/}
      {/*</div>*/}
      {/*<h3>Set new records!</h3>*/}
      {/*<p>*/}
      {/*  You can run through the castle as much as you want to improve your time. The best one will be saved on the top*/}
      {/*  bar, so you can always see your record to feel satisfied, or to compete with others.*/}
      {/*</p>*/}
      {/*<div className='screenshots'>*/}
      {/*  <img src='./pictures/highScore.png' />*/}
      {/*</div>*/}
      <h2>Are you ready?</h2>
      <button onClick={() => {
        bgMusic.volume = 0.4;
        bgMusic.loop = true;
        bgMusic.play();
        setGuideRead(true);
      }}>Begin!
      </button>
    </div>
  );
}

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
  const [guideRead, setGuideRead] = useState(false);

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
