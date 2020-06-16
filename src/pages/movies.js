import React, { Component } from "react";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import ListFilm from "../component/listFilem";
import Footer from "../component/foooter";
// router
import Data from "../api/filem";

class dashboard extends Component {
  constructor(props) {
    super();
  }
  render() {
    var filem = Data.filter((dt) => dt.kategori === "Filem");
    return (
      // fragmen
      <>
        <Header token={this.props.token} />
        <Jumbotron />
        <ListFilm kategori="Movies" data={filem} />
        <Footer created=" DumpWays Ade 2020" />
      </>
    );
  }
}

export default dashboard;
