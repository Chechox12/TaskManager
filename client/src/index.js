import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:4000'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
