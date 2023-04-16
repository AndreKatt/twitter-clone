import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";
// types
import type { Tweet } from "../tweets/types";

export const fetchTweetData = createAsyncThunk<Tweet, string>(
  "tweet/fetchTweetData",
  async (id) => {
    const { data } = await axios.get<Tweet>("/api/tweets/byTweet/" + id);
    return data;
  }
);
