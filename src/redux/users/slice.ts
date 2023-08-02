import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// local libs
import { LoadingState } from "../types";
import { fetchUsers } from "./asyncActions";
// types
import type { AllUsersState } from "./types";

const initialState: AllUsersState = {
  items: [],
  status: LoadingState.NEVER,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<AllUsersState["items"]>) {
      state.items = action.payload;
      state.status = LoadingState.LOADED;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.items = [];
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = LoadingState.LOADED;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
