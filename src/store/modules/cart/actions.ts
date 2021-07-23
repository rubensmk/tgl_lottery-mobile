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

export function removeFromCart(index: number) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            index,
        },
    };
}

export function clearCart() {
    return {
        type: 'CLEAR_CART',
        payload: {},
    };
}