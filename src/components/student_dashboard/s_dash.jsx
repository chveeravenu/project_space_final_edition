import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoreSummary from './ScoreSummary';
import './Dashboard.css';

const Dashboard = () => {
  const [student, setStudent] = useState(null);
  const email = localStorage.getItem('loginuser');
  console.log(email)

  useEffect(() => {
    if (!email) return;
    axios
      .post('https://projectspace-backend.onrender.com/get-student-by-email', { email })
      .then((res) => setStudent(res.data))
      .catch(console.error);
  }, [email]);

  if (!student) return <div className="loading">Loading...</div>;

  return (
    <div className="student-dashboard">
    <div className="dashboard-container">
      <div className="profile-banner">
        <div className="profile-info">
          <h2>{student.name}</h2>
          <p>{student.email}</p>
        </div>
      </div>

      <div className="main-content">

        {/* Coding Contests */}
        <section className="section">
          <h1>Coding Contests</h1>
          {student.codingContestsTaken.length === 0 ? (
            <p className="empty-msg">You haven't taken any coding contests yet.</p>
          ) : (
            <div className="card-container">
              {student.codingContestsTaken.map((c, i) => (
                <div className="card" key={i}>
                  <p><strong>Code:</strong> {c.contestCode}</p>
                  <p><strong>Score:</strong> {c.score}</p>
                  <p><strong>Date:</strong> {new Date(c.dateTaken).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* AI Interviews */}
        <section className="section">
          <h1>AI Interviews</h1>
          {student.aiMockInterviewsTaken.length === 0 ? (
            <p className="empty-msg">You haven't taken any AI interviews yet.</p>
          ) : (
            <div className="card-container">
              {student.aiMockInterviewsTaken.map((a, i) => (
                <div className="card" key={i}>
                  <p><strong>Code:</strong> {a.interviewCode}</p>
                  <p><strong>Score:</strong> {a.score}</p>
                  <p><strong>Date:</strong> {new Date(a.dateTaken).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* MCQ Tests */}
        <section className="section">
          <h1>MCQ Tests</h1>
          {student.mcqTestsTaken.length === 0 ? (
            <p className="empty-msg">You haven't taken any MCQ tests yet.</p>
          ) : (
            <div className="card-container">
              {student.mcqTestsTaken.map((m, i) => (
                <div className="card" key={i}>
                  <p><strong>Code:</strong> {m.testCode}</p>
                  <p><strong>Technology:</strong> {m.technology}</p>
                  <p><strong>Score:</strong> {m.score}</p>
                  <p><strong>Date:</strong> {new Date(m.dateTaken).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Summary */}
        <ScoreSummary student={student} />

      </div>
    </div>
    </div>
  );
};

export default Dashboard;