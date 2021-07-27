import './App.css';
import React from 'react'
import ItemList from './components/ItemList';
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList />
      <LoginPage />
    </div>
  );
}

export default App;
