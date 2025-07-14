// Navbar.jsx
import './Navbar.css';
import logo from '../assets/round-logo.png'; // Replace with your actual path

export default function Navbar() {
  return (
    <nav className="nav-bar">
  <div className="logo-center">
    <a href='#home'><img src={logo} alt="Logo" /></a>
  </div>

  <ul>
    <li><a href='#about'>About</a></li>
    <li><a href='#services'>Services</a></li>
    <li><a href='#projects'>Projects</a></li>
    <li><a href='#articles'>Articles</a></li>
  </ul>
</nav>
  );
}
