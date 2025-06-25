import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

const generateDummyData = () => {
  const data = [];
  for (let i = 1; i <= 500; i++) {
    const mcq = Math.floor(Math.random() * 101);
    const coding = Math.floor(Math.random() * 101);
    const ai = Math.floor(Math.random() * 101);
    const total = mcq + coding + ai;

    data.push({
      rank: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      mcqScore: mcq,
      codingScore: coding,
      aiScore: ai,
      totalScore: total,
    });
  }
  return data;
};

const Leaderboard = () => {
  const leaderboardData = generateDummyData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentData = leaderboardData.slice(startIdx, startIdx + itemsPerPage);

  // ✅ Scroll to top when component mounts or page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">AI Vise Leaderboard</h1>
      <div className="table-wrapper">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>MCQ Score</th>
              <th>Coding Score</th>
              <th>AI Score</th>
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((user, index) => (
              <tr key={index}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mcqScore}</td>
                <td>{user.codingScore}</td>
                <td>{user.aiScore}</td>
                <td>{user.totalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={currentPage === idx + 1 ? "active" : ""}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
