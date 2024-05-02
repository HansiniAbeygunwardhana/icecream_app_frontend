import React from "react";
import BeepImage from "../../assets/png/Beep Beep Small Vehicle.png";
import PrimaryBtn from "../Button/PrimaryButton/PrimaryBtn";
import { ArrowRight } from "lucide-react";
import "./FindShop.scss";

function FindShop() {
  return (
    <div className="findshop">
      <div className="findshop__imgwrapper">
        <img src={BeepImage} alt="BeepImage.png" />
      </div>
      <div className="findshop__contentwrapper">
        <div className="findshop__content__title">
          Find Your Ben & Jerry's Scoop Shop
        </div>
        <div className="findshop__content__descript">
          Craving cookie dough chunks, swirling berries, or a chocolatey core
          explosion? Your flavor adventure awaits! Discover the nearest Ben &
          Jerry's scoop shop, where happiness comes in a pint (or a waffle
          cone!).
        </div>
        <div className="findshop__content__btn">
          <PrimaryBtn
            btnContent={"find your shop here"}
            btnIcon={<ArrowRight />}
            bgcolor={"#ffffff"}
            color={"#3F1808"}
          />
        </div>
      </div>
    </div>
  );
}

export default FindShop;
