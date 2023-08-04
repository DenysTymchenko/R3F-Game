import { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useRapier } from '@react-three/rapier';
import { Vector3 } from 'three';
import useGame from '../store/useGame';
import levelObstacles from '../utils/LevelObstacles';

export default function useMovement(ball) {
  const { phase, start, end, restart } = useGame((state) => state);
  const { rapier, world } = useRapier();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useEffect(() => {
    useGame.subscribe(
      (state) => state.phase,
      (value) => {
        if (value === 'ready') {
          ball.current.setTranslation({ x: 0, y: 1, z: 0 }); // Respawning the ball at the BlockStart
          ball.current.setLinvel({ x: 0, y: 0, z: 0 }); // Making the ball stop
          ball.current.setAngvel({ x: 0, y: 0, z: 0 });
        }
      }
    );
  }, []);

  const [smoothedCameraPosition] = useState(() => new Vector3(10, 10, 10));
  const [smoothedCameraTarget] = useState(() => new Vector3());

  useFrame((state, delta) => {
    const keys = getKeys();
    handleMovement(ball, delta, phase, start, keys, rapier, world);
    cameraFollowBall(ball, state, delta, smoothedCameraPosition, smoothedCameraTarget);
    checkPhaseChange(ball.current.translation(), -(levelObstacles.length * 4 + 2), end, restart);
  });
}

function handleJump(ball, rapier, world, delta) {
  const origin = ball.current.translation();
  origin.y -= 0.31;

  const direction = { x: 0, y: -1, z: 0 };
  const ray = new rapier.Ray(origin, direction);
  const hit = world.castRay(ray, delta * 10, true);

  if (Math.floor(hit?.toi * 10) / 10 <= 0.1) {
    ball.current.applyImpulse({ x: 0, y: 0.06, z: 0 });
  }
}

function handleMovement(ball, delta, phase, start, keys, rapier, world) {
  const impulse = { x: 0, y: 0, z: 0 };
  const torque = { x: 0, y: 0, z: 0 };
  const impulseStrength = 0.4 * delta;
  const torqueStrength = 0.3 * delta;

  if (keys.forward) {
    impulse.z -= impulseStrength;
    torque.x -= torqueStrength;
  }
  if (keys.rightward) {
    impulse.x += impulseStrength;
    torque.z -= torqueStrength;
  }
  if (keys.backward) {
    impulse.z += impulseStrength;
    torque.x += torqueStrength;
  }
  if (keys.leftward) {
    impulse.x -= impulseStrength;
    torque.z += torqueStrength;
  }
  if (keys.jump) {
    handleJump(ball, rapier, world, delta);
  }

  if (phase === 'ready' && (keys.forward || keys.rightward || keys.backward || keys.leftward || keys.jump)) {
    start();
  }

  ball.current.applyImpulse(impulse);
  ball.current.applyTorqueImpulse(torque);
}

function cameraFollowBall(ball, state, delta, smoothedCameraPosition, smoothedCameraTarget) {
  const ballPosition = ball.current.translation();
  const ballOnOpenCloseGatesObstacle = ballPosition.z <= -14 && ballPosition.z > -18;
  const cameraPosition = new Vector3(
    ballPosition.x,
    ballPosition.y + (!ballOnOpenCloseGatesObstacle ? 1.25 : 0.5),
    ballPosition.z + (!ballOnOpenCloseGatesObstacle ? 2.25 : 1)
  );
  const cameraTarget = new Vector3(ballPosition.x, ballPosition.y + 0.25, ballPosition.z);

  smoothedCameraPosition.lerp(cameraPosition, delta * 5);
  smoothedCameraTarget.lerp(cameraTarget, delta * 5);

  state.camera.position.copy(smoothedCameraPosition);
  state.camera.lookAt(smoothedCameraTarget);
}

function checkPhaseChange(ballPosition, finishPosition, end, restart) {
  if (ballPosition.z < finishPosition) end(); // triggered on finish
  if (ballPosition.y < -4) restart(); // triggered when ball falls out of bounds
}
