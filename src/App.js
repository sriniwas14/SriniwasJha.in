import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/elements/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="cs_brand" href="#">Sriniwas<b>Jha</b></div>
        <div className="cs_subhead">Coder | Gamer | Geek</div>

        <br/>
        <Switch>
          <Route path="/">
              <Home />
          </Route>
        
        </Switch>

      </div>
    </Router>
  );
}

export default App;
