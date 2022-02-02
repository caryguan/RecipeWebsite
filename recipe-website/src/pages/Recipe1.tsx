import * as React from 'react';
import IngredientsList from '../components/IngredientsList';
import { IngredientListElement } from '../types';

export interface IAppProps {
}

export default function Recipe1 (props: IAppProps) {
  const ingredients: IngredientListElement[] = [
    {name: "Chicken", amount: 10, unit: "grams"},
    {name: "Veges", amount: 20, unit: "litres"}
  ]
  return (
    <div>
      <h1>
        Recipe 1 new
      </h1>
      <IngredientsList elements={ingredients}/>
    </div>
  );
}
