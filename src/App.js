import './App.scss';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/elements/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import ProjectSingle from './components/ProjectSingle';


function App() {
  const [currentRoute, setcurrentRoute] = useState("/")

  return (
    <Router>
      <div className="App">
        <Header currentRoute={ currentRoute } setcurrentRoute={ setcurrentRoute } />

        <div className="cs_brand" href="#">Sriniwas<b>Jha</b></div>
        <div className="cs_subhead">Coder | Gamer | Geek</div>

        <br/>
        <Switch>
          <Route exact path="/projects/:projectId">
              <ProjectSingle />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/portfolio">
              <Portfolio />
          </Route>
          <Route exact path="/contact">
              <Contact />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
