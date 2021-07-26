/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { Reducer } from "redux";
import producer from "immer";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  total: 0,
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const { item } = action.payload;
        draft.items.push(item);
        draft.total = draft.items.reduce(
          (prevValue, elem) => prevValue + elem.gamePrice,
          0
        );
        break;
      }
      case "REMOVE_FROM_CART": {
        const { index } = action.payload;
        draft.items.splice(index, 1);
        draft.total = draft.items.reduce(
          (prevValue, elem) => prevValue + elem.gamePrice,
          0
        );
        break;
      }
      case "CLEAR_CART": {
        draft.items = [];
        draft.total = 0;
        break;
      }
      default: {
        return state;
      }
    }
  });
};

export default cart;
