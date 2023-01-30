import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import topics from "./topics/slice";
import tweets from "./tweets/slice";
import tweet from "./tweet/slice";
import user from "./user/slice";

export const store = configureStore({
  reducer: { topics, tweet, tweets, user },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
