import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import {
  BoxGeometry,
  Euler,
  MeshStandardMaterial,
  Quaternion
} from 'three';
import useGame from '../store/useGame';

const boxGeometry = new BoxGeometry(1, 1, 1);

const floor1Material = new MeshStandardMaterial({ color: 'limegreen' });
const floor2Material = new MeshStandardMaterial({ color: 'greenyellow' });
const obstacleMaterial = new MeshStandardMaterial({ color: 'red' });
const wallMaterial = new MeshStandardMaterial({ color: 'slategrey' });

function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/*Floor*/}
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position-y={-0.1} // Placing floor at y = 0
        scale={[4, 0.2, 4]}
        receiveShadow
      >
      </mesh>
    </group>
  );
}

function BlockEnd({ position = [0, 0, 0] }) {
  const flag = useGLTF('./flag.gltf');
  flag.scene.children[0].children.forEach(mesh => {
    mesh.castShadow = true;
  });

  return (
    <group position={position}>
      {/*Flag*/}
      <RigidBody type='fixed' colliders='hull'>
        <primitive object={flag.scene} castShadow />
      </RigidBody>

      {/*Floor*/}
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        scale={[4, 0.2, 4]}
        receiveShadow
      >
      </mesh>
    </group>
  );
}


function BlockSpinner({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  // Setting speed value from 1 to 3.
  // Then, depending on Math.random result, multiplying speed value to 1 or -1.
  // By doing this multiplying we randobly set spinning direction (from right to left or from left to right).
  const [speed] = useState(() => Math.floor(Math.random() * 3 + 1) * (Math.random() < 0.5 ? -1 : 1));

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const rotation = new Quaternion();
    rotation.setFromEuler(new Euler(0, time * speed, 0));

    obstacle.current.setNextKinematicRotation(rotation);
  })

  return (
    <group position={position}>
      {/*Floor*/}
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        scale={[4, 0.2, 4]}
        position-y={-0.1}
        receiveShadow
      />

      {/*Obstacle*/}
      <RigidBody type='kinematicPosition' ref={obstacle} position-y={0.2} restitution={0.2} friction={0}>
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  )
}

function BlockLimbo({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  // timeOffset will help us to make different BlockLimbo go up and down differently, so they don't do it be simultaneously.
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const y = Math.sin(time + timeOffset) + 1.15; // because of + 1.15, obstacle will never go under the floor

    obstacle.current.setNextKinematicTranslation({ x: position[0], y, z: position[2] });
  })

  return (
    <group position={position}>
      {/*Floor*/}
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        scale={[4, 0.2, 4]}
        position-y={-0.1}
        receiveShadow
      />

      {/*Obstacle*/}
      <RigidBody type='kinematicPosition' ref={obstacle} position-y={0.2} restitution={0.2} friction={0}>
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  )
}

function BlockAxe({ position = [0, 0, 0] }) {
  const obstacle = useRef();
  // timeOffset will help us to make different BlockAxe go left and right differently, so they don't do it be simultaneously.
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const x = Math.sin(time + timeOffset) * 1.25 // multiplying by 1.25 makes obstacle go from one edge to enother perfectly

    obstacle.current.setNextKinematicTranslation({ x, y: position[1] + 0.75, z: position[2] });
  })

  return (
    <group position={position}>
      {/*Floor*/}
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        scale={[4, 0.2, 4]}
        position-y={-0.1}
        receiveShadow
      />

      {/*Obstacle*/}
      <RigidBody type='kinematicPosition' ref={obstacle} restitution={0.2} friction={0}>
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[1.5, 1.5, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  )
}

function Bounds({ length }) {
  return (
    <group>
      <RigidBody type='fixed' restitution={0.2} friction={0}>
        {/* Right wall */}
        <mesh
          geometry={boxGeometry}
          material={wallMaterial}
          position={[2.15, 0.75, - (length * 2) + 2]}
          scale={[0.3, 1.5, length * 4]} // Multiplying by 4, because every block is 4 units in depth
          castShadow
        />
        {/* Left wall */}
        <mesh
          geometry={boxGeometry}
          material={wallMaterial}
          position={[-2.15, 0.75, - (length * 2) + 2]}
          scale={[0.3, 1.5, length * 4]} // Multiplying by 4, because every block is 4 units in depth
          castShadow
        />
        {/* End wall */}
        <mesh
          geometry={boxGeometry}
          material={wallMaterial}
          position={[0, 0.75, - (length * 4) + 2]}
          scale={[4, 1.5, 0.3]} // Multiplying by 4, because every block is 4 units in depth
          receiveShadow
        />
        {/* Floor */}
        <CuboidCollider
          args={[2, 0.1, length * 2]}
          position={[0, -0.1, - (length * 2) + 2]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </group>
  )
}

export default function Level({
  obstaclesBlocks = [BlockSpinner, BlockLimbo, BlockAxe],
  obstaclesCount,
}) {
  const obstaclesSeed = useGame((state) => state.obstaclesSeed);
  
  const blocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < obstaclesCount; i++) {
      const obstaclesBlock = obstaclesBlocks[Math.floor(Math.random() * obstaclesBlocks.length)]
      blocks.push(obstaclesBlock);
    }
    return blocks;
  }, [obstaclesBlocks, obstaclesCount, obstaclesSeed]);

  return (
    <>
      <BlockStart />
      {blocks.map((Block, index) => <Block key={index} position={[0, 0, - (index + 1) * 4]} />)} {/* Multiplying by 4, because every block is 4 units in depth */}
      <BlockEnd position={[0, 0, - (obstaclesCount + 1) * 4]} /> {/* Multiplying by 4, because every block is 4 units in depth */}
      <Bounds length={obstaclesCount + 2} /> {/* 2 represents BlockStart and BlockEnd */}
    </>
  )
}
