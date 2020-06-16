import React, { Component } from "react";
import { Player, BigPlayButton, ControlBar } from "video-react";
import "../styles/vidio.css";
import "video-react/dist/video-react.css";
import Data from "../api/filem";

class Vidio extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      id: this.props.id,
      url: "",
      poster: "",
    };
  }

  componentDidMount() {
    //props.id 1 = vidio 1 || props.id >1 vidio 2
    var databyid = Data.filter((dt) => dt.id === this.state.id);
    // console.log('ini id '+this.state.id)
    // if(this.state.id === '1'){ urlini='https://www.youtube.com/watch?v=BK0rbzLk0YI' }else{ urlini='https://www.youtube.com/watch?v=kYZut3DWvek'}

    this.setState({
      url: databyid[0].vidioUrl,
      poster: databyid[0].thumbenail,
    });
  }

  componentDidUpdate(prevProps, prepState) {
    console.log(prepState);
  }

  render() {
    const style = {
      paddingLeft: "50px",
      marginTop: "20px",
      backgroundColor: "#000000",
    };
    console.log(this.state.url + "    ini render");
    return (
      <div style={style}>
        <div className="vidio" style={{ backgroundColor: "#000000" }}>
          <Player
            poster={this.state.poster}
            height={536}
            marginTop="200px"
            width="95%"
            fluid={false}
            autoPlay={false}
          >
            <source src={this.state.url} />
            <BigPlayButton position="center" />
            <ControlBar autoHide={true} />
          </Player>
        </div>
      </div>
    );
  }
}

export default Vidio;
