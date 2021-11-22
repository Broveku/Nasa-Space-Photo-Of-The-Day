import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
export const BASE_URL = 'https://api.nasa.gov'
export const API_KEY = 'K7V1z6TpBgTMcJh8ezoGfFuFhVtxUT3zxCAeMAqz'


ReactDOM.render(
<Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
