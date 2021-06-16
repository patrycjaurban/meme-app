import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import MemeList from './MemeList.js'
import logo from './logo.png';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="topnav">
            <ul>
              <li><img src={logo} className="App-logo" alt="logo" /></li>
              <li><Link to="/">MemeApp</Link></li>
              <li><Link to="/">Główna</Link></li>
              <li><Link to="/hot">Hot</Link></li>
              <li className="site-slogan"><p>Najlepsze memy w powiecie!</p></li>
            </ul>
          </div>
        </nav >
        <body className="App-body">
          <Switch>
            <Route path="/hot">
              <Hot />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </body>
      </div >
    </Router >
  );
}

function Home() {
  return <MemeList/>
}

function Hot() {
  return <MemeList/>
}