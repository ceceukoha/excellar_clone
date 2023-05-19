import React from "react";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import "./Home.css";
import imgOne from "../../assets/img/hero_1.jpg";
import imgTwo from "../../assets/img/hero_2.jpg";
import imgThree from "../../assets/img/hero_3.jpg";
import { useState } from "react";
import DivFlex from "../../components/div-flex/DivFlex";
import imgDivOne from "../../assets/img/imgDiv_1.png";
import imgDivTwo from "../../assets/img/imgDiv_2.png";
import PrimaryCard from "../../components/cards/PrimaryCard";
import card1 from "../../assets/svg/card-1.svg";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { objArray } from "./data";

const Home = () => {
  //Creating States
  const [heroImg, setHeroImg] = useState(0);

  //holds state, updates state

  const imgArray = [imgOne, imgTwo, imgThree];
  setTimeout(() => {
    if (heroImg === imgArray.length - 1) {
      return setHeroImg(0);
    } else {
      setHeroImg(heroImg + 1);
    }
  }, 2000);
  //   console.log(heroImg);

  //Creating state for viewing dropdown
  const [DisplayFaq, setDisplayFaq] = useState(0);

  return (
    <>
      <div
        className="home-body"
        style={{
          backgroundImage: `url(${imgArray[heroImg]})`,
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "1",
        }}
      >
        <div className="hero">
          <h1>EXCEPTIONAL REAL ESTATE SOLUTIONS PROVIDERS</h1>
          <p>
            At Excelar Projects, we deploy our deep industry experience and
            insights to develop Real Estate Solutions and services of
            exceptional quality and value to our diverse clientele
          </p>
          <PrimaryBtn buttonText="Our Services" buttonLink="/services" />
        </div>
      </div>
      <div className="about-section">
        <DivFlex
          imgDiv={imgDivOne}
          textOne="About Us"
          textTwo="When it comes to exceptional Real Estate Solutions that meet your very high standards, look no further than Excelar Projects Limited. From world class residential developments to Commercial properties and facilities management, we are the name to trust for delightful, client-focused solutions that will mark its success as one of the distinct Real Estate Companies in the horizon of Real Estate business in Nigeria. Success is our pride and satisfaction is its pillar that promises the essence of time and best quality within the reach of the urban dwellers."
          btnText="Learn more"
        />
        <div className="about-section-text">
          <h1>A One-stop Real Estate Supermarket</h1>
          <p>
            Beyond Real Estate Development, we offer a wide range of services
            that cater to even the most trivial of your Real Estate needs with
            solutions designed to delight you. Our goal is to be at the
            forefront of the industry in every relevant sphere of the Real
            Estate Economy.
          </p>
        </div>
      </div>
      <div className="phil">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path class="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
          </svg>
        </div>
        <div className="phil-2">
          <h2>Our Unique Operational Philosophy</h2>
          <p>
            Our designs are different and exciting. Our work is much more than
            real estate. Our work is your life, your dreams, and your legacy
            brought to life. We are the catalyst for change in real estate
            through our revolutionization of the way the industry works, here
            are the services we offer;
          </p>
        </div>
        <div className="card-flex">
          <PrimaryCard btnImg={card1} cardText="Property Development" />
          <PrimaryCard btnImg={card1} cardText="Property Development" />
          <PrimaryCard btnImg={card1} cardText="Property Development" />
          <PrimaryCard btnImg={card1} cardText="Property Development" />
          <PrimaryCard btnImg={card1} cardText="Property Development" />
        </div>
        <div className="btn-more">
          <PrimaryBtn buttonText="Learn more" />
        </div>

        <div className="svg-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path class="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
          </svg>
        </div>
      </div>

      <div>
        <DivFlex
          imgDiv={imgDivTwo}
          textOne="The Excelar Projects Advantage"
          textListOne="Proven expertise in developing and managing Premium Real Estate in some of Nigeria’s most prestigious neighborhoods, including Ikoyi, Victoria Island, and Lekki."
          textTwo="Proven expertise in developing and managing Premium Real Estate in some of Nigeria’s most prestigious neighborhoods, including Ikoyi, Victoria Island, and Lekki .Committed to meeting your premium lifestyle and business needs" btnText="Projects"
        />
        <div className="about-section-text">
          <h1>Our Wealth of Experience</h1>
          <p>
            We are not just about big, ambitious dreams and projects, we have
            the experience to match. Over the years, we have worked on
            residential and commercial properties in some of the most upscale
            locations in Ikoyi, Lekki and Victoria Island, the neighbourhoods of
            choice in Lagos, Nigeria’s commercial nerve centre. Most of these
            projects are high and medium-sized apartments and office buildings.
            Our record of successfully executing these projects over the years
            has endowed us with a wealth of experience unmatched by many other
            Real Estate firms across Nigeria. You can trust us to deliver on any
            real estate development, construction, and facility management
            undertaking, regardless of the complexity.
          </p>
          <PrimaryBtn buttonText="Our Drive" />
        </div>
      </div>
      <div className="faq">
        <h1>Frequently asked questions</h1>

        {/* <div className="faq-content">
          <div className="faq-div">
            <h2>Who are Excelar Projects?</h2>
            <MdArrowForwardIos color="#ca0114" />
          </div>
          <div className="faq-dropdown">
            <p>
              Excelar Projects is a Real Estate development company with
              operations and projects across the commercial, retail and
              residential industries. We provide real estate advisory services
              as well to our clients to help them make the right decision in
              their Real Estate investment.
            </p>
          </div>
        </div> */}
        <div className="faq-content">
          {objArray.map((item, index) => (
            //what u use to access the item, position of item in an array
            <>
              <div className="faq-div" onClick={() => setDisplayFaq(index)}>
                {/* state vs index  */}
                <h2>{item.title}</h2>
                {DisplayFaq === index ? (
                  <MdKeyboardArrowDown color="#ca0114" size={23} />
                ) : (
                  <MdKeyboardArrowRight color="#ca0114" size={23} />
                )}
              </div>
              {DisplayFaq === index ? (
                <div className="faq-dropdown">
                  <p>{item.body}</p>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
