import '@assets/css/components/appointment.css'
import { Lock, LockIcon, Phone, Siren, Zap } from 'lucide-react';

export default function Appointment() {
  return (
    <section id="appointment" className="sec appt-sec">

      <div className="appt-ornament"></div>

      <div className="container">
        <div className="appt-layout">

          {/* LEFT */}
          <div className="appt-left">
            <div className="sec-eyebrow">
              <div className="sec-eyebrow-ornament">
                <div className="sec-eyebrow-line gold"></div>
                <div className="sec-eyebrow-diamond gold"></div>
              </div>
              <span className="sec-eyebrow-text gold">
                Book an Appointment
              </span>
            </div>

            <h2 className="sec-title light">
              Begin Your Journey <br />
              <em>with One Step</em>
            </h2>

            <p>
              Schedule a consultation in under two minutes. Our care coordinator
              will personally confirm your slot within the hour and answer any
              questions you may have before your visit.
            </p>

            <div className="appt-features">
              {[
                [<Zap/>, "Confirmed within 1 hour", "of your request"],
                [<Phone/>, "Personal callback", "from our care team"],
                [<LockIcon/>, "Private & confidential", "— your data is never shared"],
                [<Siren/>, "Emergency cases", "attended immediately — 24/7"],
              ].map((item, i) => (
                <div key={i} className="appt-feat">
                  <div className="appt-feat-icon">{item[0]}</div>
                  <div className="appt-feat-text">
                    <strong>{item[1]}</strong> {item[2]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="appt-form-card">
            <div className="form-title">Request a Consultation</div>
            <div className="form-subtitle">
              Manomay Maternity · Bhopal
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. Priya Sharma" />
              </div>

              <div className="form-field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>

              <div className="form-field">
                <label>Preferred Date</label>
                <input type="date" />
              </div>

              <div className="form-field">
                <label>Preferred Time</label>
                <select>
                  <option value={"none"} >Select Time</option>
                  <option value={""} >Morning (9am -  12pm)</option>
                  <option value={""} >Afternoon (12pm -  4pm)</option>
                  <option value={""} >Evening (4pm -  7pm)</option>
                </select>
              </div>

              <div className="form-field full">
                <label>Service Required</label>
                <select>
                  <option>Select a Service</option>
                  <option>Maternity</option>
                  <option>Delivery</option>
                  <option>Emergency</option>
                </select>
              </div>

              <div className="form-field full">
                <label>Message (optional)</label>
                <textarea placeholder="Any specific concerns..."></textarea>
              </div>
            </div>

            <button className="form-submit">
              Schedule My Consultation →
            </button>

            <p className="form-note">
              <Lock size={12} color='orange'/>   Confidential · We will call to confirm
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}