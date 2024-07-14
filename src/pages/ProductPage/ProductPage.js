import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import search from "../../assets/icons/search.png";
import heart from "../../assets/icons/heart.png";
import user from "../../assets/icons/user.png";
import ProductHero from "../../components/Hero/ProductHero/ProductHero";
import chocoHero from "../../assets/hero/choco hero.png";
import test2 from "../../assets/hero/chocolate.png";
import test3 from "../../assets/hero/milk.png";
import test4 from "../../assets/hero/strawberry.png";

const ProductPage = () => {
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
      <ProductHero />
    </div>
  );
};

export default ProductPage;
