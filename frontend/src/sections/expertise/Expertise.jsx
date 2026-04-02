
// css
import '@assets/css/components/expertise.css'

// doctor image
import doctor from '@assets/images/doctor.avif'
import { Award, Globe, GraduationCap, MessageCircle } from 'lucide-react';


function Expertise() {
  return (
    <section id="doctor" className="sec">
      <div className="container">
        <div className="doctor-split">

          {/* LEFT CONTENT */}
          <div className="doc-text reveal-left in">
            <div className="sec-eyebrow">
              <div className="sec-eyebrow-ornament">
                <div className="sec-eyebrow-line"></div>
                <div className="sec-eyebrow-diamond"></div>
              </div>
              <span className="sec-eyebrow-text">Meet the Specialist</span>
            </div>

            <h2 className="sec-title">
              Guided by a Decade<br />
              <em>of Expertise</em>
            </h2>

            <p className="doc-bio">
              Our lead obstetrician and gynecologist brings over ten years of specialized practice to every patient interaction — combining advanced clinical training with a deeply empathetic approach that Bhopal families have come to trust implicitly.
            </p>

            <p className="doc-bio">
              Having presided over more than a thousand successful deliveries — including complex, high-risk cases — she approaches every pregnancy with the rigor of a specialist and the warmth of a caregiver.
            </p>

            {/* QUALIFICATIONS */}
            <div className="doc-quals reveal d1 in">
              <div className="doc-qual">
                <div className="doc-qual-icon"><GraduationCap/></div>
                <div className="doc-qual-text">
                  <strong>MD Obstetrics and Gynecology</strong> — Premier Medical Institute
                </div>
              </div>

              <div className="doc-qual">
                <div className="doc-qual-icon"><Award/></div>
                <div className="doc-qual-text">
                  <strong>10+ Years</strong> of Active Clinical Practice in Bhopal
                </div>
              </div>

              <div className="doc-qual">
                <div className="doc-qual-icon"><Globe/></div>
                <div className="doc-qual-text">
                  <strong>Trained in</strong> High-Risk Obstetrics and Neonatal Care
                </div>
              </div>

              <div className="doc-qual">
                <div className="doc-qual-icon"><MessageCircle/></div>
                <div className="doc-qual-text">
                  Consultation available in <strong>Hindi and English</strong>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div className="doc-achievements reveal d2 in">
              <div className="doc-ach">
                <div className="doc-ach-num">
                  1000
                  <span style={{ fontSize: "1.2rem", color: "var(--gold)" }}>+</span>
                </div>
                <div className="doc-ach-label">Deliveries</div>
              </div>

              <div className="doc-ach">
                <div className="doc-ach-num">
                  10
                  <span style={{ fontSize: "1.2rem", color: "var(--gold)" }}>+</span>
                </div>
                <div className="doc-ach-label">Years Experience</div>
              </div>

              <div className="doc-ach">
                <div className="doc-ach-num">
                  98
                  <span style={{ fontSize: "1.2rem", color: "var(--gold)" }}>%</span>
                </div>
                <div className="doc-ach-label">Success Rate</div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="doc-visual reveal-right in">
            <div className="doc-photo-frame">
              <div className="doc-corner doc-corner-tl"></div>
              <div className="doc-corner doc-corner-br"></div>

              <div className="doc-photo-inner"><img src={doctor}/></div>

              <div className="doc-name-badge">
                <div className="doc-name">Dr. Maniya Kushwaha</div>
                <div className="doc-spec">MD — Obstetrics And Gynecology</div>
              </div>
            </div>

            <div className="doc-floating-tag">
              <div className="dft-text">Lead Consultant</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Expertise;