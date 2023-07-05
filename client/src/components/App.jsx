import { Route, Routes } from "react-router-dom";
import React from "react";
import Landing from "../views/Landing";
import Home from "../views/Home";

import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
