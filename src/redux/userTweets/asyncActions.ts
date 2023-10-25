import { createAsyncThunk } from "@reduxjs/toolkit";
// local libs
import { axios } from "../../core/axios";
// types
import type { UserTweetsState } from "./types";

export const fetchUserTweets = createAsyncThunk<
  UserTweetsState["items"],
  string
>("userTweets/fetchUserTweets", async (email) => {
  const { data } = await axios.get<UserTweetsState["items"]>(
    `/api/tweets/byEmail/${email}?_sort=id&_order=desc`
  );
  return data;
});
