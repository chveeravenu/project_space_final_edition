import React from 'react';
import Particles from '../particles/Particles';

function Te() {
  return (
    <div style={{ 
      width: "500px", 
      height: "500px", 
      border: "1px solid red", 
      position: "relative", 
      overflow: "hidden" // ensures particles don’t overflow 
    }}>
      <Particles
        particleCount={500}
        particleColors={["#ffffff", "#00d1ff", "#8884ff"]}
        particleSpread={8}
        moveParticlesOnHover={true}
        alphaParticles={true}
        speed={0.3}
        particleBaseSize={80}
        sizeRandomness={0.8}
        className="custom-particles"
      /> 

      {/* Content over particles */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        tekjfvnjlaisvbiojldsbivjlkbsdijvkvlskdjdvkljDSVBLKJSDBVLKJBSDJVSDKLDJFHASHFBUSHFOPN
      </div>
    </div>
  );
}

export default Te;
