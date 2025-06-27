// src/components/Steps/steps.jsx
import React, { forwardRef } from 'react';
import './Steps.css';
import { Code, Brain, FileText, Keyboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import particles from '../particles/Particles'

const steps = [
  {
    title: 'Practice',
    description: 'Improve with focused daily practice.',
    icon: <Keyboard size={24} />,
    isClickable: true,
  },
  {
    title: 'Coding',
    description: 'Sharpen your skills with coding challenges and improve logic.',
    icon: <Code size={24} />,
    isClickable: true,
  },
  {
    title: 'AI Interview',
    description: 'Get prepared with mock AI-driven interview practice.',
    icon: <Brain size={24} />,
    isClickable: true,
  },
  {
    title: 'Resume Tracker',
    description: 'Keep your resumes organized and updated easily.',
    icon: <FileText size={24} />,
    isClickable: true,
  },
];

const Steps = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleClick = (step) => {
    if (step.title === 'Coding') navigate('/compiler');
    else if (step.title === 'AI Interview') window.location.href = 'https://new-ai-version.vercel.app/';
    else if (step.title === 'Resume Tracker') navigate('/resumec');
    else if (step.title === 'Practice') navigate('/practice')
  };
      

  return (
    <div className='steps-section'>
    <section className="steps-section1" id="process" ref={ref}>
      <particles
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
      <div className="section-content"> 
        <h1 className="steps-title">4 Steps to Get your Dream Job</h1>
        <p className="steps-subtitle">A proven path to career success</p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index} onClick={() => handleClick(step)}>
              <div className="icon-wrapper">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
});

export default Steps;
