import React from "react";

const IngredientList = ({ ingredients, removeIngredient }) => {
  return (
    <ul>
      {ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient} <button onClick={() => removeIngredient(ingredient)}>x</button></li>
      ))}
    </ul>
  );
};

export default IngredientList;
