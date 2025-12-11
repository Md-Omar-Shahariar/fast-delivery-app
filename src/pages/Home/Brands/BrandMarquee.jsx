import amazonLogo from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";

const brands = [
  { name: "Amazon", logo: amazonLogo },
  { name: "Amazon Vector", logo: amazonVector },
  { name: "Casio", logo: casio },
  { name: "Moonstar", logo: moonstar },
  { name: "Randstad", logo: randstad },
  { name: "Star", logo: star },
  { name: "Start People", logo: startPeople },
];

const BrandBadge = ({ name, logo }) => (
  <div className="bg-base-100 border border-base-200/80 shadow-sm rounded-xl px-5 py-3 flex items-center justify-center min-w-[140px]">
    <img
      src={logo}
      alt={name}
      className="max-h-10 max-w-[120px] object-contain"
    />
  </div>
);

const BrandMarquee = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-semibold tracking-wide uppercase">
            Trusted by top teams
          </p>
          <h2 className="text-3xl font-bold mt-2">
            We have helped thousands of sales teams
          </h2>
          <p className="mt-3 text-base-content/70">
            From startups to global enterprises, leading brands rely on us to
            keep their deliveries moving fast.
          </p>
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="marquee flex gap-4 whitespace-nowrap">
            {[...brands, ...brands].map((brand, idx) => (
              <BrandBadge key={idx} {...brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
