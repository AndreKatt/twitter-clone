import { createAsyncThunk } from "@reduxjs/toolkit";
// local libs
import { axios } from "../../core/axios";
// types
import type { TweetType } from "../../types";

export const fetchTweetData = createAsyncThunk<TweetType, string>(
  "tweet/fetchTweetData",
  async (id) => {
    const { data } = await axios.get<TweetType>("/api/tweets/byTweet/" + id);
    return data;
  }
);

export const addLike = createAsyncThunk<TweetType, string>(
  "tweet/addLike",
  async (id) => {
    const { data } = await axios.patch("/api/tweets/like/" + id);
    return data;
  }
);

export const removeLike = createAsyncThunk<TweetType, string>(
  "tweet/removeLike",
  async (id) => {
    const { data } = await axios.patch("/api/tweets/unlike/" + id);
    return data;
  }
);
