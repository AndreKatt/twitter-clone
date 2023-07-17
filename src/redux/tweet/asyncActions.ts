import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";
// types
import { Tweet } from "../types";

export const fetchTweetData = createAsyncThunk<Tweet, string>(
  "tweet/fetchTweetData",
  async (id) => {
    const { data } = await axios.get<Tweet>("/api/tweets/byTweet/" + id);
    return data;
  }
);
