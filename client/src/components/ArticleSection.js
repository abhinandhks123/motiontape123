import React from 'react';
import './ArticleSection.css';
import { FaPlayCircle } from 'react-icons/fa';
import VideoThumb from '../assets/vdo-thumb.png'


const ArticleSection = () => {
  return (
    <div className="articles-container" id='articles'>
      <h1 className="articles-title">Articles</h1>

      <div className="article-content">
        {/* Left: Image/Video */}
        <div className="article-image">
          <img
            src={VideoThumb}
            alt="studio setup"
            className="image-bg"
          />
          <div className="play-button">  <FaPlayCircle  className='play-icon' /></div>
        </div>

        {/* Right: Border-Image Text Box */}
        <div className="article-border-box">
          <div className="article-text-content">
            <h2 className="article-heading">
              Minimalism vs. Maximalism: Finding Your Brand’s Visual Voice
            </h2>
            <p className="article-description">
              Break down two of today’s biggest design trends, with tips on
              choosing the right approach for different industries and audiences.
            </p>
            <button className="read-button">Read</button>
          </div>
        </div>
      </div>

    </div>

     
  );
};

export default ArticleSection;
