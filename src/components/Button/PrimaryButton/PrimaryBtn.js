import React from "react";
import "../PrimaryButton/PrimaryBtn.scss";

export const PrimaryBtn = ({ btnContent, btnIcon, bgcolor, color }) => {
  return (
    <div
      className="primaryBtn"
      style={{ backgroundColor: bgcolor, color: color }}
    >
      <div className="btnContent">{btnContent}</div>
      <div className="btnIcon">{btnIcon}</div>
    </div>
  );
};

export default PrimaryBtn;
