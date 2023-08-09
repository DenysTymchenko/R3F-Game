import { useState } from 'react';
import classNames from 'classnames';
import useGame from '../../store/useGame.jsx';

export default function EnterNameForm({ setNameEntered }) {
  const { setPlayerName } = useGame((state) => state);
  const [helpTriggered, triggerHelp] = useState(false);
  const [name, setName] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayerName(name)
    setNameEntered(true);
  }

  const handleInput = (inputText) => {
    setName(inputText.trim().replaceAll(' ', ''));

    const inputTextLength = inputText.trim().replaceAll(' ', '').length
    setIsBtnDisabled(inputTextLength === 0 && inputTextLength <= 20);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={classNames('help', helpTriggered && 'triggered')}>
        It will be displayed inside high scores menu, in case you'll get one, so other users can see how cool you are
        😎.
      </div>
      <div className='decorations'>
        <img src='./svg/tower.svg' alt='tower' />
        <img src='./svg/crown.svg' alt='crown' />
        <img src='./svg/tower.svg' alt='tower' />
        <img className='particles particles-top' src='./svg/formParticles.svg' alt='tower' />
        <img className='particles particles-bottom' src='./svg/formParticles.svg' alt='tower' />
      </div>
      <label htmlFor='name'>
        Enter your instagram username
        <span
          onPointerOver={() => triggerHelp(true)}
          onPointerLeave={() => triggerHelp(false)}
        >
          ?
        </span>
      </label>
      <br />
      <input
        type='text'
        id='name'
        onChange={(e) => handleInput(e.target.value)}
      />
      <br />
      <button disabled={isBtnDisabled}>Start</button>
    </form>
  )
}
