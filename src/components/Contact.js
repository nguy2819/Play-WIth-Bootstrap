import React, { Component } from 'react';
import styled from 'styled-components';

const Fonted = styled.h1`
  font-family: VT323;
`;
const CenterContent = styled.div`
    max-width: 1550px;
    margin: auto;
`;

class Contact extends Component {
    render() {
      return (
          <Fonted className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Contact Me</h1>
                    <hr />
                    <p> Please don't hesitate to contact me if you have any questions OR you want to work with me!<i class="far fa-handshake"></i></p>
                    <CenterContent>
                    <form>
                        <div className="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Please let me know your name."/>
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div className="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Please leave your email so I can answer your questions."/>
                            <small id="emailHelp" className="form-text text-muted"> * I'll never share your email with anyone else. *</small>
                        </div>
                        <div className="form-group">
                            <label for="message">Your Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Please don't hesitate to message me if you have any concerns."></textarea>
                        </div>
                        <button type="submit" className="btn btn-warning btn-lg btn-block font-weight-bold shadow-lg">Submit</button>
                    </form>
                    </CenterContent>
                </div>
            </div>
          </Fonted>
    );
}
}

export default Contact;