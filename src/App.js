import React from 'react';
import logo from './logo.svg';
import './App.css';
import firbase from './firebase.js'
import Homepage from './components/Homepage';
import Movie from './components/Movie';
import { Switch,Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/:id' component={Movie} />
      </Switch>
    </div>
  );
}

export default App;
