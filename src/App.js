import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Tv from './pages/tv'
import Movies from './pages/movies'
import Login from './pages/login'
import Register from './pages/register'
import Detail from './pages/detailvidio'
import Vidio from './component/detailfilem'

function App () {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/vidio" exact>
        <Vidio />
        </Route>
        <Route path="/true" exact>
        <Dashboard token="true"/>
        </Route>
        <Route path="/tv" exact>
        <Tv token="false"/>
        </Route>
        <Route path="/login" exact>
        <Login />
        </Route>
        <Route path="/register" exact>
        <Register />
        </Route>
        <Route path="/movies" exact>
        <Movies  token="false"/>
        </Route>
        <Route path="/detail/:id" render={(props) => (<Detail {...props}/>)}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
