import React from "react";

const Recipe = ({ ingredients, showRecipe }) => {
  const verbs = [
    "bake",
    "fry",
    "boil",
    "flambe",
    "roast",
    "debone",
    "ferment",
    "caramelise",
    "hard boil",
    "reduce",
    "smoke",
    "sweat",
    "whisk",
    "puree",
    "incinerate"
  ];
  return (
    <div>
      {showRecipe && (
        <>
        <h2>Recipe</h2>
        <ol>
          {ingredients.map(ingredient => (
            <li>
              {verbs[Math.round(Math.random() * (verbs.length - 1))]} the{" "}
              {ingredient}
            </li>
          ))}
            <li>mix it all together</li>
        </ol>
        <p>Bon Apetit!</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
