import React from 'react';
import './Team.css';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Deepthi", role: "Frontend Developer", img: "https://via.placeholder.com/100"
 },
  { name: "Akash", role: "Backend Developer", img: "https://via.placeholder.com/100"
 },
  { name: "Sneha", role: "UI/UX Designer", img: "https://via.placeholder.com/100"
 },
  { name: "Rahul", role: "AI Specialist", img: "https://via.placeholder.com/100"
 },
  { name: "Priya", role: "Project Manager", img: "https://via.placeholder.com/100"
},
  { name: "Karan", role: "QA Tester", img: "https://via.placeholder.com/100"
 },
];

const Team = () => {
  return (
    <div className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            className="team-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={member.img} alt={member.name} className="team-img" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
