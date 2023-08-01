import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware'
import { bgMusic, finishSound, startSound } from '../utils/Audio';

export default create(subscribeWithSelector((set) => {
  return {
    phase: 'ready',
    startTime: 0,
    endTime: 0,
    bestTime: localStorage.getItem('bestTime'),

    start() {
      set((state) => {
        if (state.phase === 'ready') {
          startSound.currentTime = 0;
          startSound.play();

          // setTimeout(() => {
          //   bgMusic.loop = true;
          //   bgMusic.play();
          // }, 1000)

          return {
            phase: 'playing',
            startTime: Date.now(),
          }
        }
        else {
          return {}
        }
      });
    },

    restart() {
      set((state) => {
        if (state.phase !== 'restart') {
          return { phase: 'ready' }
        }
        else {
          return {}
        }
      });
    },

    end() {
      set((state) => {
        if (state.phase === 'playing') {
          finishSound.play();

          return {
            phase: 'ended',
            endTime: Date.now(),
          }
        }
        else {
          return {}
        }
      });
    },

    setNewBestTime(newBest) {
      localStorage.setItem('bestTime', newBest);

      set(() => {
        return {
          bestTime: newBest
        }
      })
    }
  };
}));
