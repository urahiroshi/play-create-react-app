import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// for Sentry
import Raven from 'raven-js';
if (process.env.REACT_APP_SENTRY_KEY && process.env.REACT_APP_SENTRY_PROJECT) {
  console.log('### Configure SENTRY');
  const key = process.env.REACT_APP_SENTRY_KEY;
  const project = process.env.REACT_APP_SENTRY_PROJECT;
  Raven.config(`https://${key}@sentry.io/${project}`).install();
} else {
  console.log('### NOT Configure SENTRY');
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
