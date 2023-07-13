import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// local libs
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { ModalBlock } from "../../components/ModalBlock/ModalBlock";
import { SignedForm } from "./components/SignedForm/SignedForm";
import { getBlueSideList } from "./fixtures";
// styles
import {
  BlueSideContainer,
  ListInfo,
  ListInfoItem,
  LoginSideContainer,
  LoginSideWrapper,
  LogoIcon,
  LogoImage,
  MainContainer,
  SignUpButton,
  Title,
} from "./styles";

export const SignIn: React.FC = () => {
  const [visibleSign, setvisibleSign] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const { t } = useTranslation();

  const blueSideList = getBlueSideList(t);

  const handleClickSignIn = () => {
    setVisibleModal(true);
    setvisibleSign(true);
  };

  const handleClickSignUp = () => {
    setVisibleModal(false);
    setvisibleSign(true);
  };

  const handleClose = () => {
    setvisibleSign(false);
  };

  return (
    <MainContainer maxWidth="lg">
      <BlueSideContainer>
        <LogoImage color="primary" />

        <ListInfo>
          {blueSideList.map((item) => (
            <ListInfoItem key={item.id}>
              <Typography variant="h6">
                {item.icon}
                {item.label}
              </Typography>
            </ListInfoItem>
          ))}
        </ListInfo>
      </BlueSideContainer>

      <LoginSideWrapper>
        <LoginSideContainer>
          <LogoIcon color="primary" />
          <Title variant="h4">{t("signIn.rightSideText.title1")}</Title>
          <Typography>
            <b>{t("signIn.rightSideText.title2")}</b>
          </Typography>
          <br />
          <SignUpButton
            onClick={handleClickSignUp}
            variant="contained"
            color="primary"
            fullWidth={true}
          >
            {t("signIn.buttonLabels.signUp")}
          </SignUpButton>
          <Button
            onClick={handleClickSignIn}
            variant="outlined"
            color="primary"
            fullWidth={true}
          >
            {t("signIn.buttonLabels.signIn")}
          </Button>

          <ModalBlock
            title={
              visibleModal
                ? `${t("signIn.modalBlockTitles.signIn")}`
                : `${t("signIn.modalBlockTitles.signUp")}`
            }
            visible={visibleSign}
            onClose={handleClose}
          >
            {visibleModal ? (
              <SignedForm onClose={handleClose} t={t} />
            ) : (
              <RegisterForm onClose={handleClose} t={t} />
            )}
          </ModalBlock>
        </LoginSideContainer>
      </LoginSideWrapper>
    </MainContainer>
  );
};
