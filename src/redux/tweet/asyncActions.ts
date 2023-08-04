import { createAsyncThunk } from "@reduxjs/toolkit";
// local libs
import { axios } from "../../core/axios";
// types
import type { Tweet } from "../types";

export const fetchTweetData = createAsyncThunk<Tweet, string>(
  "tweet/fetchTweetData",
  async (id) => {
    const { data } = await axios.get<Tweet>("/api/tweets/byTweet/" + id);
    return data;
  }
);

export const addLike = createAsyncThunk<Tweet, string>(
  "tweet/addLike",
  async (id) => {
    const { data } = await axios.patch("/api/tweets/like/" + id);
    return data;
  }
);

export const removeLike = createAsyncThunk<Tweet, string>(
  "tweet/removeLike",
  async (id) => {
    const { data } = await axios.patch("/api/tweets/unlike/" + id);
    return data;
  }
);
