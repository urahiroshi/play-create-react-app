import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// for Sentry
import Raven from 'raven-js';
if (process.env.REACT_APP_DSN && process.env.REACT_APP_RELEASE) {
  console.log('### Configure SENTRY');
  Raven.config(
    process.env.REACT_APP_DSN,
    {
      release: process.env.REACT_APP_RELEASE
    }
  ).install();
} else {
  console.log('### NOT Configure SENTRY');
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
