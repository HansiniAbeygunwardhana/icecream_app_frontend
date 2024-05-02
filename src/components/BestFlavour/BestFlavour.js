import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IceCreamCard from "../Card/ProductCard/IceCreamCard";
import "./BestFlavour.scss"; // Import CSS for styling
import RightBtn from "../Button/CarouselBtn/RightBtn";
import LeftBtn from "../Button/CarouselBtn/LeftBtn";

const BestFlavour = () => {
  const bestSellingProducts = [
    { id: 1, name: "Vanilla Caramel Fudge" },
    { id: 2, name: "Chocolate Chip Cookie" },
    { id: 3, name: "Strawberry Cheesecake" },
    { id: 4, name: "Mint Chocolate Chip" },
    { id: 5, name: "Cookies and Cream" },
    { id: 6, name: "Pistachio Almond" },
    { id: 7, name: "Rocky Road" },
    { id: 8, name: "Salted Caramel Swirl" },
    { id: 9, name: "Butter Pecan" },
    { id: 10, name: "Coffee Toffee Crunch" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const numVisibleSlides = 3; // Number of slides to display at once

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0
        ? prevSlide - 1
        : bestSellingProducts.length - numVisibleSlides
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < bestSellingProducts.length - numVisibleSlides
        ? prevSlide + 1
        : 0
    );
  };

  return (
    <div className="best-selling-products">
      <div className="best-selling-products_title">The Ben & Jerry's Best</div>
      <div className="carousel">
        <AnimatePresence>
          <motion.div
            className="carousel-container"
            key={currentSlide} // Ensure horizontal layout
          >
            {bestSellingProducts.map((product, index) => {
              const isMiddleCard = index === currentSlide + 1;
              const cardWidth = isMiddleCard ? 380 : 307;
              const bgcolor = isMiddleCard ? "#F4F0ED" : "#FFFFFF";
              const boxshadow = isMiddleCard
                ? "0 0.764vw 1.042vw 0.069vw rgba(0, 0, 0, 0.5)"
                : "0 0 0 0";

              return (
                <motion.div
                  key={product.id}
                  className={`carousel-item ${
                    index >= currentSlide &&
                    index < currentSlide + numVisibleSlides
                      ? "active"
                      : ""
                  }`}
                  style={{
                    flex: `0 0 ${cardWidth}px`, // Dynamic card width
                    marginRight: "10px", // Add space between cards
                  }}
                  initial={{
                    opacity: isMiddleCard ? 0 : 1,
                    scale: isMiddleCard ? 0.5 : 1,
                  }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1, scale: isMiddleCard ? 0.8 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {index >= currentSlide &&
                    index < currentSlide + numVisibleSlides && (
                      <IceCreamCard
                        name={product.name}
                        bgcolor={bgcolor}
                        boxshadow={boxshadow}
                      />
                    )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="navigation-buttons">
        <div onClick={handlePrevSlide}>
          <LeftBtn />
        </div>
        <div onClick={handleNextSlide}>
          <RightBtn />
        </div>
      </div>
    </div>
  );
};

export default BestFlavour;
