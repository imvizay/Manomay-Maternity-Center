// components/ServiceCard.jsx

function ServiceCard({ number, icon, title, desc }) {
  return (
    <div className="svc">
      <div className="svc-num">{number}</div>
      <span className="svc-ico"><img src={icon} alt="" /></span>
      <div className="svc-name">{title}</div>
      <div className="svc-desc">{desc}</div>
      <div className="svc-link">Explore ↗</div>
    </div>
  );
}

export default ServiceCard;