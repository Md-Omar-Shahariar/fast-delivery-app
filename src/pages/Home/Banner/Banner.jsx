import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-base-300 h-[320px] sm:h-[380px] md:h-[450px]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="banner-carousel h-full"
        dynamicHeight={false}
      >
        <div className="h-full">
          <img
            src={bannerImg1}
            alt="Delivery hero banner 1"
            className="w-full h-full object-cover"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div className="h-full">
          <img
            src={bannerImg2}
            alt="Delivery hero banner 2"
            className="w-full h-full object-cover"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div className="h-full">
          <img
            src={bannerImg3}
            alt="Delivery hero banner 3"
            className="w-full h-full object-cover"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
