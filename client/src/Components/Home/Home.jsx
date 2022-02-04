import React from "react";
import "./Home.css"
// React Components
import { Slider, Categories } from "./index";

const Home = () => {
  return (
    <div className="Home">
      <Slider />
      <Categories/>
    </div>
  );
};

export default Home;
