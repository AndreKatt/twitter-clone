import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { SignIn } from "./pages/SignIn/SignIn";
import { Home } from "./pages/Home/Home";
import { FullTweet } from "./outlets/FullTweet";
import { HomeTweets } from "./outlets/HomeTweets";
import { TopicTweets } from "./outlets/TopicTweets";

import { useHomeStyles } from "./pages/Home/theme";
import { selectIsAuth } from "./redux/user/selectors";

function App() {
  const classes = useHomeStyles();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
    // eslint-disable-next-line
  }, [isAuth]);

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
