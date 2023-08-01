import { Fragment, useEffect, useState } from 'react';
import levelObstacles from '../utils/LevelObstacles';
import BlockStart from './Blocks/BlockStart';
import BlockEnd from './Blocks/BlockEnd';
import Bounds from './Bounds.jsx';
import useGame from '../store/useGame.jsx';


export default function Level() {
  const phase = useGame((state) => state.phase);
  // State variable to trigger re-render
  const [reRenderKey, setReRenderKey] = useState(0);

  useEffect(() => {
    if (phase === 'ready') setReRenderKey((prevKey) => prevKey + 1);
  }, [phase]);

  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {levelObstacles.map((Obstacle, index) => (
        <Fragment key={index + reRenderKey}>{Obstacle}</Fragment>
      ))}
      <BlockEnd position={[0, 0, -((levelObstacles.length + 1) * 4)]} />
      <Bounds length={levelObstacles.length + 2} />
    </>
  );
}
