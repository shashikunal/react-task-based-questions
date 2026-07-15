import React from "react";

const Testimonial = ({ text }) => {
  return (
    <div className="testimonial">
      <i className="fas fa-quote-right fa-quote"></i>
      {text}
      <i className="fas fa-quote-left fa-quote"></i>
    </div>
  );
};

export default Testimonial;
