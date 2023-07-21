import { useEffect, useState } from 'react';
import { addEffect } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import classNames from 'classnames';
import useGame from '../store/useGame';
import useTimer from '../hooks/useTimer';

export default function Interface() {
  const { phase, restart } = useGame((state) => state);
  const controls = useKeyboardControls((state) => state);
  const timer = useTimer();

  return (
    <div className='interface'>
      <div className='timer'>{timer}</div>
      {phase === 'ended' && <div className='restart-btn' onClick={restart}>Restart</div>}
      <div className="controls">
        <div className='wrapper'>
          <div className={classNames('key', controls.forward && 'active')}></div>
        </div>
        <div className='wrapper'>
          <div className={classNames('key', controls.leftward && 'active')}></div>
          <div className={classNames('key', controls.backward && 'active')}></div>
          <div className={classNames('key', controls.rightward && 'active')}></div>
        </div>
        <div className='wrapper'>
          <div className={classNames('key space', controls.jump && 'active')}></div>
        </div>
      </div>
    </div>
  );
}
