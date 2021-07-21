/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ICartItem } from './types';

export function addItemsToReduxCart(item: ICartItem) {
    return {
        type: 'ADD_ITEMS_TO_REDUX_CART',
        payload: {
            item,
        },
    };
}