import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";

import Chat from "./components/Chat/Chat";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <AppBody>
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/" exact>
              <Chat></Chat>
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
