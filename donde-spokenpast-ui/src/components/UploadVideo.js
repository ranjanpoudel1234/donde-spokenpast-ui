import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
const URL = "https://localhost:5001";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

export default class UploadVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Description: "",
      file: "",
      Message: ""
    };
  }

  setFile = e => {
    this.setState({ file: e.target.files[0] });
  };

  handleName = e => {
    this.setState({ Name: e.target.value });
  };

  handleDescription = e => {
    this.setState({ Description: e.target.value });
  };

  uploadVideo = () => {
    axios
      .post(URL + "/Video/UploadVideo/", {
        Name: this.state.Name,
        Description: this.state.Description,
        UserId: localStorage.getItem("Id")
        // Body: this.state.file
      })
      .then(res => {
        this.setState({
          Message: res.data.message,
          Name: "",
          Description: "",
          file: ""
        });
      });
  };
  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Details to upload your Video
            </Typography>
            <hr />
            <h3>{this.state.Message}</h3>
            <form noValidate autoComplete="off">
              <TextField
                id="filled-name"
                label="Name"
                value={this.state.Name}
                onChange={this.handleName}
                margin="normal"
                variant="filled"
              />
              <br />
              <TextField
                id="filled-name"
                label="Description"
                value={this.state.Description}
                onChange={this.handleDescription}
                margin="normal"
                variant="filled"
                multiline
              />
              <br />
              <input
                accept="video/*"
                id="contained-button-file"
                type="file"
                onChange={e => this.setFile(e)}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button color="success" size="small" onClick={this.uploadVideo}>
              Upload Video
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
