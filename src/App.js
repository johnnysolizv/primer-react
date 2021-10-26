import React from 'react';
import './App.css';
import PersonCards from './components/PersonCards';





function App() {
  return (
    <div className="App">
      <PersonCards firstName="Johnny" lastName="Soliz" age={31} haircolor="Black" />
      <PersonCards firstName="Juan" lastName="Perez" age={20} haircolor="Yellow" />    
      <PersonCards firstName="Pedro" lastName="Perozo" age={35} haircolor="White" />
      <PersonCards firstName="Alberto" lastName="Tolon" age={45} haircolor="Grey" />
      
    </div>
  );
}

export default App;
