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
import HeroSection from "../../components/hero/hero";
import SubHero from "../../components/subHero/subHero";

export const HomePage = () => {
  return (
    <div>
      <Navbar
        text1={"Our Flavours"}
        text2={"Where to Buy"}
        text3={"What's New"}
        text4={"About Us"}
        icon1={search}
        icon2={heart}
        icon3={user}
      />
      <HeroSection
        title={"Unleash Your Inner Flavor Freak!"}
        hero_main={hero_ice}
        circle_img={circle_img}
        hero_content={
          "Get ready for a choco-chip showdown! Chunks so big, they'll challenge your jawline"
        }
      />
      <SubHero />
      <div>fsfacdkssssssssssssssssssssss</div>
    </div>
  );
};

export default HomePage;
