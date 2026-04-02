import "@assets/css/components/services.css";

import { Hospital,Baby,Siren,Pill,Microscope,Venus } from 'lucide-react'

const servicesData = [
  {
    num: "01",
    icon: Venus,color:"#D4A5FF",
    title: "Maternity Care",
    desc: "Comprehensive prenatal and postnatal programs — personalized health plans, nutrition guidance, and dedicated monitoring throughout your pregnancy journey.",
  },
  {
    num: "02",
    icon: Hospital,color:"#9AD0C2",
    title: "Delivery Services",
    desc: "Expert-led normal and cesarean deliveries — conducted with clinical precision, emotional sensitivity, and the highest standards of obstetric safety.",
  },
  {
    num: "03",
    icon: Baby,color:"#E8B4B8",
    title: "Newborn Care",
    desc: "NICU-standard attention for your newborn — weight monitoring, vaccination tracking, feeding support, and round-the-clock pediatric care from day one.",
  },
  {
    num: "04",
    icon: Pill,color:"#D4A5FF",
    title: "Gynecology",
    desc: "Full-spectrum women's health — from routine screenings and hormonal therapy to fertility consultations and advanced gynecological treatments.",
  },
  {
    num: "05",
    icon: Siren,color:"#FF6B6B",
    title: "Emergency Care",
    desc: "24/7 obstetric emergency response — because critical moments cannot wait.",
  },
  {
    num: "06",
    icon: Microscope,color:"#7DA9E3",
    title: "Diagnostics & Lab",
    desc: "In-house pathology, ultrasound, and diagnostic imaging — accurate results and fewer external appointments.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-sec">
      <div className="services-bg-text">CARE</div>

      <div className="container">
        {/* HEADER */}
        <div className="services-head">
          <div>
            <div className="sec-eyebrow">
              <div className="line"></div>
              <span>Specialisations</span>
            </div>

            <h2>
              Complete Care, <br />
              <em>Every Stage</em>
            </h2>
          </div>

          <p className="services-head-right">
            From your first prenatal appointment through delivery and beyond —
            we offer every service a mother and newborn could need, all under
            one roof.
          </p>
        </div>

        {/* GRID */}
        <div className="services-grid">
          {servicesData.map((svc, i) => (
            <div className="svc-card" key={i}>
              <span className="svc-num">{svc.num}</span>

              <div className="svc-icon">{<svc.icon color={svc.color}/>}</div>

              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>

              {/* <span className="svc-link">Explore ↗</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}