import React, { Component } from 'react';
import styled from 'styled-components';

const BackGroundColor = styled.div`
    background-color: #70193f
`;
class About extends Component {
    render() {
      return (
          <BackGroundColor>
          <div class="card-group">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title font-weight-bold text-right">Tien Borland</h2>
                    <h5 class="font-weight-bold text-right">FULL STACK DEVELOPER</h5>
                    <p class="card-text text-right">I'm a Junior Web Developer, also expanding over Software Developer, and I never stop learning everyday. I have experience working with clients inside and outside the United States. I have vast knowledge in HTML, CSS, JavaScript, React, Node.JS, MongoDB, Firebase, MySQL, RESTful API, Git Flow, and C#.</p>
                    <button type="button" class="btn btn-warning btn-primary btn-lg btn-block font-weight-bold">DOWNLOAD CV</button>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://lh3.googleusercontent.com/yZ7MEA6voQCoxPkVFWKIW6gSMhPBGjflEz3cZXtc64-cyvhzp2Y7Y38ZaO_Yrn5-r8S4lVFgq8IMhKLY48_hIw9xc9tJxgTpaQAIl7uvXY76yXixE-pcqvFqtFcuzTfY2IQvVBiZq95F9pPEW3gCm38RLlYp4Q59EE8tc2vgGf5h1POoCUq_J_XIZoeG6B3nNGoAmYhiY0YfMFQ37-i35_6IH1CWCk85Eomuf62W3gecnK-vePSPQvLWorwo1kRQap3nyFFBUXWukFWj5To4cHeGVOuawmHMf0cqk_e3CLPBHxfVKIukyGY2bx8_sMPHsQJBuu9ngcUjDzxX4PhQHYWr_kxmY6HRhEfLoWQSfd_BenfFq1GCA5oW95q8pOLD6A6Ca3sKxadg0ebMbncFGKCCTyDGpvEqsuhr4myDiX5veg96TYfZzeCoMqQof6ZcaqA8U8RBX_gZ8Csw3F7XTyltkrCwX0_bDBsS-F603fCWEs2nQzO7dUqHhbjEnKiRLWQHTYTbMsG4DSMJWE5BThSWIZVrtUILE_zLG9XHkpKLLuwzLOzNEgbyvX01fOL2BxQTMBksC8-xl1bt3B1YfcKlJ98zTW1Mong6eIMXHUxEzia-Mc4xlH3MbBKdYEU=w437-h733-no" alt="Tien'spicture"/>
            </div>
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title font-weight-bold text-left">My Skills</h2>
                    <p class="font-weight-bold text-left">HTML/CSS</p>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated w-100 p-3 bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="font-weight-bold text-right">98%</p>

                    <p class="font-weight-bold text-left">JAVASCRIPT</p>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated w-75 p-3 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="font-weight-bold text-right">75%</p>

                    <p class="font-weight-bold text-left">REACT</p>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated w-75 p-3 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="font-weight-bold text-right">75%</p>

                    <p class="font-weight-bold text-left">Node.JS</p>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated w-75 p-3 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="font-weight-bold text-right">75%</p>

                    <p class="font-weight-bold text-left">MySQL</p>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated w-50 p-3 bg-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="font-weight-bold text-right">50%</p>

                    <p class="font-weight-bold text-left">C#</p>
                    <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated w-50 p-3 bg-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="font-weight-bold text-right">In learning progress</p>

                </div>
            </div>
          </div>
          </BackGroundColor>
        );
    }
}

export default About;