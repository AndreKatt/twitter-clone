import React, { useState } from "react";
import {
  makeStyles,
  FormControl,
  FormGroup,
  TextField,
  DialogActions,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// icons
import TwitterIcon from "@material-ui/icons/Twitter";
import Search from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@material-ui/icons/ChatBubbleOutline";
import { ModalBlock } from "../components/ModalBlock";
import { SignedForm } from "../components/SignedForm";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71C9F8",
    flex: "0 0 50%",
    overflow: "hidden",
    position: "relative",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "50%",
    top: "53%",
    transform: "translate(-50%, -50%)",
    width: "260%",
    height: "260%",
  },
  blueSideListInfo: {
    position: "relative",
    width: 380,
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueListInfoItem: {
    marginBottom: 40,
  },
  blueSideListIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
    overflow: "hidden",
  },
  loginSideTwitterIcon: {
    fontSize: 47,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },

  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  // button: {
  // 	fontWeight: 700,
  // },
  // lightBulb: {
  // 	verticalAlign: 'middle',
  // 	marginRight: theme.spacing(1),
  // },
}));

export const SignIn = () => {
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
            // classes={classes}
          >
            {visibleModal ? (
              <>
                <FormControl component="fieldset" fullWidth>
                  <FormGroup aria-label="position" row>
                    <TextField
                      className={classes.loginSideField}
                      autoFocus
                      id="email"
                      label="E-Mail"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      type="email"
                      fullWidth
                    />
                    <TextField
                      className={classes.loginSideField}
                      autoFocus
                      id="password"
                      label="Пароль"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      type="password"
                      fullWidth
                    />
                  </FormGroup>
                </FormControl>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Далее
                  </Button>
                </DialogActions>
              </>
            ) : (
              <SignedForm onClose={handleClose} classes={classes} />
            )}
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};
