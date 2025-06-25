import React, { useEffect, useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import './compiler1.css';
import axios from 'axios';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Compiler() {
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [codeMap, setCodeMap] = useState({});
  const [scores, setScores] = useState([0, 0]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [constraints, setConstraints] = useState([]);
  const [starterCode_python, setStarterCodePython] = useState('');
  const [starterCode_cpp, setStarterCodeCpp] = useState('');
  const [starterCode_java, setStarterCodeJava] = useState('');
  const [testCases, setTestCases] = useState([]);
  const [allTest, setAllTest] = useState([]);

  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [timer, setTimer] = useState(3600); // 1 hour in seconds
  const [results, setResults] = useState([]);
  const [isResultMinimized, setIsResultMinimized] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [resultInput, setResultInput] = useState('run to see data');
  const [resultOutput, setResultOutput] = useState('run to see data');
  const [resultActual, setResultActual] = useState('run to see data');
  const [resultStatus, setResultStatus] = useState('run to see data');
  const [isRun, setIsRun] = useState(true);

  // Handles ending the test session
  const handleFinish = () => {
    clearInterval(timerRef.current);
    document.exitFullscreen?.();
    // Optional: store score to backend here
    navigate('/thank-you');
  };

  useEffect(() => {
    const elem = containerRef.current;
    if (elem?.requestFullscreen) elem.requestFullscreen();
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const handleBlur = () => handleFinish();
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) handleFinish();
    };
    window.addEventListener("blur", handleBlur);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const [res1, res2] = await Promise.all([
          axios.get('https://compiler-backend-oz9t.onrender.com/pr'),
          axios.get('https://compiler-backend-oz9t.onrender.com/pr'),
        ]);
        const second = res1.data._id === res2.data._id
          ? (await axios.get('https://compiler-backend-oz9t.onrender.com/pr')).data
          : res2.data;

        setQuestions([res1.data, second]);
      } catch (err) {
        console.error('Error fetching questions:', err);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const q = questions[currentIndex];
    if (!q) return;

    setTitle(q.title);
    setDescription(q.description);
    setConstraints(q.constraints || []);
    setStarterCodePython(q.starterCode_python || '');
    setStarterCodeCpp(q.starterCode_cpp || '');
    setStarterCodeJava(q.starterCode_java || '');
    setTestCases(q.testCases.filter(tc => tc.isSample));
    setAllTest(q.testCases || []);

    setCodeMap(prev => {
      if (!(currentIndex in prev)) {
        const starter =
          selectedLanguage === 'python' ? q.starterCode_python :
          selectedLanguage === 'cpp' ? q.starterCode_cpp :
          selectedLanguage === 'java' ? q.starterCode_java : '';
        return { ...prev, [currentIndex]: starter };
      }
      return prev;
    });
  }, [questions, currentIndex, selectedLanguage]);

  const handleEditorChange = (value) => {
    setCodeMap(prev => ({ ...prev, [currentIndex]: value || '' }));
  };

  const handleRunOrSubmit = async (type) => {
    const code = codeMap[currentIndex] || '';
    const testList = (type === 'run' ? testCases : allTest).map(({ isSample, ...tc }) => tc);

    const versionMap = {
      python: '3.10.0',
      c: '10.2.0',
      cpp: '10.2.0',
      java: '15.0.2'
    };

    setIsLoading(true);
    setIsResultMinimized(false);
    setIsRun(type === 'run');

    try {
      const res = await axios.post('https://compiler-backend-oz9t.onrender.com/run', {
        language: selectedLanguage,
        version: versionMap[selectedLanguage],
        code,
        testCases: testList
      });

      const resultData = res.data.results;

      if (type === 'run') {
        const runResult = resultData[0];
        console.log(runResult)
        setResultInput(runResult.input);
        setResultStatus(runResult.status);
        setResultActual(runResult.actualOutput);
        setResultOutput(runResult.expectedOutput);
      } else {
        setResults(resultData);
        const allPassed = resultData.every(r => r.status);
        setScores(prev => {
          const updated = [...prev];
          if (allPassed && updated[currentIndex] === 0) updated[currentIndex] = 50;
          return updated;
        });
      }
    } catch (err) {
      console.error('Error during execution:', err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className='main_frame' ref={containerRef}>
      <div className='question_discription'>
        <div className='question-toggle'>
          {[0, 1].map(i => (
            <button key={i} onClick={() => setCurrentIndex(i)} disabled={currentIndex === i}
              style={{
                backgroundColor: currentIndex === i ? "#00cec9" : "#292B3D",
                color: 'white', padding: "5px 10px", borderRadius: "100%", border: "none"
              }}>
              {i + 1}
            </button>
          ))}
        </div>

        <div className='des_matter'><strong>{title}</strong></div>
        <div className='des_matter'>{description}</div>

        <div className='des_matter'><strong>Sample Testcases:</strong></div>
        {testCases.map((tc, i) => (
          <div key={i} className='des_matter'>
            <div><strong>Test case {i + 1}:</strong></div>
            <div>Input: {tc.input}</div>
            <div>Expected Output: {tc.expectedOutput}</div>
          </div>
        ))}

        {constraints.length > 0 && (
          <div className='des_matter'>
            <strong>Constraints:</strong>
            <ul>
              {constraints.flatMap(item =>
                item.split(';').map(line => line.trim()).filter(Boolean)
              ).map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='parent_editor'>
        <div className='answer_submit_div'>
          <div className='answer_button1'>⏱ {formatTime(timer)}</div>
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
          <div className='answer_button2'>
            <div className={`answer_button3 ${isLoading ? 'disabled' : ''}`} onClick={!isLoading ? () => handleRunOrSubmit('run') : null}>
              {isLoading ? 'Running...' : 'Run'}
            </div>
            <div className='answer_button3' onClick={() => handleRunOrSubmit('submit')}>Submit</div>
            <div className='answer_button3' onClick={handleFinish}>Finish</div>
          </div>
        </div>

        <Editor
          height={isResultMinimized ? "90vh" : "45vh"}
          language={selectedLanguage}
          value={codeMap[currentIndex] || ''}
          theme="vs-dark"
          className="main_editor_div"
          options={{ fontSize: 14, minimap: { enabled: true }, scrollBeyondLastLine: false, automaticLayout: true }}
          onChange={handleEditorChange}
        />

        <div className={`results-container ${isResultMinimized ? 'minimized' : 'open'}`}>
          <div className='results-header' onClick={() => setIsResultMinimized(prev => !prev)}>
            <strong>Test Results</strong>
            <span className='toggle-icon'>
              {isResultMinimized ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {!isResultMinimized && (
            <div className='results-body'>
              {isLoading ? (
                <div className="loader-container">
                  <div className="spinner"></div>
                  <p>Running code, please wait...</p>
                </div>
              ) : (
                <div className='results-card1'>
                  {isRun ? (
                    <div className='input_da'>
                      <div className='i2'><div className='i3'>Input</div><div>{resultInput}</div></div>
                      <div className='i2'><div className='i3'>Expected Output</div><div>{resultOutput}</div></div>
                      <div className='i2'><div className='i3 ii' style={{overflowY:"scroll"}}>Actual Output</div><div>{resultActual}</div></div>
                      <div className='i2' style={{ boxShadow: `${resultStatus ==="pass" ? "0 0 6px 4px green" :"0 0 6px 4px red"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className='i3'>{resultStatus}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="submission-summary">
                      {results.map((res, idx) => (
                        <div key={idx} className="submission-result"
                          style={{
                            padding: '10px',
                            marginBottom: '10px',
                            borderRadius: '8px',
                            backgroundColor: res.status === "pass" ? '#e6ffed' : '#ffe6e6',
                            boxShadow: `0 0 8px ${res.status ==="pass" ? 'green' : 'red'}`,
                            color: res.status ? 'green' : 'red',
                            fontWeight: 'bold'
                          }}>
                          Test Case {idx + 1} — {res.status === "pass" ? 'Passed ✅' : 'Failed ❌'}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Compiler;
