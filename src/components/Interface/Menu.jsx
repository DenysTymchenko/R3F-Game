import { useState } from 'react';
import classNames from 'classnames';
import useGame from '../../store/useGame.jsx';
import HighScores from './HighScores.jsx';

export default function Menu() {
  const { musicMuted, toggleMusic } = useGame((state) => state);
  const [showHighScores, setShowHighScores] = useState(false);

  return (
    <>
      <div className={classNames('menu', showHighScores && 'hidden')}>
        <div className='menu-item highscores-btn' onClick={() => setShowHighScores(!showHighScores)}>
          High Scores
        </div>
        <div className='menu-item mute-music-btn' onClick={() => toggleMusic(!musicMuted)}>
          Music:
          <img
            src={musicMuted ? './svg/musicOff.svg' : './svg/musicOn.svg'}
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
