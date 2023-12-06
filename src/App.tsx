import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div class="container">

            <h1>How to Install Bootstrap in React App - ItSolutionStuff.com</h1>



            <button class="btn btn-success">Success Button!</button>

            <button class="btn btn-primary">Primary Button!</button>

            <button class="btn btn-danger">Danger Button!</button>



            <div class="alert alert-success">

              <p>This is success alert.</p>

            </div>

            <div class="alert alert-primary">

              <p>This is primary alert.</p>

            </div>

            <div class="alert alert-danger">

              <p>This is danger alert.</p>

            </div>

          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
