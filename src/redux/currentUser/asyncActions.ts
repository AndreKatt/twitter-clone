import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../core/axios";
// types
import type { RegisterFormProps } from "../../pages/SignIn/components/RegisterForm/types";
import type { LoginFormProps } from "../../types";
import { CurrentUserData, type CurrentUserState } from "./types";
import { SelectedUserData, UserData } from "../types";

export const signIn = createAsyncThunk<CurrentUserState, LoginFormProps>(
  "currentUser/signIn",
  async (postData) => {
    const { data } = await axios.post<CurrentUserState>(
      "/api/user/login",
      postData
    );
    if (data.token) {
      window.localStorage.setItem("token", data.token?.access_token);
    }
    return data;
  }
);

export const signUp = createAsyncThunk<UserData, RegisterFormProps>(
  "currentUser/signUp",
  async (postData) => {
    const { data } = await axios.post<UserData>("api/user/register", postData);
    return data;
  }
);

export const getCurrentUserByToken = createAsyncThunk(
  "currentUser/getCurrent",
  async () => {
    const { data } = await axios.get<CurrentUserData>("/api/user/me");
    window.localStorage.setItem("email", data.email);
    window.localStorage.setItem("username", data.username);
    window.localStorage.setItem("fullname", data.fullname);

    const userData = await axios.get<SelectedUserData>(
      "/api/user/byUser/" + data.email
    );

    const user = {
      currentUser: { ...data },
      user: { ...userData.data },
    };

    return user;
  }
);

export const subscribe = createAsyncThunk<SelectedUserData, string>(
  "currentUser/subscribe",
  async (id) => {
    const { data } = await axios.patch<SelectedUserData>(
      `/api/user/follow/${id}`
    );
    return data;
  }
);

export const unsubscribe = createAsyncThunk<SelectedUserData, string>(
  "currentUser/unsubscribe",
  async (id) => {
    const { data } = await axios.patch<SelectedUserData>(
      `/api/user/unfollow/${id}`
    );
    return data;
  }
);
