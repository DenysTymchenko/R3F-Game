import Bush from '../Models/Bush.jsx';

export default function Bushes({ bushesPositions }) {
  return (
    <>
      {bushesPositions.map((position, index) => (
        <Bush key={'bush' + index} position={position} />
      ))}
    </>
  );
}
