import React, { Suspense, useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import Cat from './components/Cat'

const App = () => {
  return (
    <Canvas>
    <ambientLight></ambientLight>
    <pointLight position={[10,10,10]}></pointLight>
    <Suspense fallback ={null}>
    <Cat></Cat>
    </Suspense>
    </Canvas>
  );
};
export default App
