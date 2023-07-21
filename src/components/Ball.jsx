import { useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import useMovement from '../hooks/useMovement';

export default function Ball() {
  const ball = useRef();
  useMovement(ball)

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
