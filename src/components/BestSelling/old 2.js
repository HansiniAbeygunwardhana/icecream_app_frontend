import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IceCreamCard from "../Card/ProductCard/IceCreamCard";
import "./BestSelling.scss"; // Import CSS for styling

const BestSelling = () => {
  const bestSellingProducts = [
    { id: 1, name: "Vanilla Caramel Fudge" },
    { id: 2, name: "Chocolate Chip Cookie Dough" },
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

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : bestSellingProducts.length - 3
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < bestSellingProducts.length - 3 ? prevSlide + 1 : 0
    );
  };

  return (
    <div className="best-selling-products">
      <div className="carousel">
        <AnimatePresence>
          <motion.div
            className="carousel-container"
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {bestSellingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`carousel-item ${
                  index >= currentSlide && index < currentSlide + 3
                    ? "active"
                    : ""
                }`}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {index >= currentSlide && index < currentSlide + 3 && (
                  <IceCreamCard name={product.name} />
                )}
              </motion.div>
            ))}
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
