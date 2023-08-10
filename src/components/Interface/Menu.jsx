import { useState } from 'react';
import { bgMusic } from '../../utils/Audio.js';
import HighScores from './HighScores.jsx';
import classNames from 'classnames';

export default function Menu() {
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
      <div className={classNames('menu', showHighScores && 'hidden')}>
        <div className='menu-item highscores-btn' onClick={() => setShowHighScores(!showHighScores)}>
          High Scores
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
      {}
    </>
  )
}
