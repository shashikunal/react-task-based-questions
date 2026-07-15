import React, { useState } from "react";
import Ratings from "./Ratings";
import FeedbackPanel from "./FeedBackPanel";
import "./feedback.css";

const Feedback = () => {
  const [selectedRating, setSelectedRating] = useState("Satisfied");
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);

  const handleRatingChange = rating => {
    setSelectedRating(rating);
  };

  const sendFeedback = () => {
    setIsFeedbackSent(true);
  };

  return (
    <div className="panel-container">
      {isFeedbackSent ? (
        <FeedbackPanel rating={selectedRating} />
      ) : (
        <>
          <strong>
            How satisfied are you with our <br /> customer support performance?
          </strong>
          <Ratings
            selectedRating={selectedRating}
            onRatingChange={handleRatingChange}
          />
          <button className="btn" onClick={sendFeedback}>
            Send Review
          </button>
        </>
      )}
    </div>
  );
};

export default Feedback;
