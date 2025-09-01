import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Virtual Zoo</h3>
          <p>Explore the wonders of the jungle from the comfort of your home.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/animals">Animals</a></li>
            <li><a href="/game">Games</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@virtualzoo.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Virtual Zoo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;