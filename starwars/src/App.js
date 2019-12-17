import React from 'react';
import './App.css';
import PeopleGrid from "./components/PeopleGrid";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleGrid width="50%"/>
    </div>
  );
}

export default App;