import './App.css';
import React from 'react'
import ItemList from './components/ItemList';
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage';
import SignUpForm from './components/SignUpPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList />
      <LoginPage />
      <SignUpForm />
    </div>
  );
}

export default App;
