import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import { Colors } from "@/local/colors";

const GradientBackground = () => {
  const [colorIndex, setColorIndex] = useState(300);

  useEffect(() => {
    const interval = setInterval(changeColor, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const changeColor = () => {
    setColorIndex((prevColorIndex) => (prevColorIndex + 1) % Colors.length);
  };

  const currentColor = Colors[colorIndex].hex;
  const currentColorName = Colors[colorIndex].name;

  return (
    <div className="gradient-background">
      <h1>{currentColorName}</h1>
      <CSSTransition in={true} appear={true} timeout={3000} classNames="fade">
        <div
          className="color-overlay"
          style={{ backgroundColor: currentColor }}
        />
      </CSSTransition>
    </div>
  );
};

export default GradientBackground;
