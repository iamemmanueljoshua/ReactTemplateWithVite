import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
