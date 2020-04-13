import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fiche from './components/Contact.js';
import UsersList from './components/ContactList.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Fiche name='Judith Pierce' avatar="https://randomuser.me/api/portraits/women/42.jpg" online = 'online'  />
        <Fiche name='Dan Hoffman' avatar="https://randomuser.me/api/portraits/men/87.jpg" online = 'offline' />
        <Fiche name='Victor Lowe' avatar="https://randomuser.me/api/portraits/men/50.jpg" online = 'online' />
        <UsersList/>
      </header>
      
    </div>
  );
}

export default App;
