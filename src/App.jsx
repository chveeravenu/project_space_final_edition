// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef,useState,useEffect } from 'react';
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

// import Overview from './pages/OverviewPage.jsx'
import Admindash from './admindash.jsx';

function App() {
  const footerRef = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  //   useEffect(() => {
  //   const user = localStorage.getItem('loginuser');
  //   if (user === 'admin@gmail.com') {
  //     setIsAdmin(true);
  //   } else {
  //     setIsAdmin(false);
  //   }
  // }, []);

  return (
     <Router>
      <div className="app">
        <Header scrollToFooter={scrollToFooter} />
        <main className="main-content">
          <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Main />
                      <Steps />
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
      
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
