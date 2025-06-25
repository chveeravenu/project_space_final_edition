import React from 'react';
import './Steps.css';
import { Code, Brain, LayoutDashboard, FileText,Keyboard,Timer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const steps = [
  // {
  //   title: 'Create Account',
  //   description: 'Create a standout profile to attract recruiters.',
  //   icon: <FileText size={24} />,
  // },
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
  // {
  //   title: 'Contests',
  //   description: 'Challenge yourself with timed contests and compete with top developers.',
  //   icon: <Timer size={24} />,
  //   isClickable: true,
  // },
  {
    title: 'AI Interview',
    description: 'Get prepared with mock AI-driven interview practice.',
    icon: <Brain size={24} />,
    isClickable: true,
  },
  
  // {
  //   title: 'Dashboard',
  //   description: 'Track your applications and performance in one place.',
  //   icon: <LayoutDashboard size={24} />,
  // },
  {
    title: 'Resume Tracker',
    description: 'Keep your resumes organized and updated easily.',
    icon: <FileText size={24} />,
  },
];

const Steps = () => {
  const navigate = useNavigate();

  const handleClick = (step) => {
    if (step.isClickable && step.title === 'Coding') {
      navigate('/compiler');
    }
    else if(step.isClickable && step.title === 'AI Interview'){
      window.location.href = "https://new-ai-version.vercel.app/";
    }
  };
  return (
    <section className="steps-section" id="process">
      <div className="section-content">
        <h1 className="steps-title">4 Steps to Get your Dream Job</h1>
        <p className="steps-subtitle">A proven path to career success</p>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}  onClick={() => handleClick(step)}>
              <div className="icon-wrapper">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {/* <div className="step-number">{index + 1}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;