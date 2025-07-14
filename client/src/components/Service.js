import React, { useState } from 'react';
import './Service.css';

import ServiceHead from '../assets/service-head.png';
import img1 from '../assets/service-1.png';
import img2 from '../assets/service-2.png';
import img3 from '../assets/service-3.png';
import img4 from '../assets/service-4.png';
import img5 from '../assets/service-5.png';

import border1 from '../assets/prod-bord.png';
import border2 from '../assets/cont-bord.png';
import border3 from '../assets/cine-bord.png';
import border4 from '../assets/stud-bord.png';
import border5 from '../assets/video-bord.png';

const services = [
  { name: 'PRODUCT PHOTOGRAPHY', img: img1, border: border1 },
  { name: 'CONTENT CREATION', img: img2, border: border2 },
  { name: 'CINEMATOGRAPHY', img: img3, border: border3 },
  { name: 'STUDIO PRODUCTION', img: img4, border: border4 },
  { name: 'VIDEO EDITING', img: img5, border: border5 },
];

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="services-container" id='services'>
      <div className="service-head">
        <img src={ServiceHead} alt="Service Head" />
      </div>

      <div className="content-box">
        <div className="image-box">
          <img className="main-img" src={services[activeIndex].img} alt="service" />
          <img className="border-img" src={services[activeIndex].border} alt="border" />
        </div>

        <ul>
        {services.map((service, index) => (
  <li
    key={index}
    className={activeIndex === index ? 'active' : ''}
    onMouseEnter={() => {
      if (window.innerWidth > 768) setActiveIndex(index); // Only for desktop
    }}
    onClick={() => {
      if (window.innerWidth <= 768) setActiveIndex(index); // Only for mobile
    }}
  >
    {service.name}
  </li>
))}
        </ul>
      </div>
    </div>
  );
}
