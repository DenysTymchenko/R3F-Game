import Wall from './Models/Wall.jsx';

export default function WallBorders() {
  return (
    <>
      {/*Right wall*/}
      <Wall position={[2.15, 0, 0]} rotation-y={Math.PI / 2} />
      {/*Left wall*/}
      <Wall position={[-2.15, 0, 0]} rotation-y={-Math.PI / 2} />
    </>
  )
}
