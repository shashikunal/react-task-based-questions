  import React, { useState } from "react";
  import "./double-vertical-slider.css";

  const slides = [
    {
      color: "#FD3555",
      title: "Nature flower",
      description: "all in pink",
      image:
        "https://i.pinimg.com/736x/07/f7/5e/07f75ee13b2469e634fc5c5a50f205aa.jpg",
    },
    {
      color: "#2A86BA",
      title: "Bluuue Sky",
      description: "with it's mountains",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyE5eajR70wQASy7tr-Lp9Kjm4YGcn-q7gDo2CdYHslpuLjg3HvzDKB_5pZKLDCGYcEjc&usqp=CAU",
    },
    {
      color: "#252E33",
      title: "Lonely castle",
      description: "in the wilderness",
      image:
        "https://www.ncronline.org/files/Photo%201-Vorster-Alpenglow%20c.jpg",
    },
    {
      color: "#FFB866",
      title: "Flying eagle",
      description: "in the sunset",
      image:
        "https://t4.ftcdn.net/jpg/07/44/36/37/360_F_744363737_fQratit3182GzjiN1LbP7HuK9Z2vMc1C.jpg",
    },
  ];

  const VerticalSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    console.log(activeSlide);
    

    const handleUpClick = () => {
      setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleDownClick = () => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
      <div className="slider-container">
        {/* Left Slide */}
        <div
          className="left-slide"
          style={{
            transform: `translateY(-${activeSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide-content"
              style={{ backgroundColor: slide.color }}
            >
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>

        {/* Right Slide */}
        <div
          className="right-slide"
          style={{
            transform: `translateY(${activeSlide * -100}%)`,

          }}
        >
          {slides.map((slide, index) => (
            
            
            <div
              key={index}
              className="slide-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="up-button" onClick={handleUpClick}>
            ⬆️
          </button>
          <button className="down-button" onClick={handleDownClick}>
          ⬇️
          </button>
        </div>
      </div>
    );
  };

  export default VerticalSlider;
