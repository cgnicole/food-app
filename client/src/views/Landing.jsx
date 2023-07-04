import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="hola">
        <h1 className="textlanding">
          Unleash your culinary
          <br /> creativity with our
          <br /> delightful recipes
          <Link to="/home">
            <button className="button">GO!</button>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Landing;
