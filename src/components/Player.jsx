import { useFrame } from '@react-three/fiber';
import { RigidBody, useRapier } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';

export default function Player() {
  const ball = useRef();

  const { rapier, world } = useRapier();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  useEffect(() => {
    subscribeKeys(
      // Selector
      (state) => state.jump,
      // Instructions
      (jump) => {
        if (jump) {
          const origin = ball.current.translation();
          origin.y -= 0.31
          const direction = { x: 0, y: -1, z: 0 };

          const ray = new rapier.Ray(origin, direction);
          const hit = world.castRay(ray, 10, true);

          if(hit.toi <= 0.3) { // 0.3 - to make possible to jump, when on the edge
            ball.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
          }
        }
      },
    )
  }, [])

  useFrame((state, delta) => {
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
