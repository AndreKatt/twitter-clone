import type { SelectedUserData } from "../../types";

export type ProfileAvatarProps = {
  isCurrentUser: boolean | undefined;
  user: SelectedUserData;
};
