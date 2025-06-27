import React, { useState } from 'react';
import { Upload, FileText, BarChart3, Loader2 } from 'lucide-react';
import './ResumeChecker.css'; // Use your actual CSS file name

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      setError(null);
    } else {
      setError('Please upload a valid PDF file.');
    }
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const getScoreValue = (scoreString) => {
    return parseInt(scoreString.replace('%', '').trim());
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#10b981';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const handleAnalyze = async () => {
    if (!resumeFile || !jobDescription.trim()) {
      setError('Please provide both resume PDF and job description.');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setResults(null);

    const formData = new FormData();
    formData.append('file', resumeFile);
    formData.append('job_description', jobDescription);

    try {
      const response = await fetch('https://python-backend-1-ya4b.onrender.com/evaluate', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message || 'Failed to analyze resume');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="container c1">
      <h1 className="c2">ATS Resume Analyzer</h1>
      <p className="c3">Analyze your resume against a job description using AI</p>

      <label className="c4">Upload Resume (PDF)</label>
      <div className="c5">
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        {resumeFile && <span>{resumeFile.name}</span>}
        <FileText size={20} />
      </div>

      <label className="c4">Job Description</label>
      <textarea
        className="c6"
        value={jobDescription}
        onChange={handleJobDescriptionChange}
        placeholder="Paste job description here..."
      />

      <button className="c7" onClick={handleAnalyze} disabled={isAnalyzing}>
        {isAnalyzing ? (
          <>
            <Loader2 size={18} className="spin" /> Analyzing...
          </>
        ) : (
          <>
            <BarChart3 size={18} /> Analyze Resume
          </>
        )}
      </button>

      {error && <div className="c8">{error}</div>}

      {results && (
        <div className="c9">
          <div
            className="c10"
            style={{
              background: `conic-gradient(${getScoreColor(
                getScoreValue(results.Final_ATS_Score_Percentage)
              )} ${getScoreValue(results.Final_ATS_Score_Percentage)}%, #1f2937 ${getScoreValue(
                results.Final_ATS_Score_Percentage
              )}%)`,
            }}
          >
            <div className="c11">{results.Final_ATS_Score_Percentage}</div>
          </div>
          <p>ATS Compatibility Score</p>
        </div>
      )}
    </div>
  );
}

export default App;
