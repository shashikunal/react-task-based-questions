import React, { Fragment } from "react";

const RandomImageFeed = () => {
  let baseUrl = "https://picsum.photos/200/300?random=";
  return (
    <div className="imcontainer">
      {[...Array(30)].map((_, i) => {
        return (
          <Fragment key={i}>
            <img src={`${baseUrl}${i + 1}`} alt="" />
          </Fragment>
        );
      })}
    </div>
  );
};

export default RandomImageFeed;
