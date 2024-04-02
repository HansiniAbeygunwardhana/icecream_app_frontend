import React from "react";
import PrimaryBtn from "../buttons/primary_button/primary_button";
import arrow_white from "../../assets/icons/arrow_white.png";
import "./subHero.scss";

export const SubHero = () => {
  return (
    <div className="second_section">
      <div className="second_section_title">
        Unwrapping the Magic: <br />
        Ben & Jerry's Craft of Happiness
      </div>
      <div className="second_section_content">
        The secret to our smiles?Real ingredients, bold flavors, and a whole lot
        of love. Every pint is hand-crafted with care, from sourcing the
        freshest milk to swirling in those irresistible chunks. It's more than
        ice cream, it's an experience – a spoonful of happiness in every scoop
      </div>
      <div className="second_section_btn">
        <PrimaryBtn
          btnContent={"explore more flavours"}
          btnIcon={arrow_white}
        />
      </div>
    </div>
  );
};

export default SubHero;
