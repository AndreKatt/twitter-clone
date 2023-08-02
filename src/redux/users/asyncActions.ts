import { createAsyncThunk } from "@reduxjs/toolkit";
// local libs
import { axios } from "../../core/axios";
// types
import type { AllUsersState } from "./types";

export const fetchUsers = createAsyncThunk<AllUsersState["items"]>(
  "users/fetchUsers",
  async () => {
    const { data } = await axios.get<AllUsersState["items"]>("/api/user/index");
    return data;
  }
);
