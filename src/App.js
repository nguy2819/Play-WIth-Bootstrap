import React, { Component } from 'react';
import './App.css';
// import styled from 'styled-components';
import ImageSlider from './components/ImageSlider';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageSlider />
        <NavBar />
        <About />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
