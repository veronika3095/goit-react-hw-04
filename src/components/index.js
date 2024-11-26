/* eslint-disable react/no-deprecated */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Toaster } from 'react-hot-toast';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root')
);