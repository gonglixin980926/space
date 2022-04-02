import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import React from 'react';
import 'antd/dist/antd.min.css';
import './index.css';
import { HashRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null);
