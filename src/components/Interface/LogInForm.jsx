import { useEffect, useState } from 'react';
import classNames from 'classnames';
import useGame from '../../store/useGame.jsx';
import { controller } from '../../utils/api.js';

export default function LogInForm({ setNameEntered }) {
  const { setPlayerName } = useGame((state) => state);
  const [users, setUsers] = useState([]);
  const [userExists, setUserExists] = useState(false);
  const [helpText, setHelpText] = useState('');
  const [helpTriggered, triggerHelp] = useState(false);
  const [validationFailed, setValidationFailed] = useState(false);
  const [instagram, setInstagram] = useState('');
  const [password, setPassword] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const users = await controller('GET', 'Users');
      setUsers(users);
    };
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = users.find(user => user.instagram === instagram);
    if (existingUser) {
      setUserExists(true);
      if (existingUser.password !== password) {
        setValidationFailed(true);
        return;
      }
    }

    setPlayerName(instagram);
    setNameEntered(true);
    if (!userExists) {
      controller('POST', 'Users', {
        'instagram': instagram,
        'password': password,
      });
    }
  };

  const handleInput = (inputText, inputType) => {
    const cleanedInput = inputText.trim().replaceAll(' ', '');
    if (inputType === 'instagram') {
      setInstagram(cleanedInput);
      setIsBtnDisabled(cleanedInput.length === 0 || password.length === 0);
    } else if (inputType === 'password') {
      setPassword(cleanedInput);
      setIsBtnDisabled(cleanedInput.length === 0 || instagram.length === 0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classNames('help', helpTriggered && 'triggered')}>{helpText}</div>
      <div className='decorations'>
        <img src='./svg/tower.svg' alt='tower' />
        <img src='./svg/crown.svg' alt='crown' />
        <img src='./svg/tower.svg' alt='tower' />
        <img className='particles particles-top' src='./svg/formParticles.svg' alt='tower' />
        <img className='particles particles-bottom' src='./svg/formParticles.svg' alt='tower' />
      </div>
      <label htmlFor='instagram'>
        Instagram username
        <span
          className='instagram-hint'
          onPointerOver={() => {
            setHelpText(`It will be displayed inside high scores menu, in case you'll get one, so other users can see how cool you are 😎`);
            triggerHelp(true);
          }}
          onPointerLeave={() => triggerHelp(false)}
        >
          ?
        </span>
      </label>
      <br />
      <input
        type='text'
        id='instagram'
        onChange={(e) => handleInput(e.target.value, 'instagram')}
      />
      <br />
      <label htmlFor='password'>
        Password
        <span
          className='password-hint'
          onPointerOver={() => {
            setHelpText(`Will be used to log in from different devices and to make sure that no one is playing under your username 🔒`);
            triggerHelp(true);
          }}
          onPointerLeave={() => triggerHelp(false)}
        >
          ?
        </span>
      </label>
      <br />
      <input
        type='password'
        id='password'
        onChange={(e) => handleInput(e.target.value, 'password')}
      />
      <br />
      <button disabled={isBtnDisabled}>Start</button>
      <div className={classNames('validation-msg', validationFailed && 'triggered')}>
        Wrong password ☹️
      </div>
    </form>
  );
}
