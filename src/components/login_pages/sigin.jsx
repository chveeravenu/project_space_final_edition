import { useState } from 'react';
import './sigin.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {

  const navigate = useNavigate();
  

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });


  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // const stored = localStorage.getItem(form.loginuser);
    // if (!stored) return alert('User not found!');
    // const user = JSON.parse(stored);
    if (form.email === "admin@gmail.com"){
      // localStorage.setItem('loginuser',form.email)
      console.log("jksbv")
      window.location.href = "https://admin-dash-nine-pied.vercel.app/";
    }
    else{
      console.log("asjldv")
    axios.post('https://projectspace-backend.onrender.com/login',{"email":form.email,"password":form.password})
    .then((res) =>{
      console.log("def")
      alert('Login success!')
      localStorage.setItem('loginuser',form.email)
      navigate('/')
    })
    .catch((err) =>{
     alert('Incorrect password');
    })
    }
    // if (user.password === form.password) { 
    //   alert('Login success!')
    //   localStorage.setItem('loginuser',form.email)
    //   navigate('/')
    // } else {

    //  alert('Incorrect password');
    // }
  };

  return (
     <div className="signin-page">
    <div className="aiwise-wrapper">
      <div className="logo-title">
        <img src="https://cdn-icons-png.flaticon.com/512/3845/3845725.png" alt="logo" />
        <h1>AI <span>Wise 🤖</span></h1>
        <p>Welcome back to the future of intelligence</p>
        <div className="tags">
          <span>⚡ Smart</span>
          <span>💡 Intuitive</span>
          <span>🪶 Powerful</span>
        </div>
      </div>

      <div className="auth-card">
        <div className="tabs">
          <button className="active">Login</button>
          <button onClick={() => window.location.href = "/signup"}>Sign Up</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <FaEnvelope />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          </div>

          <div className="input-box">
            <FaLock />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="forgot">Forgot Password?</div>

          <button className="enter-btn" type="submit">
            🤖 Enter AI Wise →
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signin;
