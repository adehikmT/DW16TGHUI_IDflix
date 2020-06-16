import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ImageIcon from "@material-ui/icons/Image";
import EmailIcon from "@material-ui/icons/Email";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import WcIcon from "@material-ui/icons/Wc";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/Camera";

class profile extends Component {
  constructor(props) {
    super();
  }

  render() {
    const styl = {
      width: "200px",
      height: "250px",
      marginTop: "50px",
    };
    const btnFile = {
      backgroundColor: "#f50057",
      marginTop: 20,
      marginLeft: -50,
    };

    return (
      <>
        <Grid container>
          <Grid item lg={6}>
            <List>
              <ListItem>
                <ImageIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary="adehikmat.jpg"
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <EmailIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary="aalolxyz@gmail.com"
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <LocalActivityIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary="Active"
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <WcIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary="None"
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <PhoneIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary="090909090909"
                  secondary=""
                />
              </ListItem>
              <ListItem>
                <LocationOnIcon color="secondary" />
                <ListItemText
                  style={{ color: "white", marginLeft: 10 }}
                  primary="Indonesai"
                  secondary=""
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <input
              accept="image/*"
              className=""
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
            />
            <img
              style={styl}
              src="https://scontent.fbdo6-1.fna.fbcdn.net/v/t1.0-9/54514220_581505695684382_7911727614937530368_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeFtK3Cug8n3n5Pq-bni3ouzqVuMxc2BugupW4zFzYG6C_kFzIMrgfjeWT8H50p8BLoVcC5I8ER7oliKclEAmv9Y&_nc_oc=AQlUlAtxINtEJZNUM0tdA-2pWQz6pP5WThzkvgnGG3rAgAKwDvJ4JeQh9gi01RBjGag&_nc_ht=scontent.fbdo6-1.fna&oh=541cbf0ecc4d95f4aeab8233d3fce3ab&oe=5EFC3D48"
              alt="ok"
            />

            <label htmlFor="raised-button-file" style={btnFile}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#f50057" }}
                component="span"
                className=""
              >
                <CameraIcon style={{ color: "white" }} />
              </Button>
            </label>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default profile;
