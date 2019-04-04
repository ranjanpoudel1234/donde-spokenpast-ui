import React, { Component } from 'react';
import Routes from './router';



import './App.css';
import Navbar from './containers/Navbar';
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
