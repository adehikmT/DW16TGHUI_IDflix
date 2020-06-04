import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Tv from './pages/tv'
import Movies from './pages/movies'

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/true">
        <Dashboard token="true"/>
        </Route>
        <Route path="/tv">
        <Tv token="true"/>
        </Route>
        <Route path="/movies">
        <Movies token="true"/>
        </Route>
        <Route path="/"exact component={Dashboard}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
