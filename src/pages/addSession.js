import React, { Component } from "react";
import Pay from "../component/addEpisode";
import "../styles/profile.css";
import Header from "../component/header";
import Foo from "../component/foooter";

class AddFilem extends Component {
  constructor() {
    super();
    this.state = {
      row: 1,
    };
  }

  HendleClick() {
    this.setState({
      row: this.state.row + 1,
    });
  }

  // componentWillMount(){
  //     var save=<Pay/>
  // }

  render() {
    return (
      <>
        <Header token="true" admin={true} />
        <div className="center">
          <Pay />
          {/* {this.save} */}
        </div>
        <Foo />
      </>
    );
  }
}
export default AddFilem;
