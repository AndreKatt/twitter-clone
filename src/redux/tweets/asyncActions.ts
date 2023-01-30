import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";
import { SendTweet, Tweet, TweetsState } from "./types";

export const fetchTweets = createAsyncThunk<TweetsState["items"]>(
  "tweets/fetchTweets",
  async () => {
    const { data } = await axios.get<TweetsState["items"]>(
      "/api/tweets/index?_sort=id&_order=desc"
    );
    return data;
  }
);

export const addTweet = createAsyncThunk<Tweet, SendTweet>(
  "tweets/addTweet",
  async (payload) => {
    const { data } = await axios.post<Tweet>("/api/tweets/addTweet", payload);
    return data;
  }
);
