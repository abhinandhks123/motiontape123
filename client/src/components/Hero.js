import React from 'react';
import './Hero.css';
import photo2 from '../assets/photo1.png';
import photo1 from '../assets/photo2.png';
import logo from '../assets/logo.png'; // or styled text

export default function Hero() {
  return (
    <section className="hero" id='home'>
      <div className="overlay">
        <div className="logo">
          <img src={logo} alt="Motiontape" />
        </div>
        <div className="photos">
          <img src={photo1} className="ripped1" alt="Scene 1" />
          <img src={photo2} className="ripped2" alt="Scene 2" />
        </div>
      </div>
    </section>
  );
}
