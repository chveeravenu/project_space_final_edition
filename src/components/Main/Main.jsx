import React from 'react';
import './Main.css';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

import hiringAnimation from './animations/hiring.json';
import Particles from 'react-tsparticles';
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
    <div className="main-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#0f0f0f",
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 22,
              density: {
                enable: true,
                area: 800,
              },
            },
            shape: {
              type: 'image',
              image: [
                // `{ src: "/Icons/bootstrap-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/css-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/email-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/external-link.svg", width: 20, height: 20 },
                // { src: "/Icons/github.svg", width: 20, height: 20 },
                // { src: "/Icons/html-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/instagram.svg", width: 20, height: 20 },
                // { src: "/Icons/java.svg", width: 20, height: 20 },
                // { src: "/Icons/js-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/linkedin.svg", width: 20, height: 20 },
                // { src: "/Icons/mysql-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/node-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/phone-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/python.svg", width: 20, height: 20 },
                // { src: "/Icons/react-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/sass-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/shopify.svg", width: 20, height: 20 },
                // { src: "/Icons/typescript-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/vscode-icon.svg", width: 20, height: 20 },
                // { src: "/Icons/vue-icon.svg", width: 20, height: 20 },
                `{ src: "/Icons/wordpress.svg", width: 20, height: 20 },`
              ],
            },
            size: {
              value: 20,
              random: {
                enable: true,
                minimumValue: 15,
              },
            },
            opacity: {
              value: 0.9,
            },
            move: {
              enable: true,
              speed: 2.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
          detectRetina: true,
        }}
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
