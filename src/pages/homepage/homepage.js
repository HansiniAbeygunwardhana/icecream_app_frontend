import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import search from "../../assets/icons/search.png";
import heart from "../../assets/icons/heart.png";
import user from "../../assets/icons/user.png";
import "./HomePage.scss";
import hero_ice from "../../assets/png/hero_ice.png";
import circle_img from "../../assets/png/circle_img.png";
import Hero from "../../components/Hero/Hero";
import SubHero from "../../components/SubHero/SubHero";
import BestSelling from "../../components/BestSelling/BestSelling";
import FindShop from "../../components/FindShop/FindShop";
import BestFlavour from "../../components/BestFlavour/BestFlavour";
// import IceCreamCard from "../../components/Card/ProductCard/IceCreamCard";

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
      <Hero
        title={"Unleash Your Inner Flavor Freak!"}
        hero_main={hero_ice}
        circle_img={circle_img}
        hero_content={
          "Get ready for a choco-chip showdown! Chunks so big, they'll challenge your jawline"
        }
      />
      <SubHero />
      <BestSelling />
      <FindShop />
      <BestFlavour />
    </div>
  );
};

export default HomePage;
