import FencesObstacle from '../components/Obstacles/FencesObstacle.jsx';
import FloorWithHolesObstacle from '../components/Obstacles/FloorWithHolesObstacle.jsx';
import KickInDoor from '../components/Obstacles/KickInDoor.jsx';
import LeftRightShield from '../components/Obstacles/LeftRightShield.jsx';
import OpenCloseGates from '../components/Obstacles/OpenCloseGates.jsx';
import SpinningSwords from '../components/Obstacles/SpinningSwords.jsx';
import SwingingAxe from '../components/Obstacles/SwingingAxe.jsx';
import TowerObstacle from '../components/Obstacles/TowerObstacle.jsx';
import UpDownHammer from '../components/Obstacles/UpDownHammer.jsx';
import WallWithHoleObstacle from '../components/Obstacles/WallWithHoleObstacle.jsx';

const levelObstacles = [
  <KickInDoor position={[0, 0, -4]} />,
  <TowerObstacle position={[0, 0, -8]} />,
  <LeftRightShield position={[0, 0, -12]} />,
  <OpenCloseGates position={[0, 0, -16]} />,
  <SpinningSwords position={[0, 0, -20]} />,
  <FloorWithHolesObstacle position={[0, 0, -24]} direction='left' />,
  <FencesObstacle position={[0, 0, -28]} />,
  <TowerObstacle position={[0, 0, -32]} direction='right' />,
  <SwingingAxe position={[0, 0, -36]} />,
  <WallWithHoleObstacle position={[0, 0, -40]} />,
  <FloorWithHolesObstacle position={[0, 0, -44]} direction='left' />,
  <UpDownHammer position={[0, 0, -48]} />,
  <WallWithHoleObstacle position={[0, 0, -52]} />,
  <TowerObstacle position={[0, 0, -56]} />,
  <KickInDoor position={[0, 0, -60]} />,
  <FencesObstacle position={[0, 0, -64]} />,
  <SpinningSwords position={[0, 0, -68]} />,
];

export default levelObstacles;
