import { useKeyboardControls } from '@react-three/drei';
import { Joystick } from 'react-joystick-component';
import classNames from 'classnames';

export default function Controls() {
  const controls = useKeyboardControls((state) => state);
  const handleMove = (joystick) => {
    controls.forward = joystick.y >= 0.4;
    controls.rightward = joystick.x >= 0.4;
    controls.backward = joystick.y <= -0.4;
    controls.leftward = joystick.x <= -0.4;
  }
  const handleStop = (joystick) => {
    controls.forward = false;
    controls.rightward = false;
    controls.backward = false;
    controls.leftward = false;
  }

  return (
    <div className='controls'>
      <Joystick
        className='check'
        size={150}
        baseColor='#82828244'
        stickColor='#0000007a'
        move={(e) => handleMove(e)}
        stop={(e) => handleStop(e)}
      />
      <div className='wasd'>
        <div className='wrapper'>
          <div
            className={classNames('key', controls.forward && 'active')}
            onPointerEnter={() => controls.forward = true}
            onPointerOut={() => controls.forward = false}
          />
        </div>
        <div className='wrapper'>
          <div className={classNames('key', controls.leftward && 'active')} />
          <div className={classNames('key', controls.backward && 'active')} />
          <div className={classNames('key', controls.rightward && 'active')} />
        </div>
      </div>
      <div className='wrapper'>
        <div
          className={classNames('key space', controls.jump && 'active')}
          onPointerEnter={() => controls.jump = true}
          onPointerOut={() => controls.jump = false}
        >
          {window.innerWidth <= 768 ? 'JUMP' : ''}
        </div>
      </div>
    </div>
  )
}
