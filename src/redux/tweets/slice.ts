import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../types";
import { addTweet, fetchTweets } from "./asyncActions";
import { AddFormState, TweetsState } from "./types";

const initialState: TweetsState = {
  items: [],
  status: LoadingState.NEVER,
  addFormState: AddFormState.NEVER,
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setTweets(state, action: PayloadAction<TweetsState["items"]>) {
      state.items = action.payload;
      state.status = LoadingState.LOADED;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTweets.pending, (state) => {
      state.items = [];
      state.status = LoadingState.LOADING;
    });
    builder.addCase(fetchTweets.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = LoadingState.LOADED;
    });
    builder.addCase(fetchTweets.rejected, (state) => {
      state.status = LoadingState.ERROR;
    });

    builder.addCase(addTweet.pending, (state) => {
      state.addFormState = AddFormState.LOADING;
    });
    builder.addCase(addTweet.fulfilled, (state, action) => {
      state.items.splice(0, 0, action.payload);
      state.addFormState = AddFormState.NEVER;
    });
    builder.addCase(addTweet.rejected, (state) => {
      state.addFormState = AddFormState.ERROR;
    });
  },
});

export const { setTweets } = tweetsSlice.actions;

export default tweetsSlice.reducer;
