//! Create a react application having an interactive login form with a visually appealing wave effect on labels.
import React from "react";
import Form from "./Form";
import "./style.css"

const FormInputWave = () => {
  return (
    <div className="container">
      <h1>Please Login</h1>
      <Form />
    </div>
  );
};

export default FormInputWave;
