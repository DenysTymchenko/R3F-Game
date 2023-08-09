import useGame from '../../store/useGame.jsx';
import useTimer from '../../hooks/useTimer.js';
import TopPart from './TopPart.jsx';
import Controls from './Controls.jsx';
import LogInForm from './LogInForm.jsx';
import { useState } from 'react';

export default function Interface() {
  const { playerName, phase, restart } = useGame((state) => state);
  const [nameEntered, setNameEntered] = useState(playerName);
  const timer = useTimer();

  return (
    <>
      {!nameEntered && <LogInForm setNameEntered={setNameEntered} />}
      {nameEntered && (
        <div className='interface'>
          <TopPart />
          {phase === 'ended' && (
            <div>
              <p className='result'>Result: {timer}</p>
              <p className='restart' onClick={restart}>Try again</p>
            </div>
          )}
          <Controls />
        </div>
      )}
    </>
  );
}
