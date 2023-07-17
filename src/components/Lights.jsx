import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';

export default function Lights() {
  const dirLight = useRef();

  useFrame((state) => {
    dirLight.current.position.z = state.camera.position.z - 3; // -3 to make lights position a little bit forward, so the shadows wouldn't appear before player's eyes
    dirLight.current.target.position.z = state.camera.position.z - 4;
    dirLight.current.target.updateMatrixWorld();
  })

  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        ref={dirLight}
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      >
      </directionalLight>
    </>
  )
}
