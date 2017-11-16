import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootComponent from './RootComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootComponent />, document.getElementById('root'));
registerServiceWorker();
