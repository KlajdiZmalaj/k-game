import React, { useEffect } from "react";
import images from "../../images";
import { useState } from "react";

export default ({ isAttacking, movement, scoring }) => {
  const [rerender, setRender] = useState(false);
  useEffect(() => {
    if (scoring) {
      setTimeout(() => {
        setRender(true);
      }, 1000);
    } else {
      setRender(false);
    }
  }, [scoring, movement]);
  return (
    <React.Fragment>
      {scoring ? (
        <img className="enemy devil" src={images.skull} alt="" />
      ) : (
        <img
          className={`enemy${rerender ? "" : " devil"}`}
          src={images.dWalk}
          alt=""
        />
      )}
    </React.Fragment>
  );
};
//
