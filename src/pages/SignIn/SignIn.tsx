import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// local libs
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { ModalBlock } from "../../components/ModalBlock/ModalBlock";
import { SignedForm } from "./components/SignedForm/SignedForm";
import { listInfo } from "./fixtures";
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
          {listInfo.map((item) => (
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
          <Title variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Title>
          <Typography>
            <b>Присоединяйтесь к твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <SignUpButton
            onClick={handleClickSignUp}
            variant="contained"
            color="primary"
            fullWidth={true}
          >
            Зарегистрироваться
          </SignUpButton>
          <Button
            onClick={handleClickSignIn}
            variant="outlined"
            color="primary"
            fullWidth={true}
          >
            Войти
          </Button>

          <ModalBlock
            title={visibleModal ? "Войти в аккаунт" : "Создайте учетную запись"}
            visible={visibleSign}
            onClose={handleClose}
          >
            {visibleModal ? (
              <SignedForm onClose={handleClose} />
            ) : (
              <RegisterForm onClose={handleClose} />
            )}
          </ModalBlock>
        </LoginSideContainer>
      </LoginSideWrapper>
    </MainContainer>
  );
};
