export interface ICartItem {
  id: number;
  choosenNumbers: string;
  gameType: string;
  gamePrice: number;
  gameColor: string;
}

export interface ICartState {
  items: ICartItem[];
  total: number;
}
