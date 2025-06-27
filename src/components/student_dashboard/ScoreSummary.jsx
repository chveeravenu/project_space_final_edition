import React from 'react';
// import './dashboard.css';
import './Dashboard.css';
const ScoreSummary = ({ student }) => {
  if (!student) return null;

  const sum = (arr) => arr.reduce((acc, val) => acc + val.score, 0);
  const avg = (arr) => (arr.length ? Math.round(sum(arr) / arr.length) : 0);

  const codingAvg = avg(student.codingContestsTaken);
  const mcqAvg = avg(student.mcqTestsTaken);
  const aiAvg = avg(student.aiMockInterviewsTaken);

  return (
    <section className="section123">
      <h1>Performance Summary</h1>
      <div className="summary-container">
        <div className="summary-box">
          <h3>Coding</h3>
          <p>{codingAvg}%</p>
        </div>
        <div className="summary-box">
          <h3>MCQ</h3>
          <p>{mcqAvg}%</p>
        </div>
        <div className="summary-box">
          <h3>Interview</h3>
          <p>{aiAvg}%</p>
        </div>
      </div>
    </section>
  );
};

export default ScoreSummary;