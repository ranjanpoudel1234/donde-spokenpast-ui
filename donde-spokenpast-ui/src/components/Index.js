import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios";
import TextField from "material-ui/TextField";

const URL = "https://localhost:5001";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      searchTerm: ""
    };
  }

  componentDidMount = () => {
    this.getVideos();
  };

  getVideos = value => {
    console.log("The value is " + value);
    axios
      .get(URL + "/Video/GetAllVideos", {
        params: {
          videoName: value
        }
      })
      .then(res => {
        console.log(res);
        this.setState({ allVideos: res.data.videos });
      });
  };

  searchVideo = e => {
    this.getVideos(e.target.value);
  };

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <h4>Videos</h4>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={this.searchVideo}
              floatingLabelText={`Start searching for videos`}
            />
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={24}>
          {this.state.allVideos.map(function(item, key) {
            return (
              <Grid key={key} item xs={12} sm={4}>
                <Card>
                  <CardHeader
                    title={item.name}
                    subheader={
                      item.uploadedDate.substring(0, 10) +
                      "                " +
                      "Uploaded By: " +
                      item.author +
                      ""
                    }
                  />
                  <CardMedia
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography component="p">{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
