import { useEffect, useState } from 'react';
import { addEffect } from '@react-three/fiber';
import useGame from '../store/useGame';

export default function useTimer() {
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
        handleUpdateBestTime(elapsedTime, state)
      }

      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);
      setTimerTime(elapsedTime)
    })
  }, []);

  return timer;
}

function handleUpdateBestTime(elapsedTime, state) {
  elapsedTime /= 1000;
  elapsedTime = elapsedTime.toFixed(2);
  
  if(!state.bestTime || elapsedTime < state.bestTime) {
    console.log('check');
    state.setNewBestTime(elapsedTime);
  }
}
