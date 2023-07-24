import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) => {
  return {
    phase: 'ready',
    startTime: 0,
    endTime: 0,

    start() {
      set((state) => {
        if (state.phase === 'ready') {
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
  };
}));
