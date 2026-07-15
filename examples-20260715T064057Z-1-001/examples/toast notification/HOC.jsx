import React, { useState } from "react";

const HOC = Component => {
  return ({ data }) => {
    let [display, setDisplay] = useState(true);
    setTimeout(() => {
      setDisplay(false);
    }, 3000);
    data.map((v, i) => {
        return display && <Component data={v} />;
    });
  };
};

export default HOC;
