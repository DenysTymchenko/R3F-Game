import { CylinderCollider, RigidBody } from '@react-three/rapier';
import { barrelHitSound, hitSound } from '../../utils/Audio.js';
import Tower from '../Models/Tower.jsx';
import Barrel from '../Models/Barrel.jsx';
import Bricks from '../Models/Bricks.jsx';
import WallBorders from '../WallBorders.jsx';
import Floor from '../Floor.jsx';
import useGame from '../../store/useGame.jsx';

export default function TowerObstacle({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <RigidBody
        position={[-5, 0, 1]}
        scale={0.75}
        rotation-y={-Math.PI - 75}
        type='fixed'
        colliders={false}
        onCollisionEnter={() => hitSound.play()}
      >
        <Tower />
        <CylinderCollider args={[1.7, 1.3]} position={[-5.7, 1.5, -1.5]} />
      </RigidBody>
      <Barrels />
      <BricksRigidBodies />
      <WallBorders />
      <Floor />
    </group>
  )
}

function Barrels() {
  const { phase } = useGame((state) => state);

  const barrelsPositions = [
    [-1.65, 0.25, 1.5],
    [1.65, 0.25, 0.8],
    [1, 0.25, 0.6],
    [1.3, 0.25, 0],
  ];

  return (
    <>
      {barrelsPositions.map((position, index) => (
        <RigidBody
          key={'barrel' + index}
          position={position}
          scale={0.5}
          type='dynamic'
          colliders={false}
          restitution={0.4}
          onCollisionEnter={() => {
            // Barrels are hits the door on respawn, so wee need to disable sound for this moment
            if (phase !== 'ready') barrelHitSound.play();
          }}
        >
          <Barrel />
          <CylinderCollider args={[0.5, 0.4]} position={[0, 0.1, 0]} />
        </RigidBody>
      ))}
    </>
  )
}

function BricksRigidBodies() {
  const bricks = [
    {
      position: [1.65, 0, 1.5],
      scale: 0.5,
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      position: [0.8, 0, -0.5],
      scale: 0.3,
      rotation: [Math.PI / 2, 0, Math.PI / 2 + 4],
    },
    {
      position: [1.65, 0, -0.6],
      scale: 0.3,
      rotation: [Math.PI / 2, 0, Math.PI / 2],
    },
  ];

  return (
    <>
      {bricks.map((brick, index) => (
        <RigidBody
          key={'brick' + index}
          position={brick.position}
          scale={brick.scale}
          rotation={brick.rotation}
          type='fixed'
        >
          <Bricks />
        </RigidBody>
      ))}
    </>
  );
}
