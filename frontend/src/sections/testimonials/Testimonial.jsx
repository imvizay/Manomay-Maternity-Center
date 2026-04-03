import '@assets/css/components/testimonial.css'
import TestimonialCard from '@components/common/TestimonialCard';
import { testimonials } from '@/static_data/testimonial';

export default function Testimonials() {
  return (
    <section id="testimonials" className="sec dark">
      <div className="container">

        <div className="test-layout">

          {/* LEFT SIDE */}
          <div className="test-sidebar">
            <div className="sec-eyebrow">
              <div className="sec-eyebrow-ornament">
                <div className="sec-eyebrow-line"></div>
                <div className="sec-eyebrow-diamond"></div>
              </div>
              <span className="sec-eyebrow-text gold">Patient Voices</span>
            </div>

            <h2 className="sec-title light">
              Words From <br />
              <em>Our Families</em>
            </h2>

            <p>
              The stories shared by families who trusted us with the most important moments of their lives — unscripted, unfiltered, and deeply felt.
            </p>

            <div className="test-counter">
              <span>Happy Families</span>
              <strong>1000+</strong>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="test-cards">
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={index}
                data={item}
                delay={`d${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}