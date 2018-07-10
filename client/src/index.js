import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import withRoot from './withRoot';

const AppWithTheme = withRoot(App);

ReactDOM.render(
  <BrowserRouter>
    <AppWithTheme />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
