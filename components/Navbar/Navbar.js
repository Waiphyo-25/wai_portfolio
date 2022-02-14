import React, { useState, useEffect } from "react";
import Link from "next/link";
// import styles from "./index.module.css";
import { Transition } from "@headlessui/react";
// import { Link } from "react-scroll";
import useDarkMode from "./useDarkMode";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [clientWindowHeight, setClientWindowHeight] = useState("");

  // const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  // const [padding, setPadding] = useState(10);
  // const [boxShadow, setBoxShadow] = useState(0);

  // //for dark mode toggle
  // // const [colorTheme, setTheme] = useDarkMode();

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  // };

  // useEffect(() => {
  //   let backgroundTransparacyVar = clientWindowHeight / 600;

  //   if (backgroundTransparacyVar < 1) {
  //     let paddingVar = 10 - backgroundTransparacyVar * 20;
  //     let boxShadowVar = backgroundTransparacyVar * 0.1;
  //     setBackgroundTransparacy(backgroundTransparacyVar);
  //     setPadding(paddingVar);
  //     setBoxShadow(boxShadowVar);
  //   }
  // }, [clientWindowHeight]);

  return (
    <div>
      <Link href="/Resume/Resume">
        <a>Resume</a>
      </Link>
    </div>
  );
};

export default Navbar;
