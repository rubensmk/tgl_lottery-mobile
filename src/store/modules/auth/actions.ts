import { IToken, IUser } from "./types";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
interface ResponseProps {
  token: IToken;
  user: IUser;
}

export function logIn(response: ResponseProps) {
  return {
    type: "LOGIN_USER",
    payload: {
      response,
    },
  };
}

export function logOut() {
  return {
    type: "LOGOUT_USER",
    payload: {},
  };
}
