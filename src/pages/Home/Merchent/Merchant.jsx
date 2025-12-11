import React from "react";
import imag from "../../../assets/location-merchant.png";

const Merchant = () => {
  return (
    <div className="hero bg-teal-800 text-secondary-content my-12 rounded-lg p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={imag} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary text-black rounded-xl">
              Be a Merchant
            </button>
            <button className="btn btn-primary text-black rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
