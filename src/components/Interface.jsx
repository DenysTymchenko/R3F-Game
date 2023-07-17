import { useKeyboardControls } from '@react-three/drei';
import useGame from '../store/useGame';
import { addEffect } from '@react-three/fiber';
import { useEffect, useState } from 'react';

export default function Interface() {
  const { phase, restart } = useGame((state) => state);
  const controls = useKeyboardControls((state) => state);
  const [timer, setTimerTime] = useState(0.00); 

  useEffect(() => {
    // will be called after useFrame call
    addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;
      if (state.phase === 'playing') {
        elapsedTime = Date.now() - state.startTime;
      } else if (state.phase === 'ended') {
        elapsedTime = state.endTime - state.startTime;
      }

      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);
      setTimerTime(elapsedTime)
    })
  }, [])

  return (
    <div className='interface'>
      <div className='time'>{timer}</div>
      {phase === 'ended' && <div className='restart' onClick={restart}>Restart</div>}
      <div className="controls">
        <div className='wrapper'>
          <div className={`key ${controls.forward ? 'active' : ''}`}></div>
        </div>
        <div className='wrapper'>
          <div className={`key ${controls.leftward ? 'active' : ''}`}></div>
          <div className={`key ${controls.backward ? 'active' : ''}`}></div>
          <div className={`key ${controls.rightward ? 'active' : ''}`}></div>
        </div>
        <div className='wrapper'>
          <div className={`key large ${controls.jump ? 'active' : ''}`}></div>
        </div>
      </div>
    </div>
  );
}
