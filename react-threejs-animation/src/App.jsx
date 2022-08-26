import React, { useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

//scene => sahne
//geometry => şekil
//metarial => renk
//mesh => geometry, metarial

const Box = (props) =>{
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return(
  <mesh {...props} ref = {ref} position={[0,0,0]}>
    <boxBufferGeometry args={[1,1,1]}> </boxBufferGeometry>
    <meshBasicMaterial color ={'#fff'} ></meshBasicMaterial>
  </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
    <ambientLight></ambientLight>
    <pointLight position={[10,10,10]}></pointLight>
    <Box position={[-1.2,0,0]}></Box>
    </Canvas>
  );
};
export default App
