import liveTrackingImg from "../../../assets/live-tracking.png";
import safeDeliveryImg from "../../../assets/safe-delivery.png";
import deliveryVanImg from "../../../assets/delivery-van.png";

const features = [
  {
    title: "Live tracking on every order",
    desc: "Follow couriers in real-time, get ETA updates, and share tracking with customers without leaving the app.",
    image: liveTrackingImg,
  },
  {
    title: "Safe delivery, every time",
    desc: "Tamper-evident handoffs, proof of delivery, and secure PIN drop-offs keep packages protected door-to-door.",
    image: safeDeliveryImg,
  },
  {
    title: "Fleet optimized routes",
    desc: "Smart routing batches orders to reduce delays and cut fuel spend across your busiest hours.",
    image: deliveryVanImg,
  },
];

const FeatureCard = ({ title, desc, image }) => (
  <div className="card lg:card-side bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-200 lg:items-center lg:flex lg:justify-between">
    <figure className="p-4 lg:w-1/4 flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full max-h-48 object-contain"
      />
    </figure>
    <div className="h-px border-t-2 border-dashed mx-6 lg:hidden" aria-hidden />
    <div
      className="hidden lg:block self-stretch h-2/3 my-auto w-px border-l-2  border-dashed mx-2"
      aria-hidden
    />
    <div className="card-body lg:w-2/3 lg:items-start text-left">
      <h3 className="card-title text-xl">{title}</h3>
      <p className="text-base-content/70 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FeatureHighlights = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 space-y-4">
        <header className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-semibold tracking-wide uppercase">
            Why teams choose us
          </p>
          <h2 className="text-3xl font-bold mt-2">
            Built for fast, safe delivery
          </h2>
        </header>

        <div className="grid gap-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
