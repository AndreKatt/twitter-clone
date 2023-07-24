import React, { useEffect, useState } from "react";
import { ButtonProps } from "@mui/material/Button";
import { useAppDispatch } from "../../redux/store";
import { subscribe, unsubscribe } from "../../redux/currentUser/asyncActions";
// styles
import { StyledButton } from "./styles";
// types
import { FollowButtonProps } from "./types";

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
  const dispatch = useAppDispatch();

  const handleChangeFollowing = async (): Promise<void> => {
    if (userId && setUpdate) {
      if (isFollowing) {
        await dispatch(unsubscribe(userId));
      }
      if (!isFollowing) {
        await dispatch(subscribe(userId));
      }
      setUpdate(!update);
    }
  };

  useEffect(() => {
    if (userEmail && following) {
      setIsFollowing(following.includes(userEmail));
    }
    // eslint-disable-next-line
  }, []);

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
