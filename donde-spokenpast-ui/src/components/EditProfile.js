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

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      phone: "",
      confirmPwd: "",
      hasError: true,
      open: false,
      Error: "",
      registered: false,
      loggedInUserId: localStorage.getItem("Id")
    };
  }

  componentDidMount = () => {
    console.log(this.state.loggedInUserId);
    axios
      .get(URL + "/Users/GetUserById", {
        params: {
          id: this.state.loggedInUserId
        }
      })
      .then(res => {
        console.log(res);
        let userToEdit = res.data.user;
        this.setState({
          name: userToEdit.name,
          email: userToEdit.email,
          password: userToEdit.password,
          phone: userToEdit.phone
        });
      });
  };

  handlePhone = e => {
    this.setState({ phone: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  updateUser = ev => {
    ev.preventDefault();
    this.setState({ Error: "" });
    let userToUpdate = {
      Id: localStorage.getItem("Id"),
      Phone: this.state.phone,
      Password: this.state.password
    };
    if (this.state.password != "") {
      axios.post(URL + "/Users/UpdateUser", userToUpdate).then(res => {
        console.log(res);
        if (res.data.message) {
          this.setState({ Error: res.data.message });
        }
      });
    } else {
      this.setState({ Error: "Password cannot be empty" });
    }
  };

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Edit your Profile Details
            </Typography>
            <hr />
            {this.state.Error}
            <form noValidate autoComplete="off">
              <TextField
                id="filled-name"
                label="Name"
                value={this.state.name}
                // onChange={this.handleChange("name")}
                margin="normal"
                variant="filled"
                disabled
              />
              <br />
              <TextField
                id="filled-name"
                label="Email"
                value={this.state.email}
                // onChange={this.handleChange("name")}
                margin="normal"
                variant="filled"
                disabled
              />
              <br />
              <TextField
                id="filled-name"
                label="Password"
                value={this.state.password}
                onChange={this.handlePassword}
                margin="normal"
                variant="filled"
                type="password"
              />
              <br />
              <TextField
                id="filled-name"
                label="Phone"
                value={this.state.phone}
                onChange={this.handlePhone}
                margin="normal"
                variant="filled"
              />
            </form>
          </CardContent>
          <CardActions>
            <Button color="primary" size="small" onClick={this.updateUser}>
              Update Profile
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
