import React, { Component } from 'react';
//import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import Routes from './router';
import { Link } from 'react-router-dom';


import './App.css';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
