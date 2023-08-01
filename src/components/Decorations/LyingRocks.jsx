import Rocks from '../Models/Rocks.jsx';

export default function LyingRocks({ rocksPositions }) {
  return (
    <>
      {rocksPositions.map((position, index) => (
        <Rocks
          key={'rocks' + index}
          position={position}
          scale={0.5}
        />
      ))}
    </>
  );
}
