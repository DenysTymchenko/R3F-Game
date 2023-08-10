import useGame from '../../store/useGame.jsx';
import TopPart from './Parts/TopPart.jsx';
import Controls from './Parts/Controls.jsx';
import LogInForm from './LogInForm.jsx';
import { useState } from 'react';
import MiddlePart from './Parts/MiddlePart.jsx';

export default function Interface() {
  const { playerName, phase, usernameIsChanging } = useGame((state) => state);
  const [nameEntered, setNameEntered] = useState(playerName);

  return (
    <>
      {!nameEntered && <LogInForm setNameEntered={setNameEntered} />}
      {nameEntered && (
        <div className='interface'>
          <TopPart />
          {phase === 'ended' && <MiddlePart />}
          {phase !== 'ended' && !usernameIsChanging && <Controls />}
        </div>
      )}
    </>
  );
}
