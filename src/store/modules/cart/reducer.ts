import { Reducer } from 'redux';

import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
    items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEMS_TO_REDUX_CART': {
            const { item } = action.payload;
            return {
                ...state,
                items: [...state.items, item],
            };
        }
        default: {
            return state;
        }
    }
};

export default cart;