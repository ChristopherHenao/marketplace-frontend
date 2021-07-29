import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ItemList from './components/ItemList';
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage';
import SignUpForm from './components/SignUpPage';
import AddItem from './components/AddItem'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <NavBar/>

      <Switch>

        <PrivateRoute exact path="/add-produce" component={AddItem}/>
        
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/register">
          <SignUpForm />
        </Route>

        <Route exact path="/">
          <ItemList />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
