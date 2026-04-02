import '@assets/css/components/herosection.css'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Hospital } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef();

 

  return (
    <section ref={heroRef} className="hero">
      {/* BACKGROUND GLOW */}
      <div className="hero-bg"></div>

      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
      
          <div className="hero-eyebrow">
            <div className='eyebrow-ornament'>
              <div className='orn-line'></div>
              <div className='orn-diamong'>◆</div>
            </div>
              <span className='hero-eyebrow-text'>Lalghati, Bhopal · Since 2014</span>
          </div>

          <h1 className="hero-title">
            <span className="outline">Exceptional</span><br />
            <span className="gold">Maternity Care</span><br />
            <span>for Every</span><br />
            <span>New Beginning</span>
          </h1>

          <p className="hero-desc">
           A sanctuary where clinical excellence meets heartfelt compassion — trusted by thousands of Bhopal families through over a decade of dedicated maternity care.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Schedule Consultation</button>
            <button className="btn-outline">Call Now</button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hero-card">
          <p className="card-title">A Legacy of Safe Deliveries</p>

          <div className="card-grid">
            <div className='hsc-item'>
              <h2 className='hsc-num'>10<sup>+</sup></h2>
              <p className='hsc-label'>Years Practice</p>
            </div>
            <div className='hsc-item'>
              <h2 className='hsc-num'>1000<sup>+</sup></h2>
              <p className='hsc-label'>Safe Deliveries</p>
            </div>
            <div className='hsc-item'>
              <h2 className='hsc-num'>24/<sup>7</sup></h2>
              <p className='hsc-label'>Emergency</p>
            </div>
            <div className='hsc-item'>
              <h2 className='hsc-num'>98<sup>%</sup></h2>
              <p className='hsc-label'>Satisfaction</p>
            </div>
          </div>
          <div className="hsc-divider"></div>

          <div className="hsc-badge">
          <div className="hsc-badge-icon"><Hospital color='var(--gold)'/></div>
          <div className="hsc-badge-text">Bhopal's <strong>Most Trusted</strong> Maternity Home</div>
        </div>
        </div>

      </div>
    </section>
  );
}