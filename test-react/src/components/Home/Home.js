import React from 'react';
//import '.src/App.css'
import frog from './utils/froge.png'

export default function Home (){
    return(
    <div className="App">
      <header className="App-header">
        <img src={frog} className="App-logo" alt="logo" />
        <p>
          Rinzler
        </p>
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
    )
}