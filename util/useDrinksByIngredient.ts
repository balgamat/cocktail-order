import { useEffect, useState } from 'react';
import { IDrinkInfo } from '../components/molecules/DrinkInfo';

export const useDrinksByIngredient = (ingredient: string): IDrinkInfo[] => {
  const [drinks, setDrinks] = useState<IDrinkInfo[]>([]);

  const getData = (text: string) =>
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${text.replace(' ', '_')}`)
      .then(res => res.json())
      .then(data => {
        setDrinks(data?.drinks ? data.drinks : []);
      });

  useEffect(() => {
    getData(ingredient);
  }, [ingredient]);

  return drinks;
};
