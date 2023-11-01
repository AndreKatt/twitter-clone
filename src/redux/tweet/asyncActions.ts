import { createAsyncThunk } from "@reduxjs/toolkit";
// local libs
import { axios } from "../../core/axios";
// types
import type { PublicationType } from "../../types";

export const fetchTweetData = createAsyncThunk<PublicationType, string>(
  "tweet/fetchTweetData",
  async (id) => {
    const { data } = await axios.get<PublicationType>(
      "/api/tweets/byTweet/" + id
    );
    return data;
  }
);

export const addLike = createAsyncThunk<PublicationType, string>(
  "tweet/addLike",
  async (id) => {
    const { data } = await axios.patch("/api/tweets/like/" + id);
    return data;
  }
);

export const removeLike = createAsyncThunk<PublicationType, string>(
  "tweet/removeLike",
  async (id) => {
    const { data } = await axios.patch("/api/tweets/unlike/" + id);
    return data;
  }
);
