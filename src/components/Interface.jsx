import { useKeyboardControls } from '@react-three/drei';
import classNames from 'classnames';
import useGame from '../store/useGame';
import useTimer from '../hooks/useTimer';

export default function Interface() {
  const { phase } = useGame((state) => state);
  const timer = useTimer();

  return (
    <div className='interface'>
      <TopPart />
      {phase === 'ended' && <p className='result'>Result: {timer}</p>}
      <Controls />
    </div>
  );
}

function TopPart() {
  const { restart, bestTime } = useGame((state) => state);
  const timer = useTimer();

  return (
    <div className='top-part'>
      <div className='time'>
        <p className='timer'>Current: {timer}</p>
        <p className='best-time'>Best: {bestTime ? bestTime : '-'}</p>
      </div>
      <p className='restart-btn' onClick={restart}>Restart</p>
    </div>
  )
}

function Controls() {
  const controls = useKeyboardControls((state) => state);

  return (
    <div className="controls">
      <div className='wasd'>
        <div className='wrapper'>
          <div
            className={classNames('key', controls.forward && 'active')}
            onTouchStart={() => controls.forward = true}
            onTouchEnd={() => controls.forward = false}
          />
        </div>
        <div className='wrapper'>
          <div
            className={classNames('key', controls.leftward && 'active')}
            onTouchStart={() => controls.leftward = true}
            onTouchEnd={() => controls.leftward = false}
          />
          <div
            className={classNames('key', controls.backward && 'active')}
            onTouchStart={() => controls.backward = true}
            onTouchEnd={() => controls.backward = false}
          />
          <div
            className={classNames('key', controls.rightward && 'active')}
            onTouchStart={() => controls.rightward = true}
            onTouchEnd={() => controls.rightward = false}
          />
        </div>
      </div>
      <div className='wrapper'>
        <div
          className={classNames('key space', controls.jump && 'active')}
          onTouchStart={() => controls.jump = true}
          onPointerUp={() => controls.jump = false}
        />
      </div>
    </div>
  )
}
