import React from "react";

const ErrorCard = ({ message }) => {
  return (
    <div className="card">
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorCard;
