import React from "react";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ProductHero.scss"; // Assuming you have some basic styles

const ProductHero = () => {
  const { scrollYProgress } = useScroll();
  const pDeg = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [90, 180, 270, 360]
  );
  const cDeg = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [-90, -180, -270, -360]
  );

  const colorProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    ["#ff0000", "#00ff00", "#0000ff", "#0f0f0f"]
  );

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div className="App">
      <motion.div
        style={{ rotate: pDeg, backgroundColor: colorProgress }}
        animate={{ x: 400, y: 300, borderRadius: "50%" }}
        transition={{ duration: 2 }}
        className="parent"
        cursor="pointer"
      >
        <motion.div
          style={{ rotate: cDeg }}
          animate={{ x: 200 }}
          transition={{ duration: 2 }}
          className="child"
        />
        <motion.div
          style={{ rotate: cDeg }}
          animate={{ x: 100, y: 100 }}
          transition={{ duration: 2 }}
          className="child"
        />
        <motion.div
          style={{ rotate: cDeg }}
          animate={{ x: -100, y: 0 }}
          transition={{ duration: 2 }}
          className="child"
        />
        <motion.div
          style={{ rotate: cDeg }}
          animate={{ x: 100, y: -500 }}
          transition={{ duration: 2 }}
          className="child"
        />
      </motion.div>
    </div>
  );
};

export default ProductHero;
