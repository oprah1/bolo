import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css';
//import searchFilm from './Components/searchFilm.js';
import Film from './Components/Film.js';
import searchFilm from './Components/searchFilm'




class App extends Component {
  render() {
    return (
      <div className="App">
      <headerFooter />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={searchFilm} />
            <Route exact path="/Film" component={Film} />
          </Switch>  
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
