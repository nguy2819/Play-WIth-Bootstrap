import React, { Component } from 'react';
// import styled from 'styled-components';

class About extends Component {
    render() {
      return (
          <div className="card-group">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title font-weight-bold text-right">Tien Borland</h2>
                    <h5 className="font-weight-bold text-right">FULL STACK DEVELOPER</h5>
                    <p className="card-text text-right">I'm a Junior Web Developer, also expanding over Software Developer, and I never stop learning everyday. I have experience working with clients inside and outside the United States. I have vast knowledge in HTML, CSS, JavaScript, React, Node.JS, MongoDB, Firebase, MySQL, RESTful API, Git Flow, and C#.</p>
                    <button type="button" className="btn btn-warning btn-primary btn-lg btn-block font-weight-bold">
                    DOWNLOAD CV<span className="glyphicon glyphicon-download-alt"></span>
                    </button>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://lh3.googleusercontent.com/yZ7MEA6voQCoxPkVFWKIW6gSMhPBGjflEz3cZXtc64-cyvhzp2Y7Y38ZaO_Yrn5-r8S4lVFgq8IMhKLY48_hIw9xc9tJxgTpaQAIl7uvXY76yXixE-pcqvFqtFcuzTfY2IQvVBiZq95F9pPEW3gCm38RLlYp4Q59EE8tc2vgGf5h1POoCUq_J_XIZoeG6B3nNGoAmYhiY0YfMFQ37-i35_6IH1CWCk85Eomuf62W3gecnK-vePSPQvLWorwo1kRQap3nyFFBUXWukFWj5To4cHeGVOuawmHMf0cqk_e3CLPBHxfVKIukyGY2bx8_sMPHsQJBuu9ngcUjDzxX4PhQHYWr_kxmY6HRhEfLoWQSfd_BenfFq1GCA5oW95q8pOLD6A6Ca3sKxadg0ebMbncFGKCCTyDGpvEqsuhr4myDiX5veg96TYfZzeCoMqQof6ZcaqA8U8RBX_gZ8Csw3F7XTyltkrCwX0_bDBsS-F603fCWEs2nQzO7dUqHhbjEnKiRLWQHTYTbMsG4DSMJWE5BThSWIZVrtUILE_zLG9XHkpKLLuwzLOzNEgbyvX01fOL2BxQTMBksC8-xl1bt3B1YfcKlJ98zTW1Mong6eIMXHUxEzia-Mc4xlH3MbBKdYEU=w437-h733-no" alt="Tien'spicture"/>
            </div>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title font-weight-bold text-left">My Skills</h2>
                    <p className="font-weight-bold text-left">HTML/CSS</p>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped w-100 p-3 bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="font-weight-bold text-right">98%</p>

                    <p className="font-weight-bold text-left">JAVASCRIPT</p>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped w-75 p-3 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="font-weight-bold text-right">75%</p>

                    <p className="font-weight-bold text-left">REACT</p>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped w-75 p-3 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="font-weight-bold text-right">75%</p>

                    <p className="font-weight-bold text-left">Node.JS</p>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped w-75 p-3 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="font-weight-bold text-right">75%</p>

                    <p className="font-weight-bold text-left">MySQL</p>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped w-50 p-3 bg-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="font-weight-bold text-right">50%</p>

                    <p className="font-weight-bold text-left">C#</p>
                    <div className="progress">
                    <div className="progress-bar progress-bar-striped w-50 p-3 bg-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="font-weight-bold text-right">Learning in progress</p>

                </div>
            </div>
          </div>
        );
    }
}

export default About;