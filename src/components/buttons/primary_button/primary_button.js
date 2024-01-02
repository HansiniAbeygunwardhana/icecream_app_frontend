import React from "react";
import "../primary_button/primary_button.scss";

export const PrimaryBtn = ({ btnContent, btnIcon }) => {
  return (
    <div className="primaryBtn">
      <div className="btnContent">{btnContent}</div>
      <div>
        <img className="btnIcon" src={btnIcon} alt="btn_icon.png"></img>
      </div>
    </div>
  );
};

export default PrimaryBtn;
