import React, { Component } from "react";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import ListFilm from "../component/listFilem";
import Footer from "../component/foooter";
//css
import "../styles/loading.css";
// REDUX
import { connect } from "react-redux";
import { getAllfilmCreator } from "../redux/actions/actionFilm";

class Tvs extends Component {
  componentDidMount() {
    this.props.getAllfilmCreator();
  }

  render() {
    const { loading, data, error } = this.props;
    const tvshows =
      data.length > 0 ? data.filter((movies) => movies.category.id === 1) : [];
    return (
      // fragmen
      <>
        <Header />
        <Jumbotron />
        {loading ? (
          <h1 className="loading">Loading.....</h1>
        ) : error ? (
          <h1 className="loading">{error}</h1>
        ) : data.length > 0 ? (
          <>
            <ListFilm
              kategori="TV Shows"
              data={data.length > 0 && !loading ? tvshows : []}
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
  return {
    data,
    loading,
    error,
  };
};

export default connect(mapStateToProps, { getAllfilmCreator })(Tvs);
