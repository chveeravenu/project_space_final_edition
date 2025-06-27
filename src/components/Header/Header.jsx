import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = ({ scrollToFooter,scrollTosteps }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const loginUser = localStorage.getItem('loginuser');
    setIsLoggedIn(loginUser !== null);
    setAdmin(loginUser !== 'admin@gmail.com'); // true = student
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loginuser');
    setIsLoggedIn(false);
    setMenuOpen(false);
    alert('Logged out successfully.');
    navigate('/');
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('light-mode', !darkMode);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      scrollToFooter?.();
    }, 100);
  };

  const handleContactClic = (e) => {
  e.preventDefault();
  navigate('/');
  setTimeout(() => {
    scrollTosteps?.(); // ✅
  }, 100);
};


  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-brand">
          <img src={logo} alt="AI Wise Logo" className="logo-img" />
          <h1 className="brand-text">AI Vise</h1>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
            {admin && <li><NavLink to="/stdashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink></li>}
            {/* <li><NavLink to="/contests" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contests</NavLink></li> */}
            <li><NavLink to="/practice" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Practice</NavLink></li>
            <li><a href="/" onClick={handleContactClic} className="nav-link">interview</a></li>
            <li>
              <a href="/" onClick={handleContactClick} className="nav-link">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="right-actions">
          {!isLoggedIn ? (
            <NavLink to="/signin" className="sign-in-btn">Sign In</NavLink>
          ) : (
            <span className="logout" onClick={handleLogout}>Logout</span>
          )}
          <button className="theme-icon-btn" onClick={toggleTheme}>
            {darkMode ? <FiSun size={18} color="#EAB308" /> : <FiMoon size={18} color="#ffffff" />}
          </button>
        </div>

        <div className="mobile-actions">
          <button className="theme-icon-btn" onClick={toggleTheme}>
            {darkMode ? <FiSun size={18} color="#EAB308" /> : <FiMoon size={18} color="#ffffff" />}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(true)}>&#9776;</button>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>&times;</button>
        <ul>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/stdashboard" onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>
          <li><NavLink to="/contests" onClick={() => setMenuOpen(false)}>Contests</NavLink></li>
          <li><NavLink to="/practice" onClick={() => setMenuOpen(false)}>Practice</NavLink></li>
          <li><NavLink to="/interviews" onClick={() => setMenuOpen(false)}>Interviews</NavLink></li>
          <li><a href="/" onClick={(e) => { e.preventDefault(); setMenuOpen(false); handleContactClick(e); }}>Contact Us</a></li>
        </ul>
        {!isLoggedIn ? (
          <NavLink to="/signin" onClick={() => setMenuOpen(false)} className="mobile-auth-link">Sign In</NavLink>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </>
  );
};

export default Header;
