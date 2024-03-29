import React, { useEffect, useState } from "react";
import { ButtonProps } from "@mui/material/Button";
import { useAppDispatch } from "../../redux/store";
import { subscribe, unsubscribe } from "../../redux/currentUser/asyncActions";
// styles
import { StyledButton } from "./styles";
// types
import type { FollowButtonProps } from "./types";

export const FollowButton: React.FC<FollowButtonProps & ButtonProps> = ({
  width,
  height,
  userId,
  userEmail,
  following,
  update,
  setUpdate,
  t = () => "Follow",
}) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [updateBtn, setUpdateBtn] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleChangeFollowing = async (): Promise<void> => {
    if (userId && setUpdate) {
      isFollowing
        ? await dispatch(unsubscribe(userId))
        : await dispatch(subscribe(userId));

      setUpdate(!update);
      setUpdateBtn(!updateBtn);
    }
  };

  useEffect(() => {
    if (userEmail && following) {
      setIsFollowing(following.includes(userEmail));
    }
    // eslint-disable-next-line
  }, [updateBtn]);

  return (
    <StyledButton
      onClick={() => handleChangeFollowing()}
      width={width}
      height={height}
    >
      {isFollowing
        ? `${t("followButton.unfollow")}`
        : `${t("followButton.follow")}`}
    </StyledButton>
  );
};
