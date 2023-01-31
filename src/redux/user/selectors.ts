import { RootState } from "../store";
import { SignInUserState } from "./types";

export const selectUserState = (state: RootState): SignInUserState =>
  state.user;

export const selectIsAuth = (state: RootState): boolean =>
  !!selectUserState(state).user;
