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
            onPointerEnter={() => controls.forward = true}
            onPointerOut={() => controls.forward = false}
          />
        </div>
        <div className='wrapper'>
          <div
            className={classNames('key', controls.leftward && 'active')}
            onPointerEnter={() => controls.leftward = true}
            onPointerOut={() => controls.leftward = false}
          />
          <div
            className={classNames('key', controls.backward && 'active')}
            onPointerEnter={() => controls.backward = true}
            onPointerOut={() => controls.backward = false}
          />
          <div
            className={classNames('key', controls.rightward && 'active')}
            onPointerEnter={() => controls.rightward = true}
            onPointerOut={() => controls.rightward = false}
          />
        </div>
      </div>
      {/*<div className='joystick'>
        <div
          className='controller'
          onTouchStart={(e) => console.log(e.clientY)}
        >
        </div>
      </div>*/}
      <div className='wrapper'>
        <div
          className={classNames('key space', controls.jump && 'active')}
          onPointerEnter={() => controls.jump = true}
          onPointerOut={() => controls.jump = false}
        />
      </div>
    </div>
  )
}
