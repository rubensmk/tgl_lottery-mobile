export interface IUser {
    id: string;
    username: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface IToken {
    token: string;
}
export interface AuthState {
    token: IToken;
    user: IUser;
    loggedIn: boolean;
}