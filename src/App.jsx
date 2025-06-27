import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Main from './components/Main/Main.jsx';
import Steps from "./components/Steps/steps.jsx";
import JoinNow from "./components/JoinUs/Join.jsx";
import JobsCategory from './components/Jobs/Job.jsx';
import TestimonialsSlider from './components/Slider/Slider.jsx';
import Footer from './components/Footer/Footer.jsx';
import Compapp from './compapp.jsx';
import ThankYouPage from './components/compiler/ThankYouPage.jsx';
import Tests from './components/Tests/Tests.jsx';
import Quiz from './components/Quiz/Quiz.jsx';
import Leaderboard from "./components/JoinUs/Leaderboard.jsx";
import Signin from './components/login_pages/sigin.jsx';
import Signup from './components/login_pages/signup.jsx';
import StudentDashboard from './components/student_dashboard/s_dash.jsx';
import Interview from './components/interview/Interview.jsx';
import Resumec from './components/ats/Resumechecker.jsx';
import Te from './components/testing/te.jsx';

import { useEffect } from 'react';

function AppContent() {
  const footerRef = useRef(null);
  const stepsRef = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTosteps = () => {
    stepsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pages that should NOT show the Header
  const noHeaderRoutes = ['/signin', '/signup'];

  return (
    <div className="app">
      {!noHeaderRoutes.includes(location.pathname) && (
        <Header scrollToFooter={scrollToFooter} scrollTosteps={scrollTosteps} />
      )}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Steps ref={stepsRef} />
                <JoinNow />
                <JobsCategory />
                <TestimonialsSlider />
                <Footer ref={footerRef} />
              </>
            }
          />
          <Route path="/compiler" element={<Compapp />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/practice" element={<Tests />} />
          <Route path="/quiz/:techName" element={<Quiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/stdashboard" element={<StudentDashboard />} />
          <Route path="/interviews" element={<Interview />} />
          <Route path="/resumec" element={<Resumec />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
