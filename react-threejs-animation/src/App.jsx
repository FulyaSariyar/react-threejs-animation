import React, { Suspense, useState, useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { Stars, OrbitControls, } from '@react-three/drei';
import {proxy, useSnapshot} from 'valtio';
import Cat from './components/Cat';
import Palette from './components/Palette';


const state = proxy({
  current: null,
  items: {
    belly: '#fff',
    'eyes | sclera': '#fff',
    'eyes | pupil': '#fff',
    'leaf | body': '#fff',
    'leaf | stalk': '#fff',
    nose: '#fff',
    whiskers: '#fff',
    skin: '#000',
    claws: '#fff',
  },
})

const App = () => {
  const snap = useSnapshot(state);
  const [hovered,set] =useState(null)

  const onPointerOver = (event) => {
       event.stopPropagation();
       set(event.object.material.nama);
  };
  const onPointerOut = (event) => {
    event.intersections.length == 0 && set(null);
  };
  const onPointerDown = (event) => {
    event.stopPropagation();
    state.current = event.object.material.name;
  };
  const onPointerMissed = (event) => {
    state.current = null;
  };


    return (
      
    <>
    <Palette state ={state}/>
    <Canvas>
    <Stars></Stars>
    <OrbitControls></OrbitControls>
    <ambientLight></ambientLight>
    <pointLight position={[10,10,10]}></pointLight>
    <Suspense fallback ={null}>
    <Cat
     state={state}
     onPointerOver={onPointerOver}
     onPointerOut={onPointerOut}
     onPointerDown={onPointerDown}
     onPointerMissed={onPointerMissed}
     >
    </Cat>
    </Suspense>
    </Canvas>
    </>
  );
};
export default App
