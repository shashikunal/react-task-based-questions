//! Create a image carousel using react, in which the images should change after every two seconds, next image should be visible. Create two buttons also using which we can go forward and backward. The carousel should be in loop, after the last image it should go to first image again. If user hovers on the image, it should pause the carousel.
import React, { useState, useEffect } from "react";
import "./style.css";

const images = [
  "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
];

const ImageCarousel = () => {
  const [idx, setIdx] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = () => {
    const id = setInterval(() => {
      setIdx(prevIdx => (prevIdx + 1) % images.length);
    }, 2000);
    setIntervalId(id);
  };

  const stopInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const handleNext = () => {
    setIdx(prevIdx => (prevIdx + 1) % images.length);
    stopInterval();
    startInterval();
  };

  const handlePrev = () => {
    setIdx(prevIdx => (prevIdx - 1 + images.length) % images.length);
    stopInterval();
    startInterval();
  };

  return (
    <div
      className="carousel"
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      <div
        className="image-container"
        style={{ transform: `translateX(${-idx * 100}%)` }}
        onMouseEnter={() => clearInterval(intervalId)}
        onMouseLeave={stopInterval}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Carousel ${i}`} />
        ))}
      </div>
      <div className="buttons-container">
        <button
          className="btn"
          onClick={handlePrev}
          aria-label="Previous Image"
        >
          Prev
        </button>
        <button className="btn" onClick={handleNext} aria-label="Next Image">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
