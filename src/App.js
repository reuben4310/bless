import { AppBar } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



import './App.css';
import About from './brochos components/About';
import AlHamichyah from './brochos components/AlHamichyah';
import AsherYazar from "./brochos components/AsherYazar";
import BirchasHamazon from './brochos components/BirchasHamazon';
import Home from './brochos components/Home';
import TefillasHaderech from './brochos components/TefillasHaderech';
import BlessDeck from './media/BlessDeck.png';


function App() {


  return (

    <div className="App">

      <Router>
        {/* <AppBar>

          <Link style={{ textDecoration: 'none', color: 'black' }} to="/"> <img src={BlessDeck} alt=""></img></Link>

        </AppBar> */}
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/asher">
              <AsherYazar />
            </Route>
            <Route path="/bh">
              <BirchasHamazon />
            </Route>
            <Route path="/ahm">
              <AlHamichyah />
            </Route>
            <Route path="/thd">
              <TefillasHaderech />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
