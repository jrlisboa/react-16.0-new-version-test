import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './index.css';
import ErrorComponent from '../ErrorComponent';

class LogoCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({clicks}) => ({
      clicks: clicks + 1,
    }));
  }

  render() {
    if (this.state.clicks > 1) {
      throw new Error('The click error!!!!!!!');
    }

    return (
      <div className="App">
          <header className="App-header">
            <img
              alt="logo"
              src={logo}
              className="App-logo"
              onClick={this.handleClick}/>
            <h1 className="App-title">New version test | 16.0</h1>
          </header>
          <p className="App-intro">
            If you double-click the logo, the Portal Component will be mounted.
          </p>
          <span className="App-counter">{this.state.clicks}</span>
      </div>
    );
  }
}

class RootComponent extends Component {
  render() {
    return (
      <ErrorComponent>
        <LogoCounter/>
      </ErrorComponent>
    );
  }
}

export default RootComponent;
