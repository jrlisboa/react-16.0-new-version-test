import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './index.css';
import ErrorComponent from '../ErrorComponent';

class PortalComponent extends Component {
  constructor(props) {
    super(props);

    this.suport = document.createElement('div');
    this.app = document.querySelector('.App');
  }

  componentDidMount() {
    this.app.appendChild(this.suport);
  }

  componentWillUnmount() {
    this.app.removeChild(this.suport);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.suport,
    );
  }
}

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
    // if (this.state.clicks > 1) {
    //   throw new Error('The click error!!!!!!!');
    // }
    const portal = this.state.clicks > 1 ?
    <PortalComponent>
      <div
        style={{
          width: '100%',
          height: '100vh',
          opacity: '0.3',
          backgroundColor: 'blue',
          position: 'absolute',
          top: '0px',
        }}>
        <h1
          style={{
            fontSize: '100px',
            textAlign: 'center',
            color: 'white',
            width: '100%'
          }}>
          I got the error
        </h1>
      </div>
    </PortalComponent> : null;

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
          {portal}
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
