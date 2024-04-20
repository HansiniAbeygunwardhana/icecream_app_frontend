import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IceCreamCard from "../Card/ProductCard/IceCreamCard";
import "./BestSelling.scss"; // Import CSS for styling

const BestSelling = () => {
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
      <div className="carousel">
        <AnimatePresence>
          <motion.div
            className="carousel-container"
            key={currentSlide} // Ensure horizontal layout
          >
            {bestSellingProducts.map((product, index) => {
              const isMiddleCard = index === currentSlide + 1;
              const cardWidth = isMiddleCard ? 380 : 307;

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
                >
                  {index >= currentSlide &&
                    index < currentSlide + numVisibleSlides && (
                      <IceCreamCard name={product.name} />
                    )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default BestSelling;
