import React, { Component } from 'react';
import './App.css';
// import styled from 'styled-components';
import ImageSlider from './components/ImageSlider';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ImageSlider />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
