import { useKeyboardControls } from '@react-three/drei';

export default function Interface() {
  const controls = useKeyboardControls((state) => state);

  return (
    <div className='interface'>
      <div className='time'>0:00</div>
      <div className='restart'>Restart</div>
      <div className="controls">
        <div className='wrapper'>
          <div className={`key ${controls.forward ? 'active' : ''}`}></div>
        </div>
        <div className='wrapper'>
          <div className={`key ${controls.leftward ? 'active' : ''}`}></div>
          <div className={`key ${controls.backward ? 'active' : ''}`}></div>
          <div className={`key ${controls.rightward ? 'active' : ''}`}></div>
        </div>
        <div className='wrapper'>
          <div className={`key large ${controls.jump ? 'active' : ''}`}></div>
        </div>
      </div>
    </div>
  );
}
