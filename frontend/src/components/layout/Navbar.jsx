// css
import '@assets/css/components/navbar.css'
// hooks
import { useEffect, useState } from "react";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "solid" : ""}`}>
      <div className="nav-left">
        <div className="logo-mark">✦</div>

        <div className="nav-name">
          <span className="main">Manomay</span>
          <br />
          <span className="sub">Maternity & Nursing Home - Lalghati,Bhopal.</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><a className='nav-link'> About </a></li>
        <li><a className='nav-link'> Services </a></li>
        <li><a className='nav-link'> Doctor </a></li>
        <li><a className='nav-link'> Clinic </a></li>
        <li><a className='nav-link'> Stories </a></li>

        <li><a  className="btn-book">Book Visit</a></li>
      </ul>
    </nav>
  );
}