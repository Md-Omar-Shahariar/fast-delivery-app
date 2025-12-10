// pages/Home/OurServices.jsx
import ServiceCard from "./ServiceCard";
import {
  FaHamburger,
  FaShoppingBasket,
  FaBoxOpen,
  FaPrescriptionBottleAlt,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    title: "Food Delivery",
    desc: "Hot and fresh meals from your favorite restaurants.",
    icon: <FaHamburger />,
  },
  {
    title: "Grocery Delivery",
    desc: "Daily essentials delivered to your doorstep.",
    icon: <FaShoppingBasket />,
  },
  {
    title: "Parcel Delivery",
    desc: "Send or receive packages anywhere in the city.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Pharmacy Pickup",
    desc: "Medicines and health items delivered safely.",
    icon: <FaPrescriptionBottleAlt />,
  },
  {
    title: "Express Delivery",
    desc: "Super-fast delivery for urgent needs.",
    icon: <FaBolt />,
  },
  {
    title: "24/7 Support",
    desc: "We’re here anytime you need help.",
    icon: <FaHeadset />,
  },
];

export default function OurServices() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-3 text-base-content/70">
            Fast, reliable delivery across food, grocery, parcels and more — all
            in one app.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
