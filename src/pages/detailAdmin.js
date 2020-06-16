import React, { Component } from "react";
import Header from "../component/header";
import VidioPlay from "../component/vidioplayer";
import Detail from "../component/detailfilem";
import Foo from "../component/foooter";

class Detailvidio extends Component {
  render() {
    return (
      <div>
        <Header token={true} admin={true} />
        <VidioPlay id={this.props.match.params.id} />
        <Detail id={this.props.match.params.id} admin={true} />
        <Foo created=" DumpWays Ade" />
      </div>
    );
  }
}

export default Detailvidio;
