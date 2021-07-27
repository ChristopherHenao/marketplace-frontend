import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ItemList from './components/ItemList';
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage';
import SignUpForm from './components/SignUpPage';
import AddItem from './components/AddItem'


function App() {
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route exact path="/">
          <ItemList />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <SignUpForm />
        </Route>
        <Route exact path="/add-produce">
          <AddItem/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
