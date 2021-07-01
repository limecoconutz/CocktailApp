import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

function Gallery() {
  useEffect(()=>{
    fetchCocktails();
  }, []);

  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    const data = await fetch('api/cocktails');
    const allCocktails = await data.json();
    const cocktailsArr = allCocktails.cocktails;
    setCocktails(cocktailsArr);
  }
  return(
    <div className="Gallery">
      <div className="cards">
      {cocktails.map(cocktail => (
        <section key={cocktail.id} >
          <Link to={`cocktail/${cocktail.id}`}>
          <div className="card-cocktail-details"
                style={{backgroundImage: 
                `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                url(${cocktail.imageUrl})`}}>
              <h2>{cocktail.name}</h2>
          </div>
          </Link>
          </section>
      ))}
      </div>
    </div>
  )
}

export default Gallery;