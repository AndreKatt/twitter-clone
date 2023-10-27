import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
// styles
import { PageSpinnerWrapper, ElementSpinnerWrapper } from "./styles";
// types
import type { SpinnerProps } from "./types";

export const Spinner: React.FC<SpinnerProps> = ({ type }) => {
  return (
    <>
      {type === "pageCenter" ? (
        <PageSpinnerWrapper>
          <CircularProgress />
        </PageSpinnerWrapper>
      ) : (
        <ElementSpinnerWrapper>
          <CircularProgress />
        </ElementSpinnerWrapper>
      )}
    </>
  );
};
