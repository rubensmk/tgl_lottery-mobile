
export interface GameProps {
    gameId: number;
    type: string;
    description: string;
    range: number;
    price: number;
    maxNumber: number;
    color: string;
    minCartValue: number;
}

export interface IFetchGame {
    id: number;
    type: string;
    description: string;
    range: number;
    price: number;
    'max-number': number;
    color: string;
    'min-cart-value': number;
}

export interface NumberProps {
    value: number;
}

export interface CompletedGameProps {
    id: string;
    choosenNumber: string;
    gameType: string;
    gamePrice: number;
    gameColor: string;
    user_id: number;
    game_id: number;
    created_at: string;
    updated_at: string;
}