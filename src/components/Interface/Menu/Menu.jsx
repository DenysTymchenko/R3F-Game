import { useState } from 'react';
import classNames from 'classnames';
import useGame from '../../../store/useGame.jsx';
import HighScores from './HighScores.jsx';
import ChangeUsernameForm from './ChangeUsernameForm.jsx';

export default function Menu() {
  const { musicMuted, toggleMusic, toggleMenuIsOpened } = useGame((state) => state);
  const [showHighScores, setShowHighScores] = useState(false);
  const [changeUsername, setChangeUsername] = useState(false);

  return (
    <>
      <div className={classNames('menu', ((showHighScores || changeUsername) && 'hidden'))}>
        <div className='menu-item highscores-btn' onClick={() => setShowHighScores(true)}>
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
        <div
          className='menu-item'
          onClick={() => {
            // triggerUsernameChanging();
            setChangeUsername(true);
          }}>
          Change username
        </div>
      </div>
      {showHighScores && <HighScores setShowHighScores={setShowHighScores} />}
      {changeUsername && <ChangeUsernameForm setChangeUsername={setChangeUsername} />}
    </>
  )
}
