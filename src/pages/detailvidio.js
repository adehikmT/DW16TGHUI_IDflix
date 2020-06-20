import React, { Component } from "react";
import Header from "../component/header";
import VidioPlay from "../component/vidioplayer";
import Detail from "../component/detailfilem";
import Foo from "../component/foooter";
// REDUX
import { connect } from "react-redux";
import { getDetailfilmCreator } from "../redux/actions/actionFilm";
class Detailvidio extends Component {
  componentDidMount() {
    this.props.getDetailfilmCreator(this.props.match.params.id);
  }

  render() {
    const { data, loading, error } = this.props;

    let info = "";
    if (loading) {
      info = "Loading...";
    } else if (error) {
      info = error;
    }

    const mounting = (
      <h1
        style={{
          color: error ? "red" : "white",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        {info}
      </h1>
    );

    let vidioPlay = "";

    if (data.id) {
      vidioPlay = (
        <>
          <VidioPlay vidio={data} />
          <Detail detail={data} />
        </>
      );
    }

    return (
      <div>
        <Header />
        {vidioPlay}
        {mounting}
        <Foo created=" DumpWays Ade" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.getAllfilm;
  return {
    data,
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  getDetailfilmCreator,
})(Detailvidio);
