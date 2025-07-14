
import React, { useEffect, useRef } from 'react';
import './ProjectCard.css';
import borderFrame from '../assets/vector.png';
import img1 from '../assets/project1.png';
import img2 from '../assets/project2.png';
import img3 from '../assets/project3.png';

const projects = [img1, img2, img3];

export default function ProjectCard() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth,
          behavior: 'smooth',
        });

        // Reset scroll position if at end
        setTimeout(() => {
          if (
            sliderRef.current.scrollLeft >=
            sliderRef.current.scrollWidth - sliderRef.current.offsetWidth
          ) {
            sliderRef.current.scrollTo({ left: 0, behavior: 'auto' });
          }
        }, 700);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-section" id='projects'>
      <div className="slider" ref={sliderRef}>
        {[...projects, ...projects].map((image, index) => (
          <div className="project-card" key={index}>
            <div className="frame-container">
              <img src={image} alt={`project-${index}`} className="bg-image" />
              <img src={borderFrame} alt="frame" className="border-frame" />
            </div>
            <h2>Project Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nunc lorem velit cras eget nunc ut hac.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
