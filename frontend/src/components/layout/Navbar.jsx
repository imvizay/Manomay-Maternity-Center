// css
import '@assets/css/components/navbar.css'
// hooks
import { useEffect, useState } from "react";


export default function Navbar() {
  const [showNav,setShowNav] = useState(true)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  let lastScrollY = window.scrollY;
    console.log("y",window.scrollY)
  const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const triggerPoint = pageHeight * 0.5; // 50% scroll

      const currentScrollY = window.scrollY;

      // background change
      setScrolled(currentScrollY > 80)

      if (currentScrollY > triggerPoint) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? "solid" : ""} ${showNav ? "show" : "hide"}`}>
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