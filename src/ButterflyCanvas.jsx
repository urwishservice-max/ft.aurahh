import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, Environment, OrbitControls, Float } from '@react-three/drei';

function ButterflyModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/butterflys.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play all available animations (like wing flapping)
    if (actions) {
      Object.keys(actions).forEach((key) => {
        actions[key]?.play();
      });
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Scale might need adjustment depending on the raw model size */}
        <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
      </Float>
    </group>
  );
}

export default function ButterflyCanvas() {
  return (
    <div style={{ height: '600px', width: '100%', position: 'relative', zIndex: 5, marginTop: '-50px', marginBottom: '2rem' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00E5FF" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#7A00FF" />
        <Environment preset="city" />
        <React.Suspense fallback={null}>
          <ButterflyModel position={[0, 0, 0]} />
        </React.Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}

// Preload the model so it doesn't pop in abruptly
useGLTF.preload('/models/butterflys.glb');
