import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../types";
import { fetchTopics } from "./asyncActions";
import { TopicsState } from "./types";

const initialState: TopicsState = {
  items: [],
  status: LoadingState.NEVER,
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    setTopics(state, action: PayloadAction<TopicsState["items"]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopics.pending, (state) => {
      state.status = LoadingState.LOADING;
    });

    builder.addCase(fetchTopics.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = LoadingState.LOADED;
    });

    builder.addCase(fetchTopics.rejected, (state) => {
      state.status = LoadingState.ERROR;
    });
  },
});

export const { setTopics } = topicsSlice.actions;

export default topicsSlice.reducer;
