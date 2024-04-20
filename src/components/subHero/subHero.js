import React from "react";
import PrimaryBtn from "../Button/PrimaryButton/PrimaryBtn";
import "./SubHero.scss";
import { ArrowRight } from "lucide-react";

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
          btnIcon={<ArrowRight size={32} strokeWidth={1.75} />}
        />
      </div>
    </div>
  );
};

export default SubHero;
