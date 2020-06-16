import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Tv from "./pages/tv";
import Movies from "./pages/movies";
import Login from "./pages/login";
import Register from "./pages/register";
import Detail from "./pages/detailvidio";
import Pay from "./pages/Payment";
import Profile from "./pages/Profile";
// import Admin from './pages/dashboardAdmin'
import Transaksi from "./pages/transaction";
// import DetailAdmin from './pages/detailAdmin'
import AddFilem from "./pages/addFilem";
import AddSesion from "./pages/addSession";
import NoMatch from "./pages/404";
import Loading from "./component/loading";
import PrivateRoute from "./component/utils/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Loading>
          <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            {/* <Route path="/admin" exact component={Admin}></Route> */}
            <PrivateRoute
              path="/film"
              component={AddFilem}
              title="Films"
              exact
            />
            <PrivateRoute
              path="/episode"
              component={AddSesion}
              title="Episodes"
              exact
            />
            <PrivateRoute
              path="/transaction"
              component={Transaksi}
              title="Transactions"
              exact
            />
            <PrivateRoute
              path="/payment"
              component={Pay}
              title="Payman"
              exact
            />
            <PrivateRoute
              path="/profile"
              component={Profile}
              title="Profile"
              exact
            />
            {/* <Route path="/true" exact>
              <Dashboard token="true" />
            </Route> */}
            <Route path="/tv" exact>
              <Tv token="false" />
            </Route>
            <Route path="/movies" exact>
              <Movies token="false" />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route
              path="/detail/:id"
              render={(props) => <Detail {...props} />}
            />
            {/* <Route path="/vidio/:id" render={(props) => (<DetailAdmin {...props}/>)}/> */}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Loading>
      </Router>
    </>
  );
}

export default App;
