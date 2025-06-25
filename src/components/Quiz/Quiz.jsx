import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Quiz.css';

const Quiz = () => {
  const { techName } = useParams();
  const [quizState, setQuizState] = useState({
    started: false,
    questions: [],
    currentIndex: 0,
    score: 0,
    loading: false,
    error: null,
    answers: {},
    skipped: new Set(),
    completed: false,
    timeLeft: 60,
    timerActive: false
  });
  const [showResults, setShowResults] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (quizState.timerActive && quizState.timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setQuizState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    } else if (quizState.timeLeft === 0 && quizState.timerActive) {
      navigateQuestion('next');
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [quizState.timeLeft, quizState.timerActive]);

  const fetchQuestions = async () => {
    setQuizState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const response = await fetch(`https://projectspace-backend.onrender.com/questions/${techName}`);
      if (!response.ok) throw new Error('Failed to fetch questions');
      const data = await response.json();
      setQuizState(prev => ({
        ...prev,
        questions: data,
        started: true,
        loading: false,
        timerActive: true
      }));
    } catch (err) {
      setQuizState(prev => ({
        ...prev,
        error: err.message,
        loading: false
      }));
    }
  };



  const handleAnswer = (selectedOption) => {
    const { questions, currentIndex, answers } = quizState;
    const currentQuestion = questions[currentIndex];
    const previousAnswer = answers[currentIndex];

    setQuizState(prev => {
      const newAnswers = { ...prev.answers, [currentIndex]: selectedOption };
      let scoreChange = 0;

      if (selectedOption === currentQuestion.correctAnswer) {
        scoreChange = 10;
      } else if (previousAnswer === currentQuestion.correctAnswer) {
        scoreChange = -10;
      }

      return {
        ...prev,
        answers: newAnswers,
        score: prev.score + scoreChange,
        skipped: new Set([...prev.skipped].filter(id => id !== currentIndex))
      };
    });
  };

  const navigateQuestion = (direction) => {
    setQuizState(prev => {
      const newIndex = direction === 'next' ? prev.currentIndex + 1 : prev.currentIndex - 1;
      const isSkipped = prev.answers[prev.currentIndex] === undefined;

      const newSkipped = new Set(prev.skipped);
      if (direction === 'next' && isSkipped) {
        newSkipped.add(prev.currentIndex);
      }

      const completed = newIndex >= prev.questions.length;

      return {
        ...prev,
        currentIndex: newIndex,
        skipped: newSkipped,
        completed,
        timeLeft: completed ? 0 : 60,
        timerActive: !completed
      };
    });
  };

  const restartQuiz = () => {
    setQuizState({
      started: false,
      questions: [],
      currentIndex: 0,
      score: 0,
      loading: false,
      error: null,
      answers: {},
      skipped: new Set(),
      completed: false,
      timeLeft: 60,
      timerActive: false
    });
    setShowResults(false);
  };

  if (!quizState.started) {
    return (
      <div className="quiz-container">
        <h1>Interview Questions</h1>
        <div className="quiz-summary">
          <p><strong>Topic:</strong> {techName.charAt(0).toUpperCase() + techName.slice(1)}</p>
          <p><strong>Questions:</strong> {quizState.questions.length || '--'}</p>
          <p><strong>Time per question:</strong> 1 minute</p>
        </div>
        <button 
          className="start-button"
          onClick={fetchQuestions}
          disabled={quizState.loading}
        >
          {quizState.loading ? 'Loading...' : 'Start'}
        </button>
        {quizState.error && <p className="error-message">{quizState.error}</p>}
      </div>
    );
  }

  if (quizState.completed) {
    return (
      <div className="quiz-completion-container">
        <div className="completion-message">
          <h2>Done!</h2>
          <p>You attempted {quizState.questions.length - quizState.skipped.size} / {quizState.questions.length}</p>
          <p>Score secured: <strong>{quizState.score} / {quizState.questions.length * 10}</strong></p>
          <button 
            className="show-result-button"
            onClick={() => setShowResults(true)}
          >
            SHOW RESULT
          </button>
        </div>

        {showResults && (
          <div className="quiz-results">
            {quizState.questions.map((question, index) => {
              const userAnswer = quizState.answers[index];
              const correctAnswer = question.correctAnswer;
              const isCorrect = userAnswer === correctAnswer;

              return (
                <div key={index} className="question-review-container">
                  <div className="question-meta">
                    <h4 className="question-title">{index + 1}. {question.text}</h4>
                    <p className={`question-score ${isCorrect ? 'score-correct' : 'score-wrong'}`}>
                      Score {isCorrect ? '10' : '0'}
                    </p>
                  </div>
                  <div className="options-container">
                    {question.options.map((option, i) => {
                      const isSelected = userAnswer === i;
                      const isAnswer = correctAnswer === i;

                      let className = "option-review";
                      if (isAnswer) className += " correct";
                      if (isSelected && !isAnswer) className += " wrong";

                      return (
                        <div key={i} className={className}>
                          <strong>{String.fromCharCode(65 + i)}.</strong> {option}
                        </div>
                      );
                    })}
                  </div>
                  {!isCorrect && (
                    <p className="correct-answer-text">
                      Right Answer: <strong>{String.fromCharCode(65 + correctAnswer)}</strong> ({question.options[correctAnswer]})
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
        <button className="restart-button" onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="question-counter">
          {(quizState.currentIndex + 1).toString().padStart(2, '0')}/{quizState.questions.length}
        </div>
        <div className="timer">
          Time: {Math.floor(quizState.timeLeft / 60)}:{quizState.timeLeft % 60 < 10 ? '0' : ''}{quizState.timeLeft % 60}
        </div>
      </div>

      <div className="question-text">
        <h3>{currentQuestion.text}</h3>
      </div>

      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <div 
            key={index}
            className={`option-item ${quizState.answers[quizState.currentIndex] === index ? 'selected' : ''}`}
            onClick={() => handleAnswer(index)}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}.</span>
            <span className="option-text">{option}</span>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button className="nav-button skip-button" onClick={() => navigateQuestion('next')}>
          Skip
        </button>
        <button 
          className="nav-button next-button"
          onClick={() => navigateQuestion('next')}
          disabled={quizState.answers[quizState.currentIndex] === undefined}
        >
          {quizState.currentIndex === quizState.questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
