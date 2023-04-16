import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../types";
import { fetchTweetData } from "./asyncActions";
// types
import type { TweetState } from "./types";

const initialState: TweetState = {
  data: undefined,
  status: LoadingState.NEVER,
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    setTweetData(state, action: PayloadAction<TweetState["data"]>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweetData.pending, (state) => {
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchTweetData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = LoadingState.SUCCESS;
      })
      .addCase(fetchTweetData.rejected, (state) => {
        state.data = undefined;
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setTweetData } = tweetSlice.actions;

export default tweetSlice.reducer;
