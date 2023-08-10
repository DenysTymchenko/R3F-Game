import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { controller } from '../../utils/api.js';
import useGame from '../../store/useGame.jsx';

export default function ChangeUsernameForm({ setChangeUsername }) {
  const { playerName, setPlayerName } = useGame((state) => state);
  const [instagram, setInstagram] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [helpTriggered, triggerHelp] = useState(false);
  const [validationFailed, setValidationFailed] = useState(false);
  const [users, setUsers] = useState([]);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await controller('GET', 'Users');
      const highScores = await controller('GET', 'Highscores');
      setUsers(users);
      setHighScores(highScores);
    };
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameAlreadyExists = users.find(user => user.instagram === instagram);

    if (!usernameAlreadyExists) {
      const userData = users.find(user => user.instagram === playerName);
      setPlayerName(instagram);
      controller('PUT', `Users/${userData.id}`, {
        'instagram': instagram,
        'password': userData.password,
        'id': userData.id
      });

      const highScoresUser = highScores.find(user => user.name === playerName);
      if (highScoresUser) {
        controller('PUT', `Highscores/${highScoresUser.id}`, {
          'name': instagram,
          'score': highScoresUser.score,
          'id': highScoresUser.id
        });

        setChangeUsername(false);
      }
    } else {
      setValidationFailed(true);
    }
  };

  const handleInput = (inputText) => {
    const cleanedInput = inputText.trim().replaceAll(' ', '');
    setInstagram(cleanedInput);
    setIsBtnDisabled(cleanedInput.length === 0);
  };

  return (
    <div className='change-username-wrapper' onClick={() => setChangeUsername(false)}>
      <form className='change-username' onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <div className={classNames('help', helpTriggered && 'triggered')}>
          Username inside high scores table will be changed as well ✏️
        </div>
        <div className='decorations'>
          <img src='./svg/tower.svg' alt='tower' />
          <img src='./svg/crown.svg' alt='crown' />
          <img src='./svg/tower.svg' alt='tower' />
          <img className='particles particles-top' src='./svg/formParticles.svg' alt='tower' />
          <img className='particles particles-bottom' src='./svg/formParticles.svg' alt='tower' />
        </div>
        <label htmlFor='change_username'>
          New username
          <span
            className='instagram-hint'
            onPointerOver={() => triggerHelp(true)}
            onPointerLeave={() => triggerHelp(false)}
          >
          ?
        </span>
        </label>
        <br />
        <input
          type='text'
          id='change_username'
          onChange={(e) => handleInput(e.target.value)}
        />
        <br />
        <button disabled={isBtnDisabled}>Change</button>
        <div className={classNames('validation-msg', validationFailed && 'triggered')}>
          Player with such instagram already exists ☹️
        </div>
      </form>
    </div>
  )
}
