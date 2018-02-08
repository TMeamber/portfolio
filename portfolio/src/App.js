import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";



class App extends Component {
  render() {
    return (
      <div className='App'>
      < Navbar />
      < Home />
      </div>
    );
  }
}

export default App;
