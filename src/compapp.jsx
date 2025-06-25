import React, { useState } from 'react';
import Compiler from './components/compiler/compiler';
import InstructionPage from './components/compiler/InstructionPage';
import ThankYou from './components/compiler/ThankYouPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    // <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={hasStarted ? <Compiler /> : <InstructionPage onStart={() => setHasStarted(true)} />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    // </Router> 
  );
}

export default App;
