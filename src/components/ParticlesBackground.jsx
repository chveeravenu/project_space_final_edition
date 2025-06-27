// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
// import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Particles from "./particles/Particles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
        particleCount={500}
        particleColors={["#ffffff", "#00d1ff", "#8884ff"]}
        particleSpread={10}
        moveParticlesOnHover={true}
        alphaParticles={true}
        speed={0.1}
        particleBaseSize={70}
        sizeRandomness={0.8}
        className="custom-particles"
      /> 
  );
}
