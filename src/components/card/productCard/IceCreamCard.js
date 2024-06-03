import React from "react";
import "./IceCreamCard.scss";
import { Star } from "lucide-react";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import PrimaryBtn from "../../Button/PrimaryButton/PrimaryBtn";
import ProductMock from "../../../assets/png/product_mock.png";

const IceCreamCard = ({ img, name, bgcolor, boxshadow }) => {
  return (
    <div
      className="Icecreamcard"
      style={{ backgroundColor: bgcolor, boxShadow: boxshadow }}
    >
      <div className="Icecreamcard__image">
        <img src={img} className="Icecreamcard__image_img" />
      </div>
      <div className="Icecreamcard__content">
        <div className="Icecreamcard__content__title">{name}</div>
        <div className="Icecreamcard__content__details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </div>
        <div className="Icecreamcard__content__ratings">
          <div>
            <Star fill="#3F1808" strokeWidth={0} />
          </div>
          <div>
            <Star fill="#3F1808" strokeWidth={0} />
          </div>
          <div>
            <Star fill="#3F1808" strokeWidth={0} />
          </div>
          <div>
            <Star fill="#3F1808" strokeWidth={0} />
          </div>
          <div>
            <Star fill="#3F1808" strokeWidth={0} />
          </div>
        </div>
        <div className="Icecreamcard__content__container">
          <div className="Icecreamcard__content__quantity">
            <div>
              <Minus size={15} />
            </div>
            <div>1</div>
            <div>
              <Plus size={15} />
            </div>
          </div>
          <div className="Icecreamcard__content__price">$ 265.25</div>
        </div>
        <div className="Icecreamcard__content__btn">
          <PrimaryBtn btnContent={"add to cart"} btnIcon={<ShoppingCart />} />
        </div>
      </div>
    </div>
  );
};

export default IceCreamCard;
