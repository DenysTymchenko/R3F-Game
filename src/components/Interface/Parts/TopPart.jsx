import useGame from '../../../store/useGame.jsx';
import useTimer from '../../../hooks/useTimer.js';
import { useState } from 'react';
import Menu from '../Menu/Menu.jsx';
import HighScores from '../Menu/HighScores.jsx';

export default function TopPart() {
  const { restart, bestTime, phase } = useGame((state) => state);
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
            src={(menuIsOpened && phase !== 'ended') ? './svg/menuOpened.svg' : './svg/menuClosed.svg'}
            alt='open menu'
            width={window.innerWidth > 425 ? '32px' : '24.8px'}
            height={window.innerWidth > 425 ? '32px' : '24.8px'}
          />
        </div>
      </div>
      {(menuIsOpened && phase !== 'ended') && <Menu />}
    </>
  )
}
