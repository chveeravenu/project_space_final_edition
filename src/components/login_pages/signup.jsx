import { useState } from 'react';
import './siginup.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import axios from 'axios';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match!");
    }

    // if (localStorage.getItem(form.email)) {
    //   return alert("User already exists!");
    // }

    const userData = {
      name: form.name,
      email: form.email,
      password: form.password
    };
    axios.post("https://projectspace-backend.onrender.com/register",userData)
    .then((res) =>{
      alert('"Signup successful!"')
    window.location.href = "/signin";
    })
    .catch((err) => {
      alert("enter the valid details for mentioned fields")
    })
    // localStorage.setItem('user', JSON.stringify(userData));
    // alert("Signup successful!");
  };

  return (
    <div className="signup-page">
    <div className="aiwise-wrapper">
      <div className="logo-title">
        <img src="https://cdn-icons-png.flaticon.com/512/3845/3845725.png" alt="logo" />
        <h1>AI <span>Wise 🤖</span></h1>
        <p>Join the AI revolution today</p>
        <div className="tags">
          <span>⚡ Smart</span>
          <span>💡 Intuitive</span>
          <span>🪶 Powerful</span>
        </div>
      </div>

      <div className="auth-card">
        <div className="tabs">
          <button onClick={() => window.location.href = "/signin"}>Login</button>
          <button className="active">Sign Up</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <FaUser />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaLock />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="input-box">
            <FaLock />
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="enter-btn">
            🤖 Join AI Wise →
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
