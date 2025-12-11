import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/NavBar/Navbar";
import Footer from "../shared/Footer/Footer";

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <Footer> </Footer>
    </div>
  );
};
