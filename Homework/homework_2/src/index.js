import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  // provider then sends data to app with props??
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

//npm install --save redux
//I have to change the name of this project
//because it has 'redux' as a name it's in conflict with the library