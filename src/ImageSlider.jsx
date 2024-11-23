import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const leftArrowStyle = {
    position: "absolute",
    zIndex: "1",
    color: "#fff",
    left: "32px",
    fontSize: "45px",

    transform: "translate(0,-50%) rotate(180deg)",
    top: "50%",
    cursor: "pointer",
  };
  const rightArrowStyle = {
    position: "absolute",
    zIndex: "1",
    color: "#fff",
    right: "32px",
    fontSize: "45px",
    transform: "translate(0,-50%)",
    top: "50%",
    cursor: "pointer",
  };
  const dotsContainer = {
    display: "flex",
    justifyContent: "center",
  };
  const dotsStyles = {
    margin: "0 3px",
    fontSize: "40px",
    cursor: "pointer",
  };
  const goToPrevious = () => {
    const isFirstINdex = currentIndex === 0;
    const newIndex = isFirstINdex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div style={sliderStyles}>
        <div style={leftArrowStyle} onClick={goToPrevious}>
          &#10151;
        </div>
        <div style={rightArrowStyle} onClick={goToNext}>
          &#10151;
        </div>
        <div style={slideStyles}></div>
        <div style={dotsContainer}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} style={dotsStyles} onClick={() => goToSlide(slideIndex)}>
              &#9679;
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
