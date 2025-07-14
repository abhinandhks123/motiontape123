// components/DesignWordsImage.jsx
import React from 'react';
import designWords from '../assets/DESIGN WORDS.png';
import './DesignWordsImage.css';

const DesignWordsImage = () => {
  return (
    <div className="design-image-wrapper">
      <img src={designWords} alt="DESIGN WORDS" className="design-image" />
    </div>
  );
};

export default DesignWordsImage;
