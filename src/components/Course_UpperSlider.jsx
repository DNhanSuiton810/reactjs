import React from "react";
import "./Course_UpperSlider.css";
import img1 from "../assets/LOWER_PICTURE.png";
import img2 from "../assets/LOWER_PICTURE.png";
import img3 from "../assets/LOWER_PICTURE.png";

const Page = () => {
  const images = [img1, img2, img3];

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="prev"></div>
        <div className="slide-panel">
          {images.map((images) => {
            return <img src={img1} />;
          })}
        </div>
        <div className="next"></div>
      </div>
    </div>
  );
};

export default Page;
