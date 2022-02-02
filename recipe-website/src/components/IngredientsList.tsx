import React from 'react';
import { IngredientListElement } from '../types';

type Props = {
  elements: IngredientListElement[]
}

function IngredientsList(props: Props) {
  const ingredients = []

  for (let ingredient of props.elements) {
    ingredients.push(
      <li key={ingredient.name}>
        {[ingredient.name + ", "  + ingredient.amount, ingredient.unit]}
      </li>
    );
  }
  return (
    <ul>
      {ingredients}
    </ul>
  )
}

export default IngredientsList;
