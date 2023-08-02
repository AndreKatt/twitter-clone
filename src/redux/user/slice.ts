import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../types";
import { fetchUserData } from "./asyncActions";
// types
import type { SelectedUserState } from "./types";

const initialState: SelectedUserState = {
  data: undefined,
  status: LoadingState.NEVER,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<SelectedUserState["data"]>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = LoadingState.SUCCESS;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.data = undefined;
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
