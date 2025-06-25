// src/components/JoinUs/Join.jsx
import React from "react";
import "./Join.css";
import Lottie from "lottie-react";
import communityAnimation from "./community-animation.json";
import { useNavigate } from "react-router-dom";

const JoinNow = () => {
  const navigate = useNavigate();

  return (
    <section className="join-section" id="join">
      <div className="join-container">
        <div className="join-content">
          <h2 className="join-text">
            Over All <span className="highlight">10,000+</span> Talented
            <br />
            People Registered in
            <br />
            <span className="highlight">AI Vise</span>
          </h2>
          <button className="join-btn" onClick={() => navigate("/leaderboard")}>
            View LeaderBoard
          </button>
        </div>

        <div className="animation-container">
          <Lottie
            animationData={communityAnimation}
            loop={true}
            autoplay={true}
            className="community-animation"
          />
          <div className="animation-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
