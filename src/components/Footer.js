import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Información Principal */}
        <div className="footer-info">
          <h3 className="footer-title">GymFluencer</h3>
          <p>
            Track your fitness journey with ease. Log workouts, count reps, and monitor progress to achieve your goals.
          </p>
          <p className="footer-email">Contact: <a href="mailto:pjuliogf0204@gmail.com">pjuliogf0204@gmail.com</a></p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#feature">Our Features</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 GymFluencer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
