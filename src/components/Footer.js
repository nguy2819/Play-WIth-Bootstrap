import React, { Component } from 'react';
import styled from 'styled-components';

const Fonted = styled.h1`
  font-family: VT323;
`;
const CenterContent = styled.div`
    max-width: 1550px;
    margin: auto;
`;

class Footer extends Component {
    render() {
      return (
          <CenterContent>
              <Fonted class="container">
                <div class="row">
                    <div class="col">
                        <a href="https://www.linkedin.com/in/tien-nguyen-borland/"><i class="fab fa-linkedin" style={{color:'#0077B5'}}></i></a>
                    </div>
                    <div class="col">
                        <a href="https://www.facebook.com/nguyen.tien.520"><i class="fab fa-facebook-square" style={{color:'#3B5998'}}></i></a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/nguy2819"><i class="fab fa-github-square" style={{color:'#333'}}></i></a>
                    </div>
                    <div class="col">
                        <a href="https://codepen.io/nguy2819"><i class="fab fa-codepen" style={{color:'#333'}}></i></a>
                    </div>
                </div>
                  <h6>TIEN BORLAND <i class="far fa-copyright"></i>2018</h6>
              </Fonted>
          </CenterContent>
            );
        }
}

export default Footer;