import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'material-icons/iconfont/material-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
)
