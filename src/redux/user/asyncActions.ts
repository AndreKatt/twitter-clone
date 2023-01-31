import { createAsyncThunk } from "@reduxjs/toolkit";

import { axios } from "../../core/axios";
import { LoginFormProps } from "../../pages/SignIn/components/SignedForm";
import { SignInUserState } from "./types";

export const signIn = createAsyncThunk<SignInUserState, LoginFormProps>(
  "user/signIn",
  async (postData) => {
    const { data } = await axios.post<SignInUserState>(
      "/api/user/login",
      postData
    );
    if (data.token) {
      window.localStorage.setItem("token", data.token?.access_token);
    }
    return data;
  }
);

export const getCurrentUserByToken = createAsyncThunk(
  "user/getCurrent",
  async () => {
    const { data } = await axios.get("/api/user/me");
    window.localStorage.setItem("email", data.email);
    window.localStorage.setItem("username", data.username);
    window.localStorage.setItem("fullname", data.fullname);
    return data;
  }
);
