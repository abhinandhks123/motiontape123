import './About.css';
import cameraImage from '../assets/camera-torn.png'; // your real image
import collab1 from '../assets/collab-1.png'
import collab2 from '../assets/collab-2.png'
import collab3 from '../assets/collab-3.png'
import collab4 from '../assets/collab-4.png'
import collab5 from '../assets/collab-5.png'
import collab6 from '../assets/collab-6.png'
import collab7 from '../assets/collab-7.png'


export default function About() {
  return (
    <section className="about-section" id='about'>
      <div className="left-content">
        <h1>
          About <br />
          <span>US  <div className="image-mask">
          <img src={cameraImage} alt="Camera" />
        </div></span>
        </h1>
       
      </div>

      <div className="right-content">
        <p>
        Lorem ipsum dolor sit amet consectetur. Nunc lorem velit cras eget nunc ut hac. Erat massa erat amet tincidunt aliquam sed enim. Quam senectus enim quis maecenas porta sagittis eu varius vulputate. Duis diam quis purus massa sed nec euismod dolor egestas. Ullamcorper fames id at arcu massa 
        </p>
        <button className="know-more">Know More</button>
      </div>
      <section className="partners-section">
      <h2>Collaborate With</h2>
      <div className="partners-logos">
        <img src={collab1} alt="NCL" />
        <img src={collab3} alt="Agriculture" />
        <img src={collab2} alt="NCL" />
        <img src={collab1} alt="NCL" />
        <img src={collab4} alt="Center Logo" className="center-logo" />
        <img src={collab5} alt="AI" />
        <img src={collab6} alt="Partner 1" />
        <img src={collab7} alt="Partner 2" />
      </div>
    </section>
    </section>

  );
}
