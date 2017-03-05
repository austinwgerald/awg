import React from 'react';
import logo from './logo.svg';
import './footer.css';

export default class Footer extends React.Component {

  render() {
    return (
      <div className="Footer">
        <div className="Footer-content">
          <p>
            Austin Gerald - 2017
            <br />
            Created using ReactJS
            <img src={logo} className="Footer-logo" alt="logo" />
          </p>
        </div>
      </div>
    );
  }
}
