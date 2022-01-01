import React, { components }  from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';
function App() {
  return (
    <div className="App">
        <h7>Dating App MERN </h7>
        <Header />
        < DatingCards />
        < SwipeButtons />

    </div>
  );
}

export default App;
