import "./App.css";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
       
        
          <Routes>
            <Route exact path="/" element={<News key={"general"} category={"general"} />} />
            <Route exact
              path="/entertainment"
              element={<News key={"entertainment"} category={"entertainment"} />}
            />
            <Route exact path="/health"  element={<News key={"health"} category={"health"} />} />
            <Route exact path="/science"  element={<News key={"science"} category={"science"} />} />
          </Routes>
          </BrowserRouter>
      </div>
    );
  }
}
