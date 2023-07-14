export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        castShadow
        position={[0, 4, 4]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={3}
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
