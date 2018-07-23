import React, { Component } from 'react';
import './Intro.css';
import logo from './logo.svg';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <header className="Intro-header">
          <img src={logo} className="Intro-logo" alt="logo" />
          <h1 className="Intro-title">Welcome to React</h1>
        </header>
        <p className="Intro-App">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Intro;
