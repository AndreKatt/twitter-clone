import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUserTweets } from "./asyncActions";
// types
import { LoadingState } from "../types";
import { UserTweetsState } from "./types";

const initialState: UserTweetsState = {
  items: [],
  status: LoadingState.NEVER,
};

export const userTweetsSlice = createSlice({
  name: "userTweets",
  initialState,
  reducers: {
    setUserTweets(state, action: PayloadAction<UserTweetsState["items"]>) {
      state.items = action.payload;
      state.status = LoadingState.LOADED;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserTweets.pending, (state) => {
        state.items = [];
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchUserTweets.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = LoadingState.SUCCESS;
      })
      .addCase(fetchUserTweets.rejected, (state) => {
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setUserTweets } = userTweetsSlice.actions;

export default userTweetsSlice.reducer;
