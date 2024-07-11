import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IceCreamCard from "../Card/ProductCard/IceCreamCard";
import "./BestFlavour.scss"; // Import CSS for styling
import RightBtn from "../Button/CarouselBtn/RightBtn";
import LeftBtn from "../Button/CarouselBtn/LeftBtn";
import getIceCreamList from "../../Services/IceCreamServices";

const BestFlavour = () => {
  const [bestFlavourProduct, setBestFlavourProduct] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const numVisibleSlides = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIceCreamList();
        setBestFlavourProduct(data);
      } catch (error) {
        console.error("Failed to fetch ice cream data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0
        ? prevSlide - 1
        : bestFlavourProduct.length - numVisibleSlides
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < bestFlavourProduct.length - numVisibleSlides
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
            {bestFlavourProduct.map((product, index) => {
              const isMiddleCard = index === currentSlide + 1;
              const cardWidth = isMiddleCard ? 380 : 307;
              const bgcolor = isMiddleCard ? "#F4F0ED" : "#FFFFFF";
              const boxshadow = isMiddleCard
                ? "0 0.764vw 1.042vw 0.069vw rgba(0, 0, 0, 0.5)"
                : "0 0 0 0";

              return (
                <motion.div
                  key={product.iceCreamId}
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
                        img={product.imgUrl}
                        name={product.iceCreamName}
                        detail={product.iceCreamDescription}
                        rating={product.rating}
                        price={product.price}
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
