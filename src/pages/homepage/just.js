import React from "react";
import Navbar from "../../components/navbar/navbar";
import search from "../../assets/icons/search.png";
import heart from "../../assets/icons/heart.png";
import user from "../../assets/icons/user.png";
import "../../pages/homepage/homepage.scss";
import hero_ice from "../../assets/png/hero_ice.png";
import arrow_white from "../../assets/icons/arrow_white.png";
import PrimaryBtn from "../../components/buttons/primary_button/primary_button";
import circle_img from "../../assets/png/circle_img.png";

export const HomePage = () => {
  return (
    <>
      <Navbar
        text1={"Our Flavours"}
        text2={"Where to Buy"}
        text3={"What's New"}
        text4={"About Us"}
        icon1={search}
        icon2={heart}
        icon3={user}
      />
      <div className="homepage_hero_space">
        <div className="homepage_hero_title">
          Unleash Your Inner Flavor Freak!
        </div>
        <div className="hero_main_section">
          <div className="hero_content_wrapper">
            <img src={hero_ice} alt="ice_cream_png" className="hero_img" />
            <div className="hero_circle">
              <div className="sub_circle">
                <img
                  src={circle_img}
                  alt="ben n jerry ice.png"
                  className="circle_img"
                />
              </div>
            </div>
          </div>
          <div className="hero_content_btn">
            <div className="hero_content">
              Get ready for a choco-chip showdown! Chunks so big, they'll
              challenge your jawline
            </div>
            <div className="hero_btn">
              <PrimaryBtn
                btnContent={"explore more flavours"}
                btnIcon={arrow_white}
              />
            </div>
          </div>
        </div>
        <div className="second_section">
          <div className="second_section_title">
            Unwrapping the Magic: <br />
            Ben & Jerry's Craft of Happiness
          </div>
          <div className="second_section_content">
            The secret to our smiles?Real ingredients, bold flavors, and a whole
            lot of love. Every pint is hand-crafted with care, from sourcing the
            freshest milk to swirling in those irresistible chunks. It's more
            than ice cream, it's an experience – a spoonful of happiness in
            every scoop
          </div>
          <div className="second_section_btn">
            <PrimaryBtn
              btnContent={"explore more flavours"}
              btnIcon={arrow_white}
            />
          </div>
        </div>
        <div>fsf</div>
      </div>
    </>
  );
};

export default HomePage;
