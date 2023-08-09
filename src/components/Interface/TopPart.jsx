import useGame from '../../store/useGame.jsx';
import useTimer from '../../hooks/useTimer.js';
import HighScores from './HighScores.jsx';
import { useState } from 'react';
import { bgMusic } from '../../utils/Audio.js';

export default function TopPart() {
  const { restart, bestTime } = useGame((state) => state);
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const timer = useTimer();

  return (
    <>
      <div className='top-part'>
        <div className='left'>
          <p className='timer'>Current: {timer}</p>
          <p className='best-time'>Best: {bestTime ? bestTime : '-'}</p>
        </div>
        <div className='right'>
          <p className='restart-btn' onClick={restart}>Restart</p>
          <img
            className='menu-btn'
            onClick={() => setMenuIsOpened(!menuIsOpened)}
            src={menuIsOpened ? './svg/menuOpened.svg' : './svg/menuClosed.svg'}
            alt='open menu'
            width={window.innerWidth > 425 ? '32px' : '24.8px'}
            height={window.innerWidth > 425 ? '32px' : '24.8px'}
          />
        </div>
      </div>
      {menuIsOpened && <Menu />}
    </>
  )
}

function Menu() {
  const [showHighScores, setShowHighScores] = useState(false);
  const [musicIsMuted, setMusicIsMuted] = useState(false);

  const toggleMusic = () => {
    setMusicIsMuted(!musicIsMuted);
    if (!musicIsMuted) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    } else {
      bgMusic.volume = 0.2;
      bgMusic.loop = true;
      bgMusic.play();
    }
  }

  return (
    <>
      <div className='menu'>
        <div className='menu-item highscores-btn' onClick={() => setShowHighScores(!showHighScores)}>
          {showHighScores ? 'Close' : 'High Scores'}
        </div>
        <div className='menu-item mute-music-btn' onClick={() => toggleMusic()}>
          Music:
          <img
            src={musicIsMuted ? './svg/musicOff.svg' : './svg/musicOn.svg'}
            alt='open menu'
            width='32px'
            height='32px'
          />
        </div>
        <div className='menu-item'>Change username</div>
      </div>
      {showHighScores && <HighScores setShowHighScores={setShowHighScores} />}
    </>
  )
}
