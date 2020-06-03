import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Prof from './component/profileIcon'

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/"exact component={Dashboard}></Route>
        <Route path="/profile"exact component={Prof}></Route>
        <Route path="/true">
        <Dashboard token="true"/>
        </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
