import React from "react";
import Banner from "../Banner/Banner";
import OurServices from "../Services/ServiceSection";
import BrandMarquee from "../Brands/BrandMarquee";
import FeatureHighlights from "../Features/FeatureHighlights";
import Merchant from "../Merchent/Merchant";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <BrandMarquee />
      <FeatureHighlights />
      <Merchant />
    </div>
  );
};

export default Home;
