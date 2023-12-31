import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';

export default function Lights() {
  const dirLight = useRef();

  // Making directionalLight follow the camera, which follows the ball
  useFrame((state) => {
    dirLight.current.position.z = state.camera.position.z - 3; // -3 to make lights position a little bit forward, so the shadows wouldn't appear before player's eyes
    dirLight.current.target.position.z = state.camera.position.z - 3.5;
    dirLight.current.target.updateMatrixWorld();
  })

  return (
    <>
      <ambientLight intensity={0.2} />

      <directionalLight
        ref={dirLight}
        castShadow
        position={[4, 4, 1]}
        intensity={0.3}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={9}
        shadow-camera-top={3}
        shadow-camera-right={9}
        shadow-camera-bottom={-2}
        shadow-camera-left={-3}
      >
      </directionalLight>
    </>
  )
}
