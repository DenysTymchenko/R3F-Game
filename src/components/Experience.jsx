import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Level from './Level';
import Ball from './Ball';
import { Environment } from '@react-three/drei';

export default function Experience() {
  return (
    <>
      <Environment background files='./background.hdr' />
      <Lights />

      <Physics>
        <Level />
        <Ball />
      </Physics>
    </>
  );
}
