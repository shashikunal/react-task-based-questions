import React from "react";

const FeedbackPanel = ({ rating }) => {
  return (
    <div className="feedback-panel">
      <i className="fas fa-heart"></i>
      <strong>Thank You!</strong>
      <br />
      <strong>Feedback: {rating}</strong>
      <p>We'll use your feedback to improve our customer support.</p>
    </div>
  );
};

export default FeedbackPanel;
