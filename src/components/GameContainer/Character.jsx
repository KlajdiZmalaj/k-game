import React, { useEffect, useState } from "react";
import images from "../../images";
import axe from "../../music/axe.wav";

export default ({ movement, isKeyDown, isAttacking }) => {
  const [moveRight, setMoveRight] = useState(0);
  const [isJumping, setJump] = useState(false);
  const [attackAudio, setAttackAudio] = useState(false);
  console.log("isKeyDown", movement, isKeyDown);
  if (isKeyDown) {
    if (movement === "running") {
      setTimeout(() => {
        if (moveRight < 791) setMoveRight(moveRight + 10);
      }, 30);
    }
    if (movement === "backward") {
      setTimeout(() => {
        if (moveRight > 1) setMoveRight(moveRight - 10);
      }, 30);
    }
    if (movement === "attack") {
      if (!attackAudio) {
        const attack = new Audio(axe);
        attack.play();
        setAttackAudio(true);
        setTimeout(() => {
          attack.pause();
          setAttackAudio(false);
        }, 1100);
      }
    }
  }
  useEffect(() => {
    if (movement === "jumping") {
      setJump(true);
      setTimeout(() => {
        setJump(false);
      }, 500);
    }
  }, [movement]);
  return (
    <div
      style={{
        transform: `translateX(${moveRight}px)${
          movement === "backward" ? "scaleX(-1)" : ""
        }`,
      }}
      className={`character${isJumping ? " jump" : ""}`}
    >
      {(movement === "walking" || !movement) && <img src={images.walking} />}
      {(movement === "running" || movement === "backward") && (
        <img src={images.running} />
      )}
      {movement === "attack" && <img src={images.attack} />}
      {movement === "jumping" && <img src={images.idle} />}
    </div>
  );
};
