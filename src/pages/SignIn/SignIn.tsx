import React from "react";
import { useState } from "react";

import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import TwitterIcon from "@material-ui/icons/Twitter";
import Typography from "@material-ui/core/Typography";
import MessageIcon from "@material-ui/icons/ChatBubbleOutline";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { ModalBlock } from "../../components/ModalBlock/ModalBlock";
import { SignedForm } from "./components/SignedForm/SignedForm";

import { useStylesSignIn } from "./theme";

export const SignIn: React.FC = () => {
  const classes = useStylesSignIn();
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
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueListInfoItem}>
            <Typography variant="h6">
              <Search className={classes.blueSideListIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueListInfoItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueSideListIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListIcon} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography className={classes.loginSideTitle} variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            onClick={handleClickSignUp}
            style={{ marginBottom: 18 }}
            variant="contained"
            color="primary"
            fullWidth={true}
          >
            Зарегистрироваться
          </Button>
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
              <SignedForm
                onClose={handleClose}
                classes={{ classes: classes }}
              />
            ) : (
              <RegisterForm
                onClose={handleClose}
                classes={{ classes: classes }}
              />
            )}
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};
