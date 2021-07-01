import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Gallery from './components/Gallery';
import CocktailDetail from './components/CocktailDetail'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/allcocktails" exact component={Gallery}/>
          <Route path="/cocktail/:id" component={CocktailDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
