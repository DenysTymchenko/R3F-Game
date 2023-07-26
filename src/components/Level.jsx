import { Fragment } from 'react';
import levelObstacles from '../utils/LevelObstacles';
import BlockStart from './Blocks/BlockStart';
import BlockEnd from './Blocks/BlockEnd';
import Bounds from './Bounds.jsx';


export default function Level() {
  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {levelObstacles.map((Obstacle, index) => <Fragment key={index}>{Obstacle}</Fragment>)}
      <BlockEnd position={[0, 0, -((levelObstacles.length + 1) * 4)]} />
      <Bounds length={levelObstacles.length + 2} /> {/* length = all obstacles + blockStart and blockEnd */}
    </>
  );
}
