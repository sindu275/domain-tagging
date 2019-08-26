import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './state';
import App from './app-router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <Provider store={configureStore()}>
  <App/>
 </Provider>,
 document.getElementById('root')
);
serviceWorker.unregister();
