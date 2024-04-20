import React from "react";
import "../PrimaryButton/PrimaryBtn.scss";

export const PrimaryBtn = ({ btnContent, btnIcon }) => {
  return (
    <div className="primaryBtn">
      <div className="btnContent">{btnContent}</div>
      <div className="btnIcon">{btnIcon}</div>
    </div>
  );
};

export default PrimaryBtn;
