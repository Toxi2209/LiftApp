import React from "react";
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./comp/Nav/Navbar";
import Home from './comp//Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
      </div>
    </div>
    </Router>
  );
}

export default App;
