import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Level from './Level';
import Ball from './Ball';

export default function Experience() {
  return (
    <Physics>
      <Lights />
      <Level />
      <Ball />
    </Physics>
  );
}
