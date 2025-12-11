import React from "react";
import logo from "../../assets/logo.png";
const ProFastLogo = () => {
  return (
    <a className="flex items-end " href="/">
      <img src={logo} className="mb-2" alt="" />
      <p className="text-3xl font-extrabold -ml-2">ProFast</p>
    </a>
  );
};

export default ProFastLogo;
