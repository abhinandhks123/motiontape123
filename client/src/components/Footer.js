import React from 'react';
import './Footer.css';
import Designlogo from '../assets/DESIGN WORDS2.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>(+91) 8080 123 325</p>
          <p>demo@gmail.com</p>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <p>MRK Castle</p>
          <p>Demo location</p>
          <p>KNM street 554</p>
          <p>TKM Road</p>
          <p>Calicut 545456</p>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h3>Social</h3>
          <p><a href='/'>Instagram</a></p>
          <p><a href='/'>LinkedIn</a></p>
          <p><a href='/'>X</a></p>
        </div>

        {/* Nave */}
        <div className="footer-column">
          <h3>Nav</h3>
          <p><a href='/'>About</a></p>
          <p><a href='/'>Services</a></p>
          <p><a href='/'>Projects</a></p>
          <p><a href='/'>Articles</a></p>
        </div>
      </div>

      {/* Background text */}
      <div className="footer-bg-text"><img src={Designlogo} alt='designlOGO'/></div>
    </footer>
  );
};

export default Footer;
