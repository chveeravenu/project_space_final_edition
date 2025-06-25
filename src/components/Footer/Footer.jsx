import React, { forwardRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Footer.css';

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="footer">
      <div className="footer-highlight">
        <div className="footer-container">
          <div className="highlight-card">
            <div className="highlight-icon">
              <FaPhone />
            </div>
            <div className="highlight-content">
              <h3>24/7 Support</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <FaEnvelope />
            </div>
            <div className="highlight-content">
              <h3>Email Us</h3>
              <p>info@aiwisejobs.com</p>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="highlight-content">
              <h3>Our Location</h3>
              <p>Technical Hub</p>
            </div>
          </div>
          
          {/* <div className="highlight-card newsletter-highlight">
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button><FaPaperPlane /> Subscribe</button>
            </div>
          </div> */}
        </div>
      </div>
      
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-column">
            <div className="logo-container">
              <div className="logo">AI Wise</div>
              <div className="tagline">Connecting Talent with Opportunity</div>
            </div>
            <p className="footer-description">
              AI Wise is a leading job platform that uses artificial intelligence to match talented professionals with the perfect career opportunities.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Job Listings</a></li>
              <li><a href="#">Career Resources</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Job Categories</h3>
            <ul className="footer-links">
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Product Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Development</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Project Management</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Recent Jobs</h3>
            <ul className="recent-jobs">
              <li>
                <a href="#">Senior UX Designer</a>
                <span>San Francisco, CA</span>
              </li>
              <li>
                <a href="#">Frontend Developer</a>
                <span>New York, NY</span>
              </li>
              <li>
                <a href="#">Data Scientist</a>
                <span>Austin, TX</span>
              </li>
              <li>
                <a href="#">Product Manager</a>
                <span>Seattle, WA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            &copy; {new Date().getFullYear()} AI Vise. All rights reserved.
          </div>
          {/* <div className="footer-links-bottom">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  );

});
export default Footer;