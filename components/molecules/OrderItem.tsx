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

export const OrderItem: (onClick?: DrinkAction | null) => FC<IOrderItem> = onClick => ([
  ,
  props,
]) => (
  <li
    key={`order-item-${props.info.idDrink}`}
    className={orderItem.container}
    onClick={onClick ? () => onClick(props.info) : undefined}
  >
    <h4 className={!!onClick ? undefined : orderItem.H4}>
      <span>{props.count}</span>
      {props.info.strDrink}
    </h4>
  </li>
);
