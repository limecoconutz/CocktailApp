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
    <div className="cocktail">
      <div className="cocktail-image"
      style={{backgroundImage:`url(${cocktail.imageUrl})`}}
      ></div>
      <div className="cocktail-details">
        <h1>{cocktail.name}</h1>
        <h2>Ingredients: </h2>
        <section className="ingredients">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredients-details">
              <h3 className="ingredients-name">{ingredient.name}:</h3>
              <p className="ingredients-quantity">{ingredient.quantity}</p>
            </div>
          ))}
        </section>
        <h2 className="cocktail-instructions">Instructions: </h2>
        <p className="cocktail-instructions-details">{cocktail.recipe}</p>
      </div>
    </div>
  );
}

export default CocktailDetail;
