import React from 'react';
import './App.css';
import Count from './Components/Count';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
      </header>
      <div>
        <Count />
      </div>
    </div>
  );
};