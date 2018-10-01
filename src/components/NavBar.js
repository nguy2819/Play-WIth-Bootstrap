import React, { Component } from 'react';
import styled from 'styled-components';

const Fonted = styled.div`
  font-family: Parisienne;
  font-color: #ffc4a5
`;

const STYLE ={
    backgroundColor: {
        color: '#70193f'
    }
}; //either ways are not changing the color
//style="background-color: #70193f;"

class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top" style={STYLE.backgroundColor}> 
          <div class="container-fluid">
            <Fonted>
              <a class="navbar-brand" href="/TienBorland">
                <img src="src/TB.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                Tien Borland
              </a>
            </Fonted>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
              </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav mr-sm-0">
                <li class="nav-item active">
                  <a class="nav-link" href="/TienBorland">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/GettingtoknowTienBorland">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/WhatTienOffers">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/HerWorks">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/WhatClientsSayAboutTien">Testimonial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/ContactHer">Contact</a>
                </li>
              </ul>              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
