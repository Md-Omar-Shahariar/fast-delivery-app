import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/NavBar/Navbar";
import Footer from "../shared/Footer/Footer";

export const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer> </Footer>
    </div>
  );
};
