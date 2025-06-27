import React from 'react';
import './Main.css';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

import hiringAnimation from './animations/hiring.json';
import Particles from '../particles/Particles';
import { loadSlim } from 'tsparticles-slim'; 


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      when: 'beforeChildren',
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function Main() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); 
  };

  return (
    <div className="main-container1">
      <Particles
        particleCount={1000}
        particleColors={["#ffffff", "#00d1ff", "#8884ff"]}
        particleSpread={10}
        moveParticlesOnHover={true}
        alphaParticles={true}
        speed={0.1}
        particleBaseSize={70}
        sizeRandomness={0.8}
        className="custom-particles"
      /> 

      <motion.section
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <h1 className="hero-title">
            <span className="gradient-text">Empowering Campus Placements</span>
            <br />
            With Smart AI-Driven Insights
          </h1>
          
          <div className="hero-buttons">
            <motion.button
              className="explore-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Courses
            </motion.button>
            {/* <motion.button
              className="dashboard-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Student Dashboard
            </motion.button> */}
          </div>
        </motion.div>

        <motion.div className="hero-illustration" variants={itemVariants}>
          <Lottie animationData={hiringAnimation} loop={true} style={{ height: 400 }} />
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Main;
