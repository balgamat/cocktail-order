import React, { FC } from 'react';
import orderItem from '../../styles/order-item.module.css';
import { DrinkAction } from '../../util/useOrderList';
import { IDrinkInfo } from './DrinkInfo';

export type IOrderItem = [
  id: string,
  props: {
    count: number;
    info: IDrinkInfo;
  },
];

export const OrderItem: (onClick: DrinkAction) => FC<IOrderItem> = onClick => ([, props]) => (
  <li
    key={`order-item-${props.info.idDrink}`}
    className={orderItem.container}
    onClick={() => onClick(props.info)}
  >
    <h4>
      <span>{props.count}</span>
      {props.info.strDrink}
    </h4>
  </li>
);
