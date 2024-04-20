import React from "react";
import PrimaryBtn from "../Button/PrimaryButton/PrimaryBtn";
import "./Hero.scss";
import { ArrowRight } from "lucide-react";

export const Hero = ({ title, hero_main, circle_img, hero_content }) => {
  return (
    <div className="homepage_hero_space">
      <div className="homepage_hero_title">{title}</div>
      <div className="hero_main_section">
        <div className="hero_content_wrapper">
          <img src={hero_main} alt="ice_cream_png" className="hero_img" />
          <div className=".overflow_container">
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
        </div>
        <div className="hero_content_btn">
          <div className="hero_content">{hero_content}</div>
          <div className="hero_btn">
            <PrimaryBtn
              btnContent={"explore more flavours"}
              btnIcon={<ArrowRight size={32} strokeWidth={1.75} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
