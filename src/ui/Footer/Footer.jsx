import React from "react";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="first">
          <h1>YOUR DREAM HOME IS WITHIN REACH</h1>
          <PrimaryBtn backgroundColor="white" buttonText="Get in Touch" textColor="#ca0114" />
        </div>
        <div className="second">
          <h2>OFFICE:</h2>
          <h3>
            2B Tunde Fisayo Street, Off Ayinde Akinmade Street, Lekki Phase 1,
            Lagos, Nigeria
          </h3>
        </div>
        <div className="third">
          <div>
            <h2>PHONE:</h2>
            <h3>+234 (0) 702 512 6188</h3>
          </div>
          <div>
            <h2>EMAIL</h2>
            <h3>info@excelarprojects.com</h3>
          </div>
        </div>
      </div>
      <div className="last-footer">
        <h3>© 2023 Excelar Projects Limited</h3>
        <div className="social-icons">
          <BsFacebook />
          <BsTwitter/>
          <BsInstagram />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
