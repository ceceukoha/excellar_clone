import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";
import HeaderLogo from "../../assets/img/logo_1.svg";
import HeaderLogo2 from "../../assets/svg/logo_2.svg";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { useState } from "react";

const TopNav = () => {
  const [navColor, setNavColor] = useState(false);

  const navScroll = () => {
    if (window.scrollY >= 80) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", navScroll);

  return (
    <div
      className="topNavContainer"
      style={{
        backgroundColor: `${navColor ? "white" : "transparent"}`,
      }}
    >
      <nav className="topNav">
        <div>
          <img src={navColor ? HeaderLogo2 : HeaderLogo} alt="Header" />
        </div>
        <div className={navColor ? "nav-links-dark" : "nav-links"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <PrimaryBtn buttonText="Contact" buttonLink="/contact" />
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
