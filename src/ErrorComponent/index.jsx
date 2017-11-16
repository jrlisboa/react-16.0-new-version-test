import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PortalComponent extends Component {
  constructor(props) {
    super(props);
    this.suport = document.createElement('div');
    this.root = document.getElementById('root');
    this.root.appendChild(this.suport);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.suport,
    );
  }
}

class ErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <PortalComponent>
          <div
            style={{
              width: '100%',
              height: '100vh',
              backgroundColor:
              'blue',
              position: 'absolute'
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
        </PortalComponent>
      );
    }
    return this.props.children;
  }
}

export default ErrorComponent;
