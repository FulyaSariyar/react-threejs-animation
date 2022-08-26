import React, { Suspense, useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { Stars, OrbitControls, } from '@react-three/drei';
import {proxy, useSnapshot} from 'valtio';
import Cat from './components/Cat';


const state = proxy({
  current: null,
  items: {
    belly: '#fff',
    'eyes | sclera': '#fff',
    'eyes | pupil': '#fff',
    'leaf | body': '#0000ff',
    'leaf | stalk': '#fff',
    nose: '#fff',
    whiskers: '#fff',
    skin: '#000',
    claws: '#fff',
  },
})

const App = () => {
  const snap = useSnapshot(state);
    return (
    <Canvas>
    <Stars></Stars>
    <OrbitControls></OrbitControls>
    <ambientLight></ambientLight>
    <pointLight position={[10,10,10]}></pointLight>
    <Suspense fallback ={null}>
    <Cat state={state}></Cat>
    </Suspense>
    </Canvas>
  );
};
export default App
