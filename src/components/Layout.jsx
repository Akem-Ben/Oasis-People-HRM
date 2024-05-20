import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <section className="font-lexend">
      <SideBar />
      <NavBar />
      <div className="lg:ml-[290px] md:ml-[290px] sm:ml-0 p-4">{children}</div>
    </section>
  );
};

export default Layout;
