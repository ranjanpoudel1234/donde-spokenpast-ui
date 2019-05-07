import React, { Component } from "react";
import { Grid, Cell, Card, CardTitle, CardActions } from "react-mdl";
import TextField from "material-ui/TextField";
import { SubmitButton } from "./buttons";
import { Redirect } from "react-router-dom";
import Login, { docSel } from "./login";
import axios from "axios";

const error = {
  color: "red"
};

var newEmail,
  newPwd,
  confirmPwd,
  newUserName = "";

const URL = "https://localhost:5001";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      pwd: "",
      confirmPwd: "",
      hasError: true,
      open: false,
      Error: "",
      registered: false
    };
  }

  arePwdNotSame = () => this.newPwd === this.confirmPwd;

  shouldDisableBtn = () =>
    this.setState({
      hasError:
        this.state.email === "" ||
        this.state.pwd === "" ||
        this.state.confirmPwd === "" ||
        (this.state.username === "" && !this.arePwdNotSame)
    });

  emailChange = e => {
    let emailElem = docSel("emailError");
    newEmail = e.target.value;
    this.setState({ email: newEmail });
    if (newEmail === "") {
      emailElem.innerHTML = "Please enter your email.";
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail)) {
        emailElem.innerHTML = "Please enter valid email.";
      } else {
        emailElem.innerHTML = "";
      }
    }
    this.shouldDisableBtn();
  };

  pwdChange = e => {
    let pwdElem = docSel("pwdError");
    newPwd = e.target.value;
    this.setState({ pwd: newPwd });
    if (newPwd === "") {
      pwdElem.innerHTML = "Please enter your password.";
    } else {
      pwdElem.innerHTML = "";
    }

    if (confirmPwd !== newPwd) {
      docSel("confirmPwdError").innerHTML =
        "Password and Confirm password must be same.";
    }
    this.shouldDisableBtn();
  };

  confirmPwdChange = e => {
    let pwdElem = docSel("confirmPwdError");
    confirmPwd = e.target.value;
    this.setState({ confirmPwd: confirmPwd });
    if (confirmPwd !== newPwd) {
      pwdElem.innerHTML = "Password and Confirm password must be same.";
    } else {
      pwdElem.innerHTML = "";
    }

    this.shouldDisableBtn();
  };

  userNameChange = e => {
    let pwdElem = docSel("userNameError");
    newUserName = e.target.value;
    this.setState({ username: newUserName });

    if (newUserName === "") {
      pwdElem.innerHTML = "Please enter your Username.";
    } else {
      pwdElem.innerHTML = "";
    }
    this.shouldDisableBtn();
  };

  submitRegistration = e => {
    e.preventDefault();
    let registerData = {
      Email: this.state.email,
      Password: this.state.pwd,
      Name: this.state.username,
      Id: "",
      Phone: ""
    };
    axios.post(URL + "/Users/Post", registerData).then(res => {
      if (res.data.errors) {
        this.setState({ Error: res.data.errors });
      } else {
        this.setState({ registered: true });
      }
    });
  };

  render() {
    if (this.state.registered) {
      return (
        <Redirect
          to={{
            pathname: "/Login",
            state: {
              userRegistration: true
            }
          }}
        />
      );
    } else {
      return (
        <Grid className="home-grid">
          <Cell col={12} align="middle">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardActions>
                <p style={error}>{this.state.Error}</p>
                <form onSubmit={this.submitRegistration}>
                  <img src="data:image/png;base64,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" />
                  <hr />
                  <TextField
                    floatingLabelText={`Email`}
                    onChange={this.emailChange}
                  />
                  <p style={error} id="emailError" />
                  <TextField
                    floatingLabelText={`Username`}
                    onChange={this.userNameChange}
                  />
                  <p style={error} id="userNameError" />
                  <TextField
                    password
                    floatingLabelText={`Password`}
                    onChange={this.pwdChange}
                    type="password"
                  />
                  <p style={error} id="pwdError" />
                  <TextField
                    floatingLabelText={`Confirm Password`}
                    onChange={this.confirmPwdChange}
                    type="password"
                  />
                  <p style={error} id="confirmPwdError" />
                  <br />
                  <br />
                  <br />
                  <SubmitButton disabled={this.state.hasError} />
                </form>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      );
    }
  }
}

export default Signup;
