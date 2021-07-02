import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {TransitionGroup, Transition} from 'react-transition-group';
import {gsap, Power1} from 'gsap';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Gallery from './components/Gallery';
import CocktailDetail from './components/CocktailDetail'
import './App.css';

function App() {
  const fetchCocktails = async () => {
  const data = await fetch('api/cocktails');
  const allCocktails = await data.json();
  return allCocktails.cocktails;
  }

  return (
    <Router>
    <div className="App">
    <Nav />
    <TransitionGroup component={null}>
      <Transition>
          <Switch>
            <Route path="/" exact component={() => <Home/>}/>
            <Route path="/about" exact component={About}/>
            <Route path="/allcocktails" exact component={() => <Gallery fetchCocktails={fetchCocktails}/>}/>
            <Route path="/cocktail/:id" component={CocktailDetail} />
          </Switch>
        </Transition>
      </TransitionGroup>
    </div>
  </Router> 
  );
}

export default App;


{/* <CSSTransition classNames="fade" timeout={300}>
<Switch>
  <Route path="/" exact component={() => <Home/>}/>
  <Route path="/about" exact component={About}/>
  <Route path="/allcocktails" exact component={() => <Gallery fetchCocktails={fetchCocktails}/>}/>
  <Route path="/cocktail/:id" component={CocktailDetail} />
</Switch>
</CSSTransition>
</TransitionGroup>
</div>
</Router> */}