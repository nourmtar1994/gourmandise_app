import React from "react";

import * as classes from "./Slider.module.css";

const Slider = ({ images }) => {
  return (
    <>
      {images?.map((item) => (
        <>
          <div
            className={"slide " + classes.slider}
            style={{ backgroundImage: "url(" + item.image + ")" }}
          >
            <h1>{item.text}</h1>
          </div>
        </>
      ))}
    </>
  );
};
export default Slider;
