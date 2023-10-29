import { axios } from "../core/axios";
// types
import type { GetAvatarUrl, SelectedUserData } from "../types";

export const getAvatarUrl: GetAvatarUrl = async (email) => {
  const { data } = await axios.get<SelectedUserData>(
    "/api/user/byUser/" + email
  );
  return data.avatarUrl;
};
