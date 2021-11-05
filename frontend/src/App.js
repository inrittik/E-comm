import './App.css'
import NavBarOffCanvas from './components/NavBarOffCanvas';
import Home from './components/Home'
import Login from './components/Login'
import CartPage from './components/CartPage';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <div>
        <Switch>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/CartPage">
            <NavBarOffCanvas/>
            <CartPage />
          </Route>
          <Route path="/">
            <NavBarOffCanvas/>
            <Home />
          </Route>
          
        </Switch>          
    </div>
    </Router>
    </>
  );
}

export default App;
