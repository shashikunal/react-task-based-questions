import React, { useState } from "react";
import "./BackgroundSlider.css";

const BackgroundSlider = () => {
  const slides = [
    // "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
    // "url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')",
    // "url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
    // "url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')",
    // "url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",

    "url('https://cdn.pixabay.com/photo/2023/01/29/21/18/lake-7754160_1280.jpg')",
    "url('https://wallpapers.com/images/file/image-background-02pncybdeif1jvym.jpg')",
    "url('https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_1280.jpg')",
    "url('https://cdn.pixabay.com/photo/2019/05/28/19/43/leaves-4235968_1280.jpg')",
    "url('https://wallpapers.com/images/file/image-background-1k7jh9gba5b3le6v.jpg')",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="body" style={{ backgroundImage: slides[activeSlide] }}>
      <div className="sliderContainer">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeSlide ? "active" : ""}`}
            style={{ backgroundImage: slide }}
          ></div>
        ))}

        <button className="arrow leftArrow" onClick={prevSlide}>
          {" "}
          ←
        </button>

        <button className="arrow rightArrow" onClick={nextSlide}>
          →
        </button>
      </div>
    </div>
  );
};

export default BackgroundSlider;
