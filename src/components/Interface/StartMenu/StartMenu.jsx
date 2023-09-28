import StyledButton from './StyledButton.jsx';
import './startMenu.css'
import { useEffect, useRef, useState } from 'react';
import useGame from '../../../store/useGame.jsx';
import { controller } from '../../../utils/api.js';

export default function StartMenu({ setPlay }) {
  const { playerName, setPlayerName, toggleMenuIsOpened } = useGame((state) => state);
  const changePlayerNameInput = useRef();
  const inviteBtnMsg = useRef();

  const createUser = async () => {
    const users = await controller('GET', 'Users');
    const generatedUserName = `Player${users.length + 1}`;
    setPlayerName(generatedUserName);
    controller('POST', 'Users', { 'name': generatedUserName });
  };

  async function changePlayerName(newPlayerName) {
    const users = await controller('GET', 'Users');
    const usernameAlreadyExists = users.find(user => user.name === newPlayerName);

    if (!usernameAlreadyExists) {
      const userData = users.find(user => user.name === playerName);
      controller('PUT', `Users/${userData.id}`, {
        'name': newPlayerName,
        'id': userData.id
      });

      const highScores = await controller('GET', 'Highscores');
      const highScoresUser = highScores.find(user => user.name === playerName);
      if (highScoresUser) {
        controller('PUT', `Highscores/${highScoresUser.id}`, {
          'name': newPlayerName,
          'score': highScoresUser.score,
          'id': highScoresUser.id
        });
      }

      setPlayerName(newPlayerName);
    }
  };

  const openChangePlayerNameInput = () => {
    const playerNameP = document.querySelector('.buttons .btn:nth-child(2) .text')
    playerNameP.style.display = 'none'
    changePlayerNameInput.current.style.display = 'block'
    changePlayerNameInput.current.value = playerName;
    changePlayerNameInput.current.focus();
  }

  const showInviteMessage = () => {
    inviteBtnMsg.current.classList.add('show');
    inviteBtnMsg.current.onanimationend = (e) => e.target.classList.remove('show');
  }

  if (!playerName) createUser();

  useEffect(() => {
    changePlayerNameInput.current.addEventListener("focusout", () => {
      const playerNameP = document.querySelector('.buttons .btn:nth-child(2) .text')
      changePlayerNameInput.current.style.display = 'none'
      playerNameP.style.display = 'block'

      const newPlayerName = changePlayerNameInput.current.value;
      changePlayerName(newPlayerName);
    });
  }, [playerName, changePlayerNameInput])


  return (
    <div className='start-menu'>
      <img src='./startMenu/logo.svg' alt='logo' className='logo' />

      <div className='buttons'>
        <StyledButton text={'PLAY'} event={() => {
          setPlay(true)
          toggleMenuIsOpened()
        }} />
        <StyledButton text={playerName} event={() => openChangePlayerNameInput()}>
          <input type='text' ref={changePlayerNameInput}/>
        </StyledButton>
        <StyledButton text={'Invite Friends'} event={() => showInviteMessage()} />
      </div>
      <p className='invite-btn-msg' ref={inviteBtnMsg}>Link copied</p>
    </div>
  )
}
