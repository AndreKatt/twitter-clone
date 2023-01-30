import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { LoginFormProps } from "../../pages/SignIn/components/SignedForm";
import { SignInUserState } from "./types";

export const signIn = createAsyncThunk<SignInUserState, LoginFormProps>(
  "user/signIn",
  async (postData) => {
    const { data } = await axios.post<SignInUserState>(
      "/api/user/login",
      postData
    );
    return data;
  }
);
