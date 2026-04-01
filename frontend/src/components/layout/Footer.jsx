import '@assets/css/components/footer.css'
import {  Clock,  MapPin,  MessageSquare, Phone,  Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-logo-main">Manomay</div>
            <span className="footer-logo-sub">
              Maternity & Nursing Home, Bhopal
            </span>

            <p className="footer-tagline">
              A trusted sanctuary for mothers and newborns — where clinical
              excellence meets genuine, heartfelt care. Serving Bhopal families since 2014.
            </p>

            <div className="footer-divider"></div>

            <div className="footer-social">
            
              <div className="social-btn"><MessageSquare/></div>
              <div className="social-btn"><Smartphone/></div>

            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li>Maternity Care</li>
              <li>Normal Delivery</li>
              <li>C-Section</li>
              <li>Newborn Care</li>
              <li>Gynecology</li>
              <li>Emergency 24/7</li>
              <li>Diagnostics & Lab</li>
            </ul>
          </div>

          {/* NAVIGATE */}
          <div className="footer-col">
            <h5>Navigate</h5>
            <ul>
              <li>About Us</li>
              <li>Our Doctor</li>
              <li>The Clinic</li>
              <li>Patient Stories</li>
              <li>Book Appointment</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col-map">
            <h5> <MapPin size={14}/> Find Us</h5>

            <div className="contact-list">

              <div className="map-wrapper">
                  <a
                    href="https://www.google.com/maps/place/Manomay+Maternity+and+Nursing+Home/@23.2768163,77.3670605,20.02z/data=!4m6!3m5!1s0x397c67e04841f0cb:0x8981e8210e794fe5!8m2!3d23.2767575!4d77.367317!16s%2Fg%2F11tnk53gfc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-btn"
                  >
                    Get Directions →
                  </a>
                </div>
            </div>

              <div className="contact-item">
                <span><Phone/></span>
                <p>+91 755 400 1234</p>
              </div>

              <div className="contact-item">
                <span><Clock/></span>
                <p>
                  OPD: 9am - 7pm daily <br />
                  Emergency: 24 * 7
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>For Buisness Contact : 7987725298</p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>

      
    </footer>
  );
}