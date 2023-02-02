import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { SignIn } from "./pages/SignIn/SignIn";
import { Home } from "./pages/Home/Home";
import { FullTweet } from "./outlets/FullTweet";
import { HomeTweets } from "./outlets/HomeTweets";
import { TopicTweets } from "./outlets/TopicTweets";

import { useHomeStyles } from "./pages/Home/theme";
import { selectIsAuth } from "./redux/user/selectors";
import { useAppDispatch } from "./redux/store";
import { getCurrentUserByToken } from "./redux/user/asyncActions";
import { CircularProgress } from "@mui/material";
import Twitter from "@material-ui/icons/Twitter";

function App() {
  const [loading, setLoading] = useState(true);
  const classes = useHomeStyles();
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      const { type } = await dispatch(getCurrentUserByToken());
      if (type === "user/getCurrent/fulfilled") {
        setLoading(false);
        navigate("/home");
      }
      if (type === "user/getCurrent/rejected") {
        setLoading(false);
        navigate("/signin");
      }
    };
    verify();
    // eslint-disable-next-line
  }, [isAuth]);

  if (loading) {
    return <Twitter color="primary" className={classes.centered} />;
  }

  return (
    <Routes>
      <Route path="/home/*" element={<Home classes={classes} />}>
        <Route path="" element={<HomeTweets classes={classes} />} />
        <Route path="search" element={<TopicTweets />} />
        <Route path="tweet/:id" element={<FullTweet classes={classes} />} />
      </Route>
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
