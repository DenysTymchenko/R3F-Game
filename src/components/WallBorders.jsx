import Wall from './Models/Wall.jsx';

export default function WallBorders() {
  return(
    <>
      <Wall position={[2, 0, 0]} rotation-y={Math.PI / 2} /> {/*Right wall*/}
      <Wall position={[-2, 0, 0]} rotation-y={-Math.PI / 2} /> {/*Left wall*/}
    </>
  )
}
