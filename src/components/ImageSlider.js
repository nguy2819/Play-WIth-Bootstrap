import React, { Component } from 'react';
// import styled from 'styled-components';

class ImageSlider extends Component {
    render() {
      return (
            <div id="slides" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" class="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://lh3.googleusercontent.com/swzKo7RKVFYl6qtheMOP3E59R43fNra1e7xBS85Z5I_cKQv6Y65ewreEGeoiAfoELFPUHW2kAxeacTy7YsyNlkaaBVK8939TqoRLvjw5QskxWbn6qHXwHsgADxS8QZZK882Tnk9_fzADpXDVefxQzFYQlfx8lx2k8hgdfQNQInOWcy6tW8fGZsQNo4haW3Ng91xsiZO3rTV7CW4d0ZPaCgiiNOYVBJnmJ6HgM19eGPRQWAUOekKHGNVsAECv_CRDZjXPle_F2XS2rKj6Yk1JzNk-IGp8QacRFMri9TYnShylAg0HG4YGQr7QX3e0FC1BLCmtQZNHOqKh-vGBGi9IzxQFK5I2Ejx2qovsDYGC29kCYFXUrougzduOZg5GSShxl38AEd_fK5V5tF9D1eHzUe8OvOZgspsINV_BNvL-kq48Vddi4Jxcg4h86OPj81_xeHQ2uoLWzUuaSo4JUV7Qj5dRgtE7TuFEUVbN_bTDFUwkw-XMkGBAuoJIEIhew3eQ5_7pMsiArFsF-IMz-pkNH0XYNKzVXmfNtBDTCye4iwbEohKHLL8aav1_l38QZdPHj4kjght19h-ITKXyhHrlGNwMJXd1OVOrvz_J9X4PwWUIwNCWpHtMNPZdSpOfjlA=w1152-h679-no" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://lh3.googleusercontent.com/i36dP-OaQY18FUIYUyC6kkCKPANflWAAQfgHANTKxy7uYD58y1MWnJC79GOfDQ4GFH-IUYU0GJt2dmlLZ6JBvt3hJ_-DygNhPCfXSWNMsmL6bTxTP-R9ijmt2iFON0lyPFJe2wD2sPU2fq6PyprNBgqc6cWc9qYtuMYaK8C-yMl3BRxJUk97ydcekZm_i9LRc0n6gYx0Y1QfvUKK6BnsnJcCUgBrBmxgI9SpW0rVGqPlmTwN4FvG3w0UljmA95oA3vr94lGyuvebvEpFMqCNQo9TQHAdZ6HxTUmvg8J0pQBUwYvjc_FsP2xcvbjNaJ3uj7A3zZvYQqNAT4gGIY8ov0cvzZZh4wR9Ny3xIiGDRrYQ0f1nyO7-HXBjs7bo6sDxNKEFuaOE9SLSa4kKTsb_OgjToZjdin4n1aaWVcHUtW8kvnGjAJhnpq14wQEr911cbwR3PXcjBRvcid1RL0WEJM-x1_J8z4h4JztVfoVXmIFTDwCsnBx3beSgNgPyfWy3c_3-iVeHuFz4-tyTDRslycwBpqsCntjEZF5j1x4VnjN_EOcmthx1qJ6xQEyAoD-mQX9EoCVvRmbVaeJwFYOoPVd_cmJv5ZYFQuThWj2glnmmcj-9wzoZaLiI4CYWqoU=w904-h678-no" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://lh3.googleusercontent.com/8CK-zW0JvGZhdg3himYSoNMLdVEzfIRJddY9AWePQR04B5lP4KXcMW7rsho69CuhCAXefFF2WRIwzlfRLr7FnlOiwTfH6CYL8qTSAWyfyPcp46oGc2mv0nQpokB6qKczfUPo-eULFfTijSqDxD_6hJs7iJuRomLkPero9aV9QLUwCGSbOYZMtNDq25g1FKsKmQwpPFHPRL4Uzlf_StUEyEy2GouPKx-oF2VoDXqbH3j1TkDr0JjHSQ8bn5HKdUkhuVsEqPOrZOAJC6Ck3cLEB0JnCNwR-0pENfEvwXaPUwE5WLry504BBsRv8cih7yuK0Q6Y1kSsW1eyHzs3z0416-YfEm6avETCklrBhqkvc7-qGTMnA7ibQnMu3RKV4KcA5P1SSKgwLKyb8Jm_YMhLqjBFS6aJ0bpD56e3oEmw-lSqviRYD5Mja6c9ZoE3AfVhoTgIB-1AGkfBWXnEw36kYuwRBNDxSOAL_JLnIZCqdc9Mj0Ii-HLhz6VzzVm8S-r8bjfFiOhjE7qpRVTLOcHtf0_czr8rLi8ib8qzUcO0Wf3bC1SclyCvxOEgnZ5cZLKbVaAERe-oHIITxrQzptSj3qVujv0LKX7Jjd455f4L3iFCgFv79-eq1eT5jsIKtRY=w1151-h677-no" alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    );
  }
}

export default ImageSlider;