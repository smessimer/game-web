import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';

import "./styles/reset";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </PersistGate>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
