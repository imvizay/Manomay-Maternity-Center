// css
import '@assets/css/components/experience.css'

export default function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="container">

        {/* INTRO */}
        <div className="exp-intro">
          
          <div className="reveal-left">
            <div className="sec-eyebrow">
              <div className="sec-eyebrow-ornament">
                <div className="sec-eyebrow-line"></div>
                <div className="sec-eyebrow-diamond"></div>
              </div>
              <span className="sec-eyebrow-text">Our Spaces</span>
            </div>

            <h2 className="sec-title">
              An Environment <br />
              <em>Built to Heal</em>
            </h2>
          </div>

          <div className="reveal-right">
            <p>
              Every room, corridor, and consultation space at Manomay has been thoughtfully designed to ease anxiety and foster calm — because we believe healing begins long before the procedure.
            </p>
          </div>

        </div>

        {/* GRID */}
        <div className="exp-grid">

          <div className="eg eg-1">
            <div className="eg-fill c1">
              <div className="eg-inner">🏥</div>
              <span>Lobby & Reception</span>
            </div>
          </div>

          <div className="eg eg-2">
            <div className="eg-fill c2">
              <div className="eg-inner">🛏️</div>
              <span>Labour & Delivery Suite</span>
            </div>
          </div>

          <div className="eg eg-3">
            <div className="eg-fill c3">
              <div className="eg-inner">👶</div>
              <span>Nursery Ward</span>
            </div>
          </div>

          <div className="eg eg-4">
            <div className="eg-fill c4">
              <div className="eg-inner">🩺</div>
              <span>Consultation Room</span>
            </div>
          </div>

          <div className="eg eg-5">
            <div className="eg-fill c5">
              <div className="eg-inner">🌿</div>
              <span>Recovery & Postnatal</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}