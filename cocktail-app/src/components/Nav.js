import React from "react";
import {NavLink} from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className='nav'>
      <h3 className="logo"><i className="fas fa-cocktail"></i></h3>
      <ul className="nav-links"> 
      <NavLink to='/' exact className="nav-link">
          <li>Home</li>
        </NavLink>
        <NavLink to='/allcocktails' className="nav-link">
          <li>All Cocktails</li>
        </NavLink>
        <NavLink to='/about' className="nav-link">
          <li>About</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
