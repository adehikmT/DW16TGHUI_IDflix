import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import AddEpisode from "../component/addEpisode";

class Addfilem extends Component {
  render() {
    var styl = {
      color: "white",
      border: 3,
      backgroundColor: "#1F1F1F",
      borderColor: "white",
      width: 400,
      height: 35,
      marginBottom: 10,
    };

    var fon = {
      color: "white",
      fontWight: 10,
      marginBottom: 5,
    };
    var styl1 = {
      color: "white",
      border: 3,
      backgroundColor: "#1F1F1F",
      borderColor: "white",
      width: 475,
      height: 35,
      marginBottom: 5,
      marginTop: 8,
    };

    return (
      <div>
        <div style={fon}>Add Filem</div>
        <input type="text" placeholder="title" autoFocus style={styl} />
        <input
          accept="image/*"
          className=""
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button
            variant="contained"
            style={{ backgroundColor: "white", maxWidth: 8, marginLeft: 10 }}
            component="span"
            className=""
          >
            <AttachFileIcon style={{ color: "#1F1F1F" }} />
          </Button>
        </label>{" "}
        <br></br>
        <input type="text" placeholder="year" style={styl1} />
        <br></br>
        <select style={styl1}>
          <option>Kategori</option>
          <option>Filem</option>
          <option>Tv</option>
        </select>
        <br></br>
        <textarea
          placeholder="deskripsi"
          style={{
            backgroundColor: "#1F1F1F",
            color: "white",
            width: "468px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        ></textarea>
        <br></br>
        <AddEpisode />
        <Button
          variant="contained"
          color="secondary"
          style={{ width: 470, marginTop: 7, marginRight: 10 }}
          className=""
        >
          save
        </Button>
      </div>
    );
  }
}

export default Addfilem;
