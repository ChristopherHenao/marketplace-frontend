import './App.css';
import React from 'react'
import ItemList from './components/ItemList';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList />
    </div>
  );
}

export default App;
