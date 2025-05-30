import React, { useState } from "react";
import "./slider.scss";
const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    direction === "left"
      ? imageIndex === 0
        ? setImageIndex(images.length - 1)
        : setImageIndex(imageIndex - 1)
      : imageIndex === images.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/images/arrow.png" />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]}></img>
          </div>
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/images/arrow.png" className="right" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="lgeImage">
        <img src={images[0]} onClick={() => setImageIndex(0)} />
      </div>
      <div className="smlImage">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
