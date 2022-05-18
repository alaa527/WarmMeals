import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// _____________ import "bootstrab & Fontawsome & jquery &popper.js" ____________
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min"
import "popper.js/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import '@fortawesome/fontawesome-free/css/all.min.css'
// _____________ import main css file _______________
import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


