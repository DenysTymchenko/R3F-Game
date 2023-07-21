import { useMemo } from 'react';
import BlockStart from './Blocks/BlockStart';
import BlockEnd from './Blocks/BlockEnd';
import BlockSpinner from './Blocks/BlockSpinner';
import BlockLimbo from './Blocks/BlockLimbo';
import BlockLeftRightWall from './Blocks/BlockLeftRightWall';
import Bounds from './Bounds';
import useGame from '../store/useGame';

export default function Level({
  obstaclesBlocks = [BlockSpinner, BlockLimbo, BlockLeftRightWall],
  obstaclesCount,
}) {
  const obstaclesSeed = useGame((state) => state.obstaclesSeed);
  
  const blocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < obstaclesCount; i++) {
      const obstaclesBlock = obstaclesBlocks[Math.floor(Math.random() * obstaclesBlocks.length)]
      blocks.push(obstaclesBlock);
    }
    return blocks;
  }, [obstaclesBlocks, obstaclesCount, obstaclesSeed]);

  return (
    <>
      <BlockStart />
      {blocks.map((Block, index) => <Block key={index} position={[0, 0, - (index + 1) * 4]} />)} {/* Multiplying by 4, because every block is 4 units in depth */}
      <BlockEnd position={[0, 0, - (obstaclesCount + 1) * 4]} /> {/* Multiplying by 4, because every block is 4 units in depth */}
      <Bounds length={obstaclesCount + 2} /> {/* 2 represents BlockStart and BlockEnd */}
    </>
  )
}
