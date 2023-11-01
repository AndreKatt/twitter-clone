import { createAsyncThunk } from "@reduxjs/toolkit";
// local libs
import { axios } from "../../core/axios";
// types
import type { SendTweet, TweetsState } from "./types";
import type { PublicationType } from "../../types";

export const fetchTweets = createAsyncThunk<TweetsState["items"]>(
  "tweets/fetchTweets",
  async () => {
    const { data } = await axios.get<TweetsState["items"]>(
      "/api/tweets/index?_sort=id&_order=desc"
    );
    return data;
  }
);

export const addTweet = createAsyncThunk<PublicationType, SendTweet>(
  "tweets/addTweet",
  async (payload) => {
    const { data } = await axios.post<PublicationType>(
      "/api/tweets/addTweet",
      payload
    );
    return data;
  }
);

export const deleteTweet = createAsyncThunk<TweetsState["items"], string>(
  "tweets/delete",
  async (id) => {
    await axios.delete<PublicationType>("/api/tweets/" + id);
    const { data } = await axios.get<TweetsState["items"]>(
      "/api/tweets/index?_sort=id&_order=desc"
    );
    return data;
  }
);

//доделать
export const updateTweet = createAsyncThunk("tweet/update", async (id) => {
  const { data } = await axios.patch("/api/tweets/update/" + id);
});
