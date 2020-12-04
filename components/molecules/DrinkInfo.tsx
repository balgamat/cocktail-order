import React, { FC } from 'react';
import drink from '../../styles/drink.module.css';
import { DrinkAction } from '../../util/useOrderList';

export interface IDrinkInfo {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export const DrinkInfo: (onClick: DrinkAction) => FC<IDrinkInfo> = onClick => (
  props,
  index: number,
) => (
  <li key={props.idDrink} className={drink.container} onClick={() => onClick(props)}>
    <h4 style={{ animationDelay: `${index * 0.07 + 0.7}s` }}>{props.strDrink}</h4>
  </li>
);
