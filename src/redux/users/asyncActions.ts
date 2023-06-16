import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";
import { AllUsersState } from "./types";

export const fetchUsers = createAsyncThunk<AllUsersState["items"]>(
  "users/fetchUsers",
  async () => {
    const { data } = await axios.get<AllUsersState["items"]>("/api/user/index");
    return data;
  }
);
