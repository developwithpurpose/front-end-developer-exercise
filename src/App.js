import React from 'react';
import BabyStep1 from './components/BabyStep1';
import BabyStep2 from './components/BabyStep2';
import BabyStep3 from './components/BabyStep3';
import BabyStep4 from './components/BabyStep4';
import BabyStep5 from './components/BabyStep5';
import BabyStep6 from './components/BabyStep6';
import BabyStep7 from './components/BabyStep7';
import logo from './assets/images/header.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo-image" alt="logo" />
        <p>
          Ramsey Solutions Rocks!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dave Ramsey's Baby Steps
        </a>
        <BabyStep1 />
        <BabyStep2 />
        <BabyStep3 />
        <BabyStep4 />
        <BabyStep5 />
        <BabyStep6 />
        <BabyStep7 />
      </header>
    </div>
  );
}

export default App;
