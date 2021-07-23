/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ICartItem } from './types';

export function addToCart(item: ICartItem) {
    return {
        type: 'ADD_TO_CART',
        payload: {
            item,
        },
    };
}

export function removeFromCart(id: number) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            id,
        },
    };
}