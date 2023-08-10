import useGame from '../../../store/useGame.jsx';
import useTimer from '../../../hooks/useTimer.js';
import HighScores from '../Menu/HighScores.jsx';

export default function MiddlePart() {
  const { restart, bestTime } = useGame((state) => state);
  const timer = useTimer();

  return (
    <div className='middle-part'>
      <img className='particles' src='./svg/finishParticles.svg' alt='particles' />
      <div className='results'>
        <h2>Result: {timer}</h2>
        <h3>Best: {bestTime}</h3>
      </div>
      <HighScores />
      <div className='restart' onClick={restart}>Try again</div>
    </div>
  )
}
