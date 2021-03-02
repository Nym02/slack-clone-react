import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>Let's build slack</h1>

      <Router>
        <Switch>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
