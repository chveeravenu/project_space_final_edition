import React, { useEffect, useState } from 'react';

const App = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    // Replace with your actual API call
    fetchTests();
  }, []);

  const fetchTests = async () => {
    // Mocking backend data for now (you can connect to real API)
    const mockData = [
      { id: 1, date: '2025-06-25', time: '08:00', testUrl: '/test/1' },
      { id: 2, date: '2025-06-25', time: '23:00', testUrl: '/test/2' }
    ];
    setTests(mockData);
  };

  const isTestActive = (date, time) => {
    const testTime = new Date(`${date}T${time}:00`);
    return new Date() >= testTime;
  };

  const handleStartTest = (url) => {
    // Navigate to test page or start test logic
    window.location.href = url; // or use React Router if available
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial',color:"black" }}>
      <h2 >Scheduled Tests</h2>
      {tests.map((test) => (
        <div
          key={test.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '15px 0',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            color:"black",
          }}
        >
          <div>
            <div><strong>Date:</strong> {test.date}</div>
            <div><strong>Time:</strong> {test.time}</div>
          </div>
          <button
            onClick={() => handleStartTest(test.testUrl)}
            disabled={!isTestActive(test.date, test.time)}
            style={{
              padding: '10px 20px',
              backgroundColor: isTestActive(test.date, test.time) ? '#28a745' : '#aaa',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: isTestActive(test.date, test.time) ? 'pointer' : 'not-allowed'
            }}
          >
            Start Test
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;