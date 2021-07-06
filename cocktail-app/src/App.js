import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {TransitionGroup} from 'react-transition-group';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Gallery from './components/Gallery';
import CocktailDetail from './components/CocktailDetail'
import './App.css';

function App() {
  // const fetchCocktails = async () => {
  // const data = await fetch('api/cocktails');
  // const allCocktails = await data.json();
  // return allCocktails.cocktails;
  // }

  return (
    <Router>
    <div className="App">
    <Nav />
    <TransitionGroup component={null}>
          <Switch>
            <Route path="/" exact component={() => <Home/>}/>
            <Route path="/about" exact component={About}/>
            <Route path="/allcocktails" exact component={() => <Gallery/>}/>
            <Route path="/cocktail/:id" component={CocktailDetail} />
          </Switch>
      </TransitionGroup>
    </div>
  </Router> 
  );
}

export default App;
