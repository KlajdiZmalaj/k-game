import React from "react";
import images from "../../images";
export default ({ gameStarted }) => {
  return (
    <div className="layers">
      <img src={images.layer2} alt="" />
      <img src={images.layer3} alt="" />
      <img src={images.layer4} alt="" />
      <img className="trees" src={images.layer5} alt="" />
      <img className="trees t2" src={images.layer5} alt="" />

      <img className="bushes" src={images.layer6} alt="" />
      <img className="bushes b2" src={images.layer6} alt="" />
      <img src={images.layer7} alt="" />
      <img className="street" src={images.layer8} alt="" />
      <img className="street s2" src={images.layer8} alt="" />
      <img className="street" src={images.layer9} alt="" />
      <img className="street s2" src={images.layer9} alt="" />
    </div>
  );
};
