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
            <h3>{highScore.name}</h3>
            <h3>{highScore.score}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
