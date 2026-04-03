export default function TestimonialCard({ data, delay }) {
  return (
    <div className={`tcard reveal ${delay}`}>
      <div className="tcard-stars">★★★★★</div>

      <div className="tcard-quote">
        "{data.quote}"
      </div>

      <div className="tcard-author">
        <div className="tcard-av">{data.avatar}</div>

        <div>
          <div className="tcard-name">{data.name}</div>
          <div className="tcard-meta">{data.meta}</div>
        </div>
      </div>
    </div>
  );
}