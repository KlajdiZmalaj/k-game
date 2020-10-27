import React, { useState, useEffect } from "react";
import startupMusic from "../../music/startup.mp3";
import dancer1 from "../../images/sprays/idleStart.gif";
import ForestLayers from "./ForestLayers";
import Character from "./Character";
import config from "./config";
import Enemies from "./Enemies";
const startupAudio = new Audio(startupMusic);
export default () => {
  const [hasAudio, setAudio] = useState(true);
  const [gameStarted, startGame] = useState(0);
  const [movement, setmove] = useState("walking");
  const [isKeyDown, setKeyDown] = useState(false);
  const [isAttacking, setAttack] = useState(false);
  const [settings, setSettings] = useState(false);
  const [score, setScore] = useState(0);
  const [scoring, setScoreTimer] = useState(false);
  //   console.log("movement1", movement);
  //
  useEffect(() => {
    startupAudio.play();
    startupAudio.loop = true;
  }, []);
  return (
    <React.Fragment>
      <div
        tabIndex="0"
        onKeyDown={(e) => {
          //   console.log("ca key down ", e.keyCode);
          setmove(config[e.keyCode]);
          if (e.keyCode === 32 && !isAttacking) {
            setAttack(true);
            const charX = document
              .querySelector(".character")
              ?.getBoundingClientRect()?.x;
            const enemyX = document
              .querySelector(".devil")
              ?.getBoundingClientRect()?.x;
            if (
              charX + 110 >= enemyX &&
              enemyX - 50 <= charX &&
              enemyX + 110 >= charX &&
              charX - 50 <= enemyX
            ) {
              if (!scoring) {
                setScore(score + 1);
                setScoreTimer(true);
              }
              setTimeout(() => {
                setScoreTimer(false);
              }, 1000);
            }
          }
          setKeyDown(true);
        }}
        onKeyUp={() => {
          setTimeout(() => {
            if (movement !== "attack") {
              setmove("walking");
            }

            setKeyDown(false);
          }, 100);
          setTimeout(() => {
            if (movement === "attack") {
              setmove("walking");
            }
            setAttack(false);
          }, 1000);
        }}
        className={"gameContainer" + (gameStarted === 1 ? " start" : "")}
      >
        {gameStarted === 1 && (
          <div className="inGameNav">
            <div className="left">
              <div
                onClick={() => {
                  startGame(0);
                  setScore(0);
                }}
              >
                <i className="fal fa-chevron-left" aria-hidden="true"></i>
                Go Lobby
              </div>
            </div>
            <div className="center">
              <div className="score">{score}</div>
            </div>
            <div className="right">
              {hasAudio ? (
                <i
                  onClick={() => {
                    startupAudio.pause();
                    setAudio(false);
                  }}
                  className="fal fa-volume-up"
                ></i>
              ) : (
                <i
                  onClick={() => {
                    startupAudio.play();
                    setAudio(true);
                  }}
                  className="fal fa-volume-slash"
                ></i>
              )}
            </div>
          </div>
        )}
        <ForestLayers gameStarted={gameStarted} />
        {gameStarted === 1 && (
          <>
            <Character
              isKeyDown={isKeyDown}
              isAttacking={isAttacking}
              movement={movement}
            />
            <Enemies
              scoring={scoring}
              isAttacking={isAttacking}
              movement={movement}
            />
          </>
        )}
      </div>
      {gameStarted === 0 && (
        <div className="backDrop">
          <h1>Ødger the Viking</h1>
          <button onClick={() => startGame(1)}>
            {" "}
            <span>Start Game</span>
          </button>
          <img src={dancer1} alt="" />
          <div className="settings">
            <div className="left">@klajdizmalaj</div>
            <div className="right">
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setSettings(true);
                }}
                className="fal fa-cog"
                aria-hidden="true"
              ></i>
              {hasAudio ? (
                <i
                  onClick={() => {
                    startupAudio.pause();
                    setAudio(false);
                  }}
                  className="fal fa-volume-up"
                ></i>
              ) : (
                <i
                  onClick={() => {
                    startupAudio.play();
                    setAudio(true);
                  }}
                  className="fal fa-volume-slash"
                ></i>
              )}
            </div>
          </div>
        </div>
      )}
      {settings && (
        <div className="animate__animated animate__backInUp controls">
          <div className="controls--header">
            Settings{" "}
            <i
              onClick={() => {
                setSettings(false);
              }}
              className="fal fa-times"
              aria-hidden="true"
            ></i>{" "}
          </div>
          <div className="controls--body">
            <div>
              <span>W</span>
              Jump
            </div>
            <div>
              <span>A</span>
              Left
            </div>

            <div>
              <span>D</span>
              Right
            </div>
            <div>
              <span>SpaceBar</span>
              Attack
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
