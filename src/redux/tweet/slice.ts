import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// local libs
import { LoadingState } from "../types";
import { addLike, fetchTweetData } from "./asyncActions";
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
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = LoadingState.SUCCESS;
      })
      .addCase(addLike.rejected, (state) => {
        state.data = undefined;
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setTweetData } = tweetSlice.actions;

export default tweetSlice.reducer;
