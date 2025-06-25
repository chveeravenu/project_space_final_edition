// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0f0f0f", // dark background
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 12,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          shape: {
            type: "image",
            image: [
              {
                src: "/icons/html-icon.svg",
                width: 20,
                height: 20,
              },
              {
                src: "/icons/css-icon.svg",
                width: 20,
                height: 20,
              },
              {
                src: "/icons/js-icon.svg",
                width: 20,
                height: 20,
              },
              {
                src: "/icons/react-icon.svg",
                width: 20,
                height: 20,
              },
              {
                src: "/icons/python.svg",
                width: 20,
                height: 20,
              },
              {
                src: "/icons/bootstrap-icon.svg",
                width: 20,
                height: 20,
              },
              {
                src: "/icons/java.svg",
                width: 20,
                height: 20,
              }
            ],
          },
          size: {
            value: 30,
            random: { enable: true, minimumValue: 20 },
          },
          opacity: {
            value: 0.8,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
