import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";
import { UserTweetsState } from "./types";
// types

export const fetchUserTweets = createAsyncThunk<
  UserTweetsState["items"],
  string
>("userTweets/fetchUserTweets", async (email) => {
  const { data } = await axios.get<UserTweetsState["items"]>(
    `/api/tweets/byEmail/${email}`
  );
  return data;
});
