import { useEffect, useState } from 'react';
import { controller } from '../../utils/api.js';

export default function HighScores({ setShowHighScores }) {
  const [highScores, setHighScores] = useState(null);
  useEffect(() => {
    const getHighScores = async () => {
      try {
        const data = await controller('GET', 'Highscores');
        setHighScores(data);
      } catch (error) {
        console.error('Error fetching high scores:', error);
      }
    };
    getHighScores();
  }, []);

  return (
    <div className='highscores-wrapper' onClick={() => setShowHighScores(false)}>
      <div className='highscores'>
        <div className='decorations'>
          <img src='./svg/highScoresTower.svg' alt='tower' />
          <img src='./svg/medal.svg' alt='medal' />
          <img src='./svg/highScoresTower.svg' alt='tower' />
          <img className='particles left' src='./svg/highScoresParticles.svg' alt='particles' />
          <img className='particles right' src='./svg/highScoresParticles.svg' alt='particles' />
        </div>
        <div className='top-panel'>
          <h2>Name</h2>
          <h2>Score</h2>
        </div>
        {!highScores && (
          <div className='loader-wrapper'>
            <span className='loader'></span>
          </div>
        )}
        {highScores && highScores.map(highScore => (
          <div
            key={'highscore' + highScore.id}
            className={'highscore'}
          >
            <h3>
              {highScore.name}
              {highScore.id <= 3 &&
                <img
                  className={`crown crown-${highScore.id}`}
                  src={`/svg/crown${highScore.id}.svg`}
                  alt='crown'
                />}
            </h3>
            <h3>{highScore.score}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
