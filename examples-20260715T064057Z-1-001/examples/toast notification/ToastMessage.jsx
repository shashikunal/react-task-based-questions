import React, { Fragment} from "react";
import "./index.css";

const ToastMessage = ({ data }) => {
 
  return (
    <Fragment>
      {data.map(({ type, message }, index) => {
        return (
          <div className={`toast ${type}`} key={index}>
            {message}
          </div>
        );
      })}
    </Fragment>
  );
};

export default ToastMessage;
