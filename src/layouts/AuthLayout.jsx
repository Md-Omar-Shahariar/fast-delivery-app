import React from "react";
import { Outlet } from "react-router";
import ProFastLogo from "../shared/ProFastLogo/ProfastLogo";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="p-4 bg-base-200 min-h-screen">
      <div>
        <ProFastLogo />
      </div>
      <div className="hero-content flex-col justify-center self-stretch items-center lg:flex-row-reverse">
        <img src={authImage} className="max-w-sm rounded-lg shadow-2xl" />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
