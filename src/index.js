import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Image from './Images';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(<Image />,document.getElementById('container'));