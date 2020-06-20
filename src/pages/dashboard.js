import React, { Component } from "react";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import ListFilm from "../component/listFilem";
import Footer from "../component/foooter";
// data
import { connect } from "react-redux";
import { getAllfilmCreator } from "../redux/actions/actionFilm";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllfilmCreator();
    console.log("did mount");
  }

  componentWillUpdate() {
    console.log("didUpdate");
  }

  componentDidUpdate() {
    // this.props.getAllfilmCreator();
    console.log("will");
  }

  render() {
    const { loading, lfm, dfm, data, error } = this.props;
    const films =
      data.length > 0 ? data.filter((movies) => movies.category.id === 2) : [];
    const tvshows =
      data.length > 0 ? data.filter((movies) => movies.category.id === 1) : [];
    return (
      // fragmen
      <>
        <Header />
        <Jumbotron />
        {loading || lfm ? (
          <h1 className="loading">Loading.....</h1>
        ) : error ? (
          <h1 className="loading">{error}</h1>
        ) : (
          ""
        )}
        {dfm.id ? <h1 className="loading">Loading.....</h1> : ""}
        {data.length > 0 ? (
          <>
            <ListFilm
              kategori="TV Shows"
              data={data.length > 0 && !loading ? tvshows : []}
            />
            <ListFilm
              kategori="Movies"
              data={data.length > 0 && !loading ? films : []}
            />
          </>
        ) : (
          <h1 className="loading"> Film Blank </h1>
        )}
        <Footer created="Ade Hikmat Pauji Ridwan" />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.getAllfilm;
  const { data: dfm, loading: lfm, error: efm } = state.deleteFilm;
  return {
    data,
    loading,
    error,
    dfm,
    lfm,
    efm,
  };
};

export default connect(mapStateToProps, { getAllfilmCreator })(Dashboard);
