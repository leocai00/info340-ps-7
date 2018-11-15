import React, { Component } from 'react';
import logo from './potato_walk.gif';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { EatChip } from "./EatChip";
import { Calorie } from "./Calorie";
import { Exercise } from "./Exercise";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Router>
            <React.Fragment>
              <Link className="link" to="/">None</Link>
              <Link className="link" to="/eat">Eat</Link>
              <Link className="link" to="/calorie">Calorie</Link>
              <Link className="link" to="/exercise">Exercise</Link>
              <Route path="/eat" component={ EatChip } />
              <Route path="/calorie" component={ Calorie } />
              <Route path="/exercise" component={Exercise} />
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}
  
export default App;
