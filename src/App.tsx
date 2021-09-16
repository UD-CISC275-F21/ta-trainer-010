import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/welcome';
import {Person} from "./interfaces/person";

function App(): JSX.Element {
  const babbage: Person = {name: "Babbage Bart", shirtColor: "Green"};
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome person={babbage}></Welcome>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
