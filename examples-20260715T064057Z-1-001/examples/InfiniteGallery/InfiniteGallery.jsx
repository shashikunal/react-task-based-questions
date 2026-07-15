import React, { useState, useEffect, useCallback } from "react";
import "./InfiniteGallery.css";

const generateRandomImages = (count = 10) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + Math.random(),
    url: `https://picsum.photos/300/300?random=${Math.random()}`,
  }));
};

const InfiniteGallery = () => {
  const [images, setImages] = useState(() => generateRandomImages(20));
  const [isFetching, setIsFetching] = useState(false);

  const fetchMoreImages = useCallback(() => {
    if (isFetching) return;
    setIsFetching(true);
    setTimeout(() => {
      setImages(prev => [...prev, ...generateRandomImages(10)]);
      setIsFetching(false);
    }, 1000);
  }, [isFetching]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200 &&
      !isFetching
    ) {
      fetchMoreImages();
    }
  }, [fetchMoreImages, isFetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="gallery-container">
      <header>
        <h1>Infinite Scroll Gallery</h1>
        <p>Scroll down to load more images</p>
      </header>
      <div className="gallery">
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.url} alt="Random" loading="lazy" />
          </div>
        ))}
      </div>
      {isFetching && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading more images...</p>
        </div>
      )}
    </div>
  );
};

export default InfiniteGallery;
