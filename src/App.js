import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import GameContainer from "./components/GameContainer";
import "./styles/main.css";

const App = () => {
  const [isLoading, load] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      load(false);
    }, 500);
  }, []);
  return isLoading ? <Loader /> : <GameContainer />;
};

export default App;
