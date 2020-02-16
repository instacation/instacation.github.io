import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website <code>in production</code> please call back soon.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/instacation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back To Instagram
        </a>
      </header>
    </div>
  );
}



export default App;
