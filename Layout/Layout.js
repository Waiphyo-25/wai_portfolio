import React from "react";
import Footer from "../components/Footer/Footer";
import Homepage from "../components/Home/Homepage";
import Navbar from "../components/Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Homepage />
      {/* {children} */}
      <Footer />
    </>
  );
}

export default Layout;
