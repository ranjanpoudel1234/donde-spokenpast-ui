import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/main';
import {Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <MuiThemeProvider>
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
            <Link to="/login">Login</Link>
            <Link to="/Signup">Signup</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/login">Login</Link>
            <Link to="/Signup">Signup</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    </MuiThemeProvider>
</div>

    );
  }
}

export default App;
