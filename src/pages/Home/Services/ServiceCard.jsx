// components/ServiceCard.jsx
export default function ServiceCard({ service }) {
  const { icon, title, desc, className } = service;
  return (
    <div
      className={`card bg-base-100 shadow hover:shadow-lg transition-all duration-200 ${className}`}
    >
      <div className="card-body items-center text-center">
        {icon && <div className="mb-3 text-primary text-3xl">{icon}</div>}
        <h3 className="card-title">{title}</h3>
        <p className="text-base-content/70">{desc}</p>
      </div>
    </div>
  );
}
