 //! Create a react application having a button to create notifications with random message and color, and the notification message should get removed after 3sec 
import React, { Fragment, useEffect, useState } from "react";
import "./index.css";
import ToastMessage from "./ToastMessage";

const ToastNotification = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      const timer = setTimeout(() => {
        setData(prev => prev.slice(1)); // Removes the oldest notification
      }, 3000); // Adjust duration as needed

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [data]);

  const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
  ];

  const types = ["info", "success", "error"];

  function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
  }

  const createNotification = () => {
    let obj = {
      type: getRandomType(),
      message: getRandomMessage(),
    };
    setData(prev => [...prev, obj]);
  };

  return (
    <Fragment>
      <div id="toasts">
        <ToastMessage data={data} />
      </div>
      <button className="btn" onClick={createNotification}>
        Show Notification
      </button>
    </Fragment>
  );
};

export default ToastNotification;
