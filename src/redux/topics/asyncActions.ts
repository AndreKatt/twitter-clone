import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TopicsState } from "./types";

export const fetchTopics = createAsyncThunk<TopicsState["items"]>(
  "topics/fetchTopics",
  async () => {
    const { data } = await axios.get<TopicsState["items"]>("/themes");
    return data;
  }
);
