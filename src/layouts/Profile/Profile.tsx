import React from "react";
import { useParams } from "react-router-dom";
// local libs
import { Header } from "../../generic/Header/Header";

export const Profile: React.FC = () => {
  const { email } = useParams();

  return <Header title="" icon />;
};
