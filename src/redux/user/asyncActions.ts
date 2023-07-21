import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";
import { SelectedUserData } from "../types";

export const fetchUserData = createAsyncThunk<SelectedUserData, string>(
  "user/fetchUserData",
  async (email) => {
    const { data } = await axios.get<SelectedUserData>(
      "/api/user/byUser/" + email
    );
    return data;
  }
);
