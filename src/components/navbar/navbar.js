import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logos/logo.png";

export const Navbar = ({ text1, text2, text3, text4, icon1, icon2, icon3 }) => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="ben & jerry logo.png" width={115} height={75} />
      </div>
      <div className="navbar_section">
        <div>{text1}</div>
        <div>{text2}</div>
        <div>{text3}</div>
        <div>{text4}</div>
        <div>
          <div className="navbar_icons">
            <div>
              <img src={icon1} alt="search.png"></img>
            </div>
            <div>
              <img src={icon2} alt="favourite.png"></img>
            </div>
            <div>
              <img src={icon3} alt="user.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
