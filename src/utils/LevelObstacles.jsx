import BlockSpinner from '../components/Blocks/BlockSpinner';
import BlockLimbo from '../components/Blocks/BlockLimbo';
import BlockLeftRightWall from '../components/Blocks/BlockLeftRightWall';
import BlockSpinningWall from '../components/Blocks/BlockSpinningWall';
import BlockBumps from '../components/Blocks/BlockBumps';
import BlockTorus from '../components/Blocks/BlockTorus';
import BlockWalls from '../components/Blocks/BlockWalls';
import BlockRotating from '../components/Blocks/BlockRotating';

const levelObstacles = [
  <BlockSpinningWall position={[0, 0, -4]} direction='left' />,
  <BlockWalls position={[0, 0, -8]} />,
  <BlockLeftRightWall position={[0, 0, -12]} />,
  <BlockWalls position={[0, 0, -16]} />,
  <BlockTorus position={[0, 0, -20]} />,
  <BlockSpinner position={[0, 0, -24]} direction='left' />,
  <BlockBumps position={[0, 0, -28]} />,
  <BlockSpinningWall position={[0, 0, -32]} direction='right' />,
  <BlockLimbo position={[0, 0, -36]} />,
  <BlockTorus position={[0, 0, -40]} />,
  <BlockRotating position={[0, 0, -44]} direction='left' />,
  <BlockLimbo position={[0, 0, -48]} />,
  <BlockRotating position={[0, 0, -52]} direction='right' />,
  <BlockBumps position={[0, 0, -56]} />,
  <BlockLeftRightWall position={[0, 0, -60]} />,
  <BlockSpinningWall position={[0, 0, -64]} direction='left' />,
  <BlockSpinningWall position={[0, 0, -68]} direction='right' />,
  <BlockWalls position={[0, 0, -72]} />,
  <BlockTorus position={[0, 0, -76]} />,
  <BlockLeftRightWall position={[0, 0, -80]} />,
  <BlockBumps position={[0, 0, -84]} />,
  <BlockLimbo position={[0, 0, -88]} />,
  <BlockWalls position={[0, 0, -92]} />,
  <BlockTorus position={[0, 0, -96]} />,
  <BlockWalls position={[0, 0, -100]} />,
  <BlockSpinningWall position={[0, 0, -104]} direction='left' />,
  <BlockBumps position={[0, 0, -108]} />,
  <BlockTorus position={[0, 0, -112]} />,
  <BlockWalls position={[0, 0, -116]} />,
  <BlockRotating position={[0, 0, -120]} direction='right' />,
  <BlockRotating position={[0, 0, -124]} direction='left' />,
  <BlockLeftRightWall position={[0, 0, -128]} />,
  <BlockSpinningWall position={[0, 0, -132]} direction='left' />,
  <BlockLeftRightWall position={[0, 0, -136]} />,
  <BlockTorus position={[0, 0, -140]} />,
];

export default levelObstacles;
