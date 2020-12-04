import { IDrinkInfo } from '../components/molecules/DrinkInfo';
import { useReducer } from 'react';

export enum OrderListAction {
  Add,
  Remove,
}

export type OrderList = Record<string, { count: number; info: IDrinkInfo }>;

export type DrinkAction = (drink: IDrinkInfo) => void;

export const useOrderList = (
  initialState: OrderList = {},
): [OrderList, DrinkAction, DrinkAction] => {
  const reducer = (state: OrderList, action: { type: OrderListAction; payload: IDrinkInfo }) => {
    switch (action.type) {
      case OrderListAction.Add:
        return {
          ...state,
          [action.payload.idDrink]: {
            info: action.payload,
            count: (state[action.payload.idDrink]?.count ?? 0) + 1,
          },
        };
      case OrderListAction.Remove:
        const newState = {
          ...state,
          [action.payload.idDrink]: {
            info: action.payload,
            count: (state[action.payload.idDrink]?.count ?? 0) - 1,
          },
        };
        if (newState[action.payload.idDrink].count < 1) {
          delete newState[action.payload.idDrink];
        }
        return newState;
      default:
        throw new Error('Unknown action type');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState as never);
  const drinkAction = (actionType: OrderListAction) => (drink: IDrinkInfo) =>
    dispatch({ type: actionType, payload: drink });

  return [state, drinkAction(OrderListAction.Add), drinkAction(OrderListAction.Remove)];
};
