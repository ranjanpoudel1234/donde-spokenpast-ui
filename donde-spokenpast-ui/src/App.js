import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Routes from "./router";
import { Link } from "react-router-dom";
const pointer = {
  cursor: "pointer"
};
class App extends Component {
  logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("Id");
    window.location.href = "/login";
  };
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Index"
              >
                SpokenPast
              </Link>
            }
            scroll
          >
            {localStorage.getItem("Id") ? (
              <Navigation>
                <Link to="/EditProfile"> My Profile </Link>
                <Link to="/UploadVideo"> Upload Video </Link>
                <a style={pointer} onClick={this.logout}>
                  {" "}
                  Logout
                </a>
              </Navigation>
            ) : (
              <Navigation>
                <Link to="/login">Login</Link>
                <Link to="/Signup">Signup</Link>
              </Navigation>
            )}
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                SpokenPast
              </Link>
            }
          >
            {localStorage.getItem("Id") ? (
              <Navigation>
                <Link to="/EditProfile"> My Profile </Link>
                <Link to="/UploadVideo"> Upload Video </Link>
                <a onClick={this.logout}>Logout</a>
              </Navigation>
            ) : (
              <Navigation>
                <Link to="/login">Login</Link>
                <Link to="/Signup">Signup</Link>
              </Navigation>
            )}
          </Drawer>
          <Content>
            <div className="page-content" />
            <Routes />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
