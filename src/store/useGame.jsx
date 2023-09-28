import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware'
import { bgMusic, finishSound, startSound } from '../utils/Audio';
import { controller } from '../utils/api.js';

export default create(subscribeWithSelector((set) => {
  return {
    playerName: localStorage.getItem('playerName'),
    phase: 'ready',
    startTime: 0,
    endTime: 0,
    bestTime: localStorage.getItem('bestTime'),
    musicMuted: false,
    menuIsOpened: true,

    setPlayerName(name) {
      localStorage.setItem('playerName', name);

      set(() => {
        return { playerName: name }
      });
    },

    toggleMenuIsOpened() {
      set((state) => {
        return { menuIsOpened: !state.menuIsOpened }
      });
    },

    toggleMusic(value) {
      if (value) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      } else {
        bgMusic.volume = 0.2;
        bgMusic.loop = true;
        bgMusic.play();
      }

      set(() => {
        return { musicMuted: value }
      });
    },

    start() {
      set((state) => {
        if (state.phase === 'ready') {
          startSound.currentTime = 0;
          startSound.volume = 0.5;
          startSound.play();

          if (!state.musicMuted) {
            setTimeout(() => {
              bgMusic.volume = 0.2;
              bgMusic.loop = true;
              bgMusic.play();
            }, 1000)
          }

          return {
            phase: 'playing',
            startTime: Date.now(),
          }
        } else {
          return {}
        }
      });
    },

    restart() {
      set((state) => {
        if (state.phase !== 'restart') {
          return { phase: 'ready' }
        } else {
          return {}
        }
      });
    },

    end() {
      set((state) => {
        if (state.phase === 'playing') {
          finishSound.volume = 0.5;
          finishSound.play();

          return {
            phase: 'ended',
            endTime: Date.now(),
          }
        } else {
          return {}
        }
      });
    },

    setNewBestTime(newBest) {
      localStorage.setItem('bestTime', newBest);
      this.addToHighScoresList(newBest);

      set(() => {
        return {
          bestTime: newBest
        }
      })
    },

    async addToHighScoresList(score) {
      const highScores = await controller('GET', 'Highscores');
      console.log(score);
      console.log(highScores);

      if (parseFloat(score) < parseFloat(highScores[4]?.score)) {
        highScores.push({
          'name': this.playerName,
          'score': parseFloat(score),
        });

        highScores.map((highScore, index) => {
          if (highScore.name === this.playerName && index !== 5) {
            if (parseFloat(score) < parseFloat(highScore.score)) {
              highScore.score = parseFloat(score);
            }
            highScores.length = 5;
          }
        });

        for (let i = 0; i < highScores.length; i++) {
          for (let j = i + 1; j < highScores.length; j++) {
            if (highScores[i].score > highScores[j].score) {
              const temp = highScores[j];
              highScores[j] = highScores[i];
              highScores[i] = temp;
            }
          }
        }

        highScores.length = 5;

        for (let i = 0; i < highScores.length; i++) {
          highScores[i].id = i + 1;
          await controller('PUT', `Highscores/${i + 1}`, highScores[i]);
        }
      }
    },
  };
}));
