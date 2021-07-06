import React, {useState, useEffect} from "react";
import './CocktailDetail.css';

function CocktailDetail({match}) {
  useEffect(() => {
    let abortController = new AbortController();
    let isAborted = abortController.signal.aborted;
      const fetchCocktail = async () => {
        const fetchedCocktail = await fetch(`/api/cocktails/${match.params.id}`);
        const cocktail = await fetchedCocktail.json();
        isAborted = abortController.signal.aborted;
        if(!isAborted){
          setCocktail(cocktail);
          setIngredients(cocktail.ingredients);
        }
        return;
      }
      fetchCocktail();
      return () => {
        abortController.abort();
      };
      // setTimeout(() => {}, 300)
  }, [match.params.id]);

  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);

  return (
    <div>
      <div className="cocktail-image"
      style={{backgroundImage:`url(${cocktail.imageUrl})`}}
      ></div>
      <div className="cocktail-details container">
        <h1 className="cocktail-details-title">{cocktail.name}</h1>
        <div className="cocktail-details-text">
        <section className="ingredients">
        <h2 className="cocktail-subtitle">Ingredients: </h2>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredients-details">
              <h3 className="ingredients-name">{ingredient.name}</h3>
              <p className="ingredients-quantity">{ingredient.quantity}</p>
            </div>
          ))}
        </section>
        <section className="instructions">
          <h2 className="cocktail-subtitle">Instructions: </h2>
          <p className="cocktail-instructions-details">{cocktail.recipe}</p>
        </section>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetail;
