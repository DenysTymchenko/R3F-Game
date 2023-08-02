import Trees from './Trees.jsx';
import Bushes from './Bushes.jsx';
import LyingRocks from './LyingRocks.jsx';

export default function Decorations({ trees, bushesPositions, rocksPositions, }) {
  return (
    <>
      {trees && <Trees trees={trees} />}
      {bushesPositions && <Bushes bushesPositions={bushesPositions} />}
      {rocksPositions && <LyingRocks rocksPositions={rocksPositions} />}
    </>
  )
}
