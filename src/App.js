import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Tv from './pages/tv'
import Movies from './pages/movies'
import Login from './pages/login'
import Register from './pages/register'
import Prof from './component/profileIcon'

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/prof">
        <Prof />
        </Route>
        <Route path="/true">
        <Dashboard token="true"/>
        </Route>
        <Route path="/tv">
        <Tv token="false"/>
        </Route>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/register">
        <Register />
        </Route>
        <Route path="/movies">
        <Movies token="false"/>
        </Route>
        <Route path="/"exact component={Dashboard}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
