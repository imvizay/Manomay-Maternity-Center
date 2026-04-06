import { useEffect, useRef } from "react";
import {
  CalendarCheck,
  Phone,
  ShieldCheck,
  Clock,
  Baby,
  Star,
  Award,
  Stethoscope,
  HeartPulse,
} from "lucide-react";
import "@assets/css/components/herosection.css";

export default function HeroSection() {
 

  return (
    <section className="hero">
      {/* ── BACKGROUND ── */}
    
      <div className="hero-glow" />
      
      {/* ── CONTENT ── */}
      <div className="hero-container">

        {/* ═══════════ LEFT ═══════════ */}
        <div className="hero-left">

          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <div className="eyebrow-line">
              <span />
              <i>◆</i>
            </div>
            <p className="eyebrow-text">Lalghati, Bhopal &nbsp;·&nbsp; Since 2014</p>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            <span className="t-muted">Exceptional</span>
            <span className="t-gold">Maternity Care</span>
            <span className="t-solid">for Every</span>
            <span className="t-outline">New Beginning</span>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            A sanctuary where clinical excellence meets heartfelt compassion —
            trusted by thousands of Bhopal families through over a decade of
            dedicated maternity care.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button className="btn-primary">
              <CalendarCheck size={15} strokeWidth={2} />
              Schedule Consultation
            </button>
            <button className="btn-outline">
              <Phone size={14} strokeWidth={2} />
              Call Now
            </button>
          </div>
        </div>

        {/* ═══════════ RIGHT CARD ═══════════ */}
        <div className="hero-card">

          {/* Card heading */}
          <div className="card-header">
            <span className="card-kicker">Our Legacy</span>
            <p className="card-title">A Decade of Safe Deliveries</p>
          </div>

          {/* Stats grid */}
          <div className="card-stats">
            <div className="cstat">
              <div className="cstat-icon"><Star size={16} strokeWidth={1.5} /></div>
              <div className="cstat-num">10<sup>+</sup></div>
              <div className="cstat-label">Years Practice</div>
            </div>

            <div className="cstat">
              <div className="cstat-icon"><Baby size={16} strokeWidth={1.5} /></div>
              <div className="cstat-num">1000<sup>+</sup></div>
              <div className="cstat-label">Safe Deliveries</div>
            </div>

            <div className="cstat">
              <div className="cstat-icon"><Clock size={16} strokeWidth={1.5} /></div>
              <div className="cstat-num">24/<sup>7</sup></div>
              <div className="cstat-label">Emergency Care</div>
            </div>

            <div className="cstat">
              <div className="cstat-icon"><HeartPulse size={16} strokeWidth={1.5} /></div>
              <div className="cstat-num">98<sup>%</sup></div>
              <div className="cstat-label">Patient Satisfaction</div>
            </div>
          </div>

          <div className="card-divider" />

          {/* Badge */}
          <div className="card-badge">
            <Award size={22} strokeWidth={1.4} className="badge-icon" />
            <p className="badge-text">
              Bhopal's <strong>Most Trusted</strong> Maternity Home —&nbsp;
              led by <strong>Dr. Mania Kushwaha</strong>, MBBS, DGO
            </p>
          </div>

          {/* Tags */}
          <div className="card-tags">
            <span className="tag"><ShieldCheck size={11} />NABH Compliant</span>
            <span className="tag"><Stethoscope size={11} />Expert OB-GYN</span>
            <span className="tag"><HeartPulse size={11} />NICU Support</span>
          </div>

        </div>
        {/* end right card */}

      </div>
    </section>
  );
}