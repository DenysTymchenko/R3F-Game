import useGame from '../../store/useGame.jsx';
import useTimer from '../../hooks/useTimer.js';
import HighScores from './HighScores.jsx';
import { useState } from 'react';

export default function TopPart() {
  const [showHighScores, setShowHighScores] = useState(false);
  const { restart, bestTime } = useGame((state) => state);
  const timer = useTimer();

  return (
    <>
      <div className='top-part'>
        <div className='left'>
          <p className='timer'>Current: {timer}</p>
          <p className='best-time'>Best: {bestTime ? bestTime : '-'}</p>
        </div>
        <div className='right'>
          <p className='highscores-btn' onClick={() => setShowHighScores(!showHighScores)}>
            {showHighScores ? 'Close' : 'High Scores'}
          </p>
          <p className='restart-btn' onClick={restart}>Restart</p>
        </div>
      </div>
      {showHighScores && <HighScores setShowHighScores={setShowHighScores} />}
    </>
  )
}
