import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../components/Home/Homepage";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Homepage />
      <Footer />
    </React.Fragment>
  );
}
