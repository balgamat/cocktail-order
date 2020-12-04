import { useEffect, useState } from 'react';
import { debounce, DebounceMode } from './debounce';

export const useIngredientSuggestion = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const getData = (text: string) =>
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${text}`)
      .then(res => res.json())
      .then(data => {
        setSuggestion(data?.ingredients ? data.ingredients[0] : '');
      });

  const debouncedFetch = debounce({ fn: getData, ms: 300, mode: DebounceMode.LeadingEdge });

  useEffect(() => {
    getData(text);
  }, [text]);

  return [text, setText, suggestion];
};
