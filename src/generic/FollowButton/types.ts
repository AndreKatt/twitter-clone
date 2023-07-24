import { TFunction } from "i18next";
import { SelectedUserData } from "../../redux/types";

export type FollowButtonProps = {
  width?: number | string;
  height: number | string;
  userId?: SelectedUserData["_id"];
  userEmail?: SelectedUserData["email"];
  following?: string[];
  update?: boolean;
  setUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
  t?: TFunction<"translation", undefined>;
};
