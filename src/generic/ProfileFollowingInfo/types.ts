import type { UserData } from "../../redux/types";

export type ProfileFollowingProps = {
  type: "following" | "followers";
  userData: UserData;
};
