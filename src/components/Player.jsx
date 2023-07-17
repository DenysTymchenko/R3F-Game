import { useFrame } from '@react-three/fiber';
import { RigidBody, useRapier } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { Vector3 } from 'three';
import useGame from '../store/useGame';

export default function Player() {
  const { obstaclesCount, start, end, restart } = useGame((state) => state);
  const ball = useRef();

  const { rapier, world } = useRapier();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  useEffect(() => {
    useGame.subscribe(
      (state) => state.phase,
      (value) => {
        if(value === 'ready') {
          // Respawning the ball at the BlockStart
          ball.current.setTranslation({x: 0, y: 1, z: 0});
          // Making the ball stop
          ball.current.setLinvel({x: 0, y: 1, z: 0});
          ball.current.setAngvel({x: 0, y: 1, z: 0});
        }
      }
    )
    subscribeKeys(
      // Selector
      (keys) => keys.jump,
      // Instructions
      (jump) => {
        if (jump) {
          const origin = ball.current.translation();
          origin.y -= 0.31
          const direction = { x: 0, y: -1, z: 0 };

          const ray = new rapier.Ray(origin, direction);
          const hit = world.castRay(ray, 10, true);

          if (hit.toi <= 0.3) { // 0.3 - to make possible to jump, when on the edge
            ball.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
          }
        }
      },
    );

    subscribeKeys(() => start());
  }, [])

  const [smoothedCameraPosition] = useState(() => new Vector3(10, 10, 10));
  const [smoothedCameraTarget] = useState(() => new Vector3());
  useFrame((state, delta) => {
    // Movement
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

    ball.current.applyImpulse(impulse)
    ball.current.applyTorqueImpulse(torque);

    // Camera
    const ballPosition = ball.current.translation();
    const cameraPosition = new Vector3();
    cameraPosition.copy(ballPosition);
    cameraPosition.z += 2.25;
    cameraPosition.y += 0.75;

    const cameraTarget = new Vector3();
    cameraTarget.copy(ballPosition)
    cameraTarget.y += 0.25;

    // Making ball trailing much smoother. It can be perfectly seen when ball is moving really fast
    smoothedCameraPosition.lerp(cameraPosition, delta * 5);
    smoothedCameraTarget.lerp(cameraTarget, delta * 5);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);

    // Changing phase
    if (ballPosition.z < - (obstaclesCount * 4 + 2)) end();
    if (ballPosition.y < -4) restart();
  })

  return (
    <RigidBody
      ref={ball}
      position-y={1}
      colliders='ball'
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
      canSleep={false}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial color='mediumpurple' flatShading />
      </mesh>
    </RigidBody>
  )
}
