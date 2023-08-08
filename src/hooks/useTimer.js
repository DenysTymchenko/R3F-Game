import { useEffect, useState } from 'react';
import { addEffect } from '@react-three/fiber';
import useGame from '../store/useGame';
import { controller } from '../utils/api.js';

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

  if (!state.bestTime || parseFloat(elapsedTime) < parseFloat(state.bestTime)) {
    state.setNewBestTime(elapsedTime, state);
  }
}

// async function AddToHighScoresList(score, state) {
//   const highScores = await controller('GET', 'Highscores');
//
//   if (score < highScores[4]?.score) {
//     const newScore = {
//       'name': state.playerName,
//       'score': score,
//     };
//
//     highScores.push(newScore);
//     highScores.sort((a, b) => a.score - b.score);
//     highScores.length = 5;
//
//     highScores.forEach(async (highScore, index) => {
//       highScore.id = index + 1;
//       await controller('PUT', `Highscores/${index + 1}`, highScore);
//     });
//   }
// }

