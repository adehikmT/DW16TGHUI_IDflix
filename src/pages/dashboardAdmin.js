import React, { Component } from "react";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/foooter";
import Admin from "../component/sectionAdmin";
// data

class dashboard extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      // fragmen
      <>
        <Header token={true} admin={true} />
        <Jumbotron token={this.props.token} />
        <Admin />
        <Footer created=" DumpWays Ade 2020" />
      </>
    );
  }
}

export default dashboard;
