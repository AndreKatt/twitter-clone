import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// types
import type { TopicsState } from "./types";

export const fetchTopics = createAsyncThunk<TopicsState["items"]>(
  "topics/fetchTopics",
  async () => {
    const { data } = await axios.get<TopicsState["items"]>("/themes");
    return data;
  }
);
