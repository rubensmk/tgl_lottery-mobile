import { Reducer } from 'redux';
import producer from 'immer';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
    items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
    return producer(state, draft => {
        switch (action.type) {
            case 'ADD_TO_CART': {
                const { item } = action.payload;

                draft.items.push(item)

                break;
            }
            case 'REMOVE_FROM_CART': {
                const { id } = action.payload;
                draft.items.filter((item) => item.id !== id)
                break;
            }
            default: {
                return state;
            }
        }
    })

};

export default cart;