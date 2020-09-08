import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    //BEM Naming convention 
    <div className="app">
      <h1> Hello Whats App</h1>

      <div className = "app_body"> 
      {/* Sidebar */}
      <Sidebar />
      {/* Chat */}
      <Chat />
      </div>
    </div>
  );
}

export default App;
