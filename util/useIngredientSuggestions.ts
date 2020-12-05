import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { IDrinkInfo } from '../components/molecules/DrinkInfo';

export interface IIngredient {
  strIngredient: string;
}

export const useIngredientSuggestion = (): [string, (t: string) => void, IIngredient | null] => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState<IIngredient | null>(null);
  const debouncedText = useDebounce(text, 300);

  const getData = (text: string) =>
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${text}`)
      .then(res => res.json())
      .then(data => {
        setSuggestion(data?.ingredients ? data.ingredients[0] : '');
      });

  useEffect(() => {
    getData(debouncedText);
  }, [debouncedText]);

  return [text, setText, suggestion];
};
