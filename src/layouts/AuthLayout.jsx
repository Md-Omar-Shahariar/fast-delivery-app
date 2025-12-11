import React from "react";
import { Outlet } from "react-router";
import ProFastLogo from "../shared/ProFastLogo/ProfastLogo";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  const [isLoaded, setIsLoading] = React.useState(false);
  return (
    <div className=" bg-base-200 min-h-screen">
      <div className="navbar">
        <ProFastLogo />
      </div>
      <div className="hero-content flex-col justify-center self-stretch items-center lg:flex-row-reverse">
        {!isLoaded && (
          <div className="skeleton w-96 h-[280px] " aria-hidden></div>
        )}
        <img
          src={authImage}
          loading="lazy"
          className="max-w-sm rounded-lg shadow-2xl"
          onLoad={() => setIsLoading(true)}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
