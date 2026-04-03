// css
import '@assets/css/components/about.css';

// icons
import { ShieldCheck , HeartHandshake, Microscope, Leaf, Baby} from 'lucide-react'

function About() {
  return (
    <>
    <section id="about" className="sec">

        
        <div className="container">
         {/* ABOUT GRID */}
          <div className="about-grid">
            {/* LEFT */}
            <div className="about-img-comp reveal-left in">
              <div className="aic-frame"></div>
              <div className="aic-main">
                <div className="aic-fill">🤱</div>
              </div>
              <div className="aic-accent">
                <div className="aic-accent-fill"><Baby/></div>
              </div>
              <div className="aic-year">
                <div className="aic-year-num">2014</div>
                <div className="aic-year-text">Est. Bhopal</div>
              </div>
              <div className="aic-tag">
                <div className="aic-tag-row">
                  <div className="aic-tag-dot"></div>
                  <div className="aic-tag-text">Clinic Open Today</div>
                </div>
                <div className="aic-tag-sub">Mon-Sun · 24/7 Emergency</div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="about-text reveal-right in">

              <div className="sec-eyebrow">

                <div className="sec-eyebrow-ornament">
                    <div className="sec-eyebrow-line"></div>
                    <div className="sec-eyebrow-diamond"></div>
                </div>
    
                <span className="sec-eyebrow-text">Our Story</span>
              </div>
              <h2 className="sec-title">A Decade of Care,<br/><em>A Lifetime of Trust</em></h2>
              <p className="about-body">Manomay Maternity and Nursing Home was founded with a single conviction — that every mother deserves to feel safe, seen, and supported from the first prenatal visit to the moment she holds her newborn in her arms.</p>
              <div className="about-pullquote">
                <p>"We don't just deliver babies. We carry families through the most transformative chapter of their lives — with skill, grace, and unwavering presence."</p>
              </div>
              <p className="about-body">Nestled in the heart of Lalghati, Bhopal, our nursing home has grown quietly by reputation — one grateful family at a time. Our walls hold over a thousand stories of new life, each one a testament to care that goes beyond the clinical.</p>
              <div className="about-pillars">
                <div className="pillar reveal d1 in">
                  <div className="pillar-icon"><ShieldCheck color='blue'/></div>
                  <div className="pillar-name">Safety First</div>
                </div>
                <div className="pillar reveal d2 in">
                  <div className="pillar-icon"><HeartHandshake color='deeppink'/></div>
                  <div className="pillar-name">Compassion</div>
                </div>
                <div className="pillar reveal d3 in">
                  <div className="pillar-icon"><Microscope color='black'/></div>
                  <div className="pillar-name">Expertise</div>
                </div>
                <div className="pillar reveal d4 in">
                  <div className="pillar-icon"><Leaf color='green'/></div>
                  <div className="pillar-name">Dignity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    </>
  )
}

export default About