import { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useRapier } from '@react-three/rapier';
import { Vector3 } from 'three';
import useGame from '../store/useGame';
import levelObstacles from '../utils/LevelObstacles';

export default function useMovement(ball) {
  const { obstaclesCount, start, end, restart } = useGame((state) => state);
  const { rapier, world } = useRapier();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useEffect(() => {
    useGame.subscribe(
      (state) => state.phase,
      (value) => {
        if (value === 'ready') {
          ball.current.setTranslation({ x: 0, y: 1, z: 0 }); // Respawning the ball at the BlockStart
          // Making the ball stop
          ball.current.setLinvel({ x: 0, y: 1, z: 0 });
          ball.current.setAngvel({ x: 0, y: 1, z: 0 });
        }
      }
    );

    subscribeKeys(
      // Selector
      (keys) => keys.jump,
      // Instructions
      (jump) => {
        if (jump) handleJump(ball, rapier, world);
      },
    );

    subscribeKeys(() => start());
  }, []);

  const [smoothedCameraPosition] = useState(() => new Vector3(10, 10, 10));
  const [smoothedCameraTarget] = useState(() => new Vector3());

  useFrame((state, delta) => {
    handleMovement(ball, delta, getKeys);
    cameraFollowBall(ball, state, delta, smoothedCameraPosition, smoothedCameraTarget)

    checkPhaseChange(ball.current.translation(), (-levelObstacles.length * 4) - 4, end, restart);
  });
}

function handleJump(ball, rapier, world) {
  const origin = ball.current.translation();
  origin.y -= 0.31;
  const direction = { x: 0, y: -1, z: 0 };

  const ray = new rapier.Ray(origin, direction);
  const hit = world.castRay(ray, 10, true);

  if (hit.toi <= 0.1) {
    ball.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
  }
}

function handleMovement(ball, delta, getKeys) {
  const keys = getKeys();

  const impulse = { x: 0, y: 0, z: 0 };
  const torque = { x: 0, y: 0, z: 0 };

  const impulseStrength = 0.6 * delta;
  const torqueStrength = 0.2 * delta;

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

  ball.current.applyImpulse(impulse);
  ball.current.applyTorqueImpulse(torque);
}

function cameraFollowBall(ball, state, delta, smoothedCameraPosition, smoothedCameraTarget) {
  const ballPosition = ball.current.translation();

  const cameraPosition = new Vector3();
  cameraPosition.copy(ballPosition);
  cameraPosition.z += 2.25;
  cameraPosition.y += 0.75;

  const cameraTarget = new Vector3();
  cameraTarget.copy(ballPosition);
  cameraTarget.y += 0.25;

  // Making ball trailing much smoother. It can be perfectly seen when the ball is moving really fast
  smoothedCameraPosition.lerp(cameraPosition, delta * 5);
  smoothedCameraTarget.lerp(cameraTarget, delta * 5);

  state.camera.position.copy(smoothedCameraPosition);
  state.camera.lookAt(smoothedCameraTarget);
}

function checkPhaseChange(ballPosition, finishPosition, end, restart) {
  if (ballPosition.z < finishPosition) end(); // triggered on finish
  if (ballPosition.y < -4) restart(); // triggered when ball fall out the bounds
}
