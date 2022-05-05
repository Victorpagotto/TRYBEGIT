import React from 'react';
import ReactDOM from 'react-dom';
import TrysToType from './trysToType';
import App from './App';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour24: true })}.</h2>
      <App />
      <TrysToType />
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);