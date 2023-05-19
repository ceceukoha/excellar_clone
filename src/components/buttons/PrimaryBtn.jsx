import React from "react";
import { Link } from "react-router-dom";
import './Primarybtn.css';


const PrimaryBtn = ({ buttonText, buttonLink, backgroundColor, textColor}) => {
  return (
    <Link to={buttonLink}>
      <button className="primary_btn"
        style={{
          backgroundColor: `${backgroundColor}`,
          color: `${textColor}`
      }}
      >{buttonText}</button>
    </Link>
  );
};

export default PrimaryBtn;
