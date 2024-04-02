import React from "react";
import "./IceCreamCard.scss";
import product_mock from "../../../assets/png/product_mock.png";
import PrimaryBtn from "../../buttons/primary_button/primary_button";
import cart from "../../../assets/icons/cart.png";
import star from "../../../assets/icons/star.png";

const IceCreamCard = () => {
  return (
    <div className="IceCreamCard">
      <img
        className="ProductImg"
        src={product_mock}
        alt="Ben & Jerry's Vanilla Caramel Fudge Ice Cream"
      />
      <div className="IceCreamCard_info">
        <div className="IceCreamCard_info_title">Vanilla Caramel Fudge</div>
        <div className="IceCreamCard_info_descript">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </div>
        <div className="IceCreamCard_info_rating">
          <img src={star} alt="rate.png" />
          <img src={star} alt="rate.png" />
          <img src={star} alt="rate.png" />
          <img src={star} alt="rate.png" />
          <img src={star} alt="rate.png" />
        </div>
        <div className="IceCreamCard_info_subinfo">
          <div className="IceCreamCard_info_quantity">
            <div>-</div>
            <div>1</div>
            <div>+</div>
          </div>
          <div className="IceCreamCard_info_price">$ 265.25</div>
        </div>
        <div className="IceCreamCard_info_btn">
          <PrimaryBtn btnContent={"add to cart"} btnIcon={cart} />
        </div>
      </div>
    </div>
  );
};

export default IceCreamCard;
