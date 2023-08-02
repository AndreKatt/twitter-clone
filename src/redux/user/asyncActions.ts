import { createAsyncThunk } from "@reduxjs/toolkit";
// local libs
import { axios } from "../../core/axios";
// types
import type { SelectedUserData } from "../types";

export const fetchUserData = createAsyncThunk<SelectedUserData, string>(
  "user/fetchUserData",
  async (email) => {
    const { data } = await axios.get<SelectedUserData>(
      "/api/user/byUser/" + email
    );
    return data;
  }
);
