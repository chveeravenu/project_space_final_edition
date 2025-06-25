// InstructionPage.jsx
import React from 'react'
import './instruction.css'

function InstructionPage({ onStart }) {
  return (
    <div className="instruction-container">
      <h1>Instructions & Proctoring Rules</h1>
      <ul className="rules-list">
        <li>Do not open new tabs or switch windows. Activity is monitored.</li>
        <li>Ensure your camera is on at all times during the test.</li>
        <li>Audio and screen recording may be enabled by the system.</li>
        <li>Multiple faces on the screen may lead to disqualification.</li>
        <li>Any attempt to navigate away from the test may end your session.</li>
        <li>Use the on-screen editor only; external IDEs are not permitted.</li>
        <li>Make sure your internet connection is stable.</li>
        <li>You will be auto-submitted after the timer runs out.</li>
      </ul>
      <button className="start-btn" onClick={onStart}>Start Coding</button>
    </div>
  )
}

export default InstructionPage
