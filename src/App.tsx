import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Twitter from "@material-ui/icons/Twitter";

import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { FullTweet } from "./outlets/FullTweet/FullTweet";
import { TopicTweets } from "./outlets/TopicTweets";
import { HomeTweets } from "./outlets/HomeTweets/HomeTweets";

import { useAppDispatch } from "./redux/store";
import { selectIsAuth } from "./redux/user/selectors";
import { getCurrentUserByToken } from "./redux/user/asyncActions";

import { useHomeStyles } from "./pages/Home/theme";

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
      <Route path="/home/*" element={<Home classes={{ classes: classes }} />}>
        <Route
          path=""
          element={<HomeTweets classes={{ classes: classes }} />}
        />
        <Route path="search" element={<TopicTweets />} />
        <Route
          path="tweet/:id"
          element={<FullTweet classes={{ classes: classes }} />}
        />
      </Route>
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
