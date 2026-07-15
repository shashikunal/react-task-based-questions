import React from "react";

const ratingsData = [
  {
    id: 1,
    label: "Unhappy",
    imgSrc:
      "https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png",
  },
  {
    id: 2,
    label: "Neutral",
    imgSrc:
      "https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png",
  },
  {
    id: 3,
    label: "Satisfied",
    imgSrc:
      "https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png",
  },
];

const Ratings = ({ selectedRating, onRatingChange }) => {
  return (
    <div className="ratings-container">
      {ratingsData.map((rating) => (
        <div
          key={rating.id}
          className={`rating ${
            selectedRating === rating.label ? "active" : ""
          }`}
          onClick={() => onRatingChange(rating.label)}
        >
          <img src={rating.imgSrc} alt={rating.label} />
          <small>{rating.label}</small>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
