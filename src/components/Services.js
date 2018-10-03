import React, { Component } from 'react';
import styled from 'styled-components';

const CenterContent = styled.div`
    max-width: 1500px;
    margin: auto;
`;
const Fonted = styled.div`
  font-family: VT323;
`;

class Services extends Component {
    render() {
      return (
        <Fonted>
            <CenterContent>
            <div className="jumbotron jumbotron-fluid">
                <div className="row welcome text-center">
                    <div className="col-12">
                        <Fonted><h1 className="display-4"><u>Education</u></h1></Fonted>
                    </div>
                </div>
            </div>
            </CenterContent>
        </Fonted>
    );
}
}

export default Services;