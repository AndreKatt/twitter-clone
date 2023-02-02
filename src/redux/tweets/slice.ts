import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../types";
import { addTweet, deleteTweet, fetchTweets } from "./asyncActions";
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
    setAddFormState(state, action: PayloadAction<AddFormState>) {
      state.addFormState = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.pending, (state) => {
        state.items = [];
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = LoadingState.LOADED;
      })
      .addCase(fetchTweets.rejected, (state) => {
        state.status = LoadingState.ERROR;
      })
      .addCase(addTweet.pending, (state) => {
        state.addFormState = AddFormState.LOADING;
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        state.items.splice(0, 0, action.payload);
        state.addFormState = AddFormState.NEVER;
      })
      .addCase(addTweet.rejected, (state) => {
        state.addFormState = AddFormState.ERROR;
      })
      .addCase(deleteTweet.pending, (state) => {
        state.status = LoadingState.NEVER;
      })
      .addCase(deleteTweet.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = LoadingState.LOADED;
      })
      .addCase(deleteTweet.rejected, (state) => {
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setTweets, setAddFormState } = tweetsSlice.actions;

export default tweetsSlice.reducer;
