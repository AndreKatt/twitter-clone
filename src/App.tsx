import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// local libs
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { FullTweet } from "./outlets/FullTweet/FullTweet";
import { TopicTweets } from "./outlets/TopicTweets";
import { HomeTweets } from "./outlets/HomeTweets/HomeTweets";
import { useAppDispatch } from "./redux/store";
import { selectIsAuth } from "./redux/user/selectors";
import { getCurrentUserByToken } from "./redux/user/asyncActions";
// styles
import { LogoIcon } from "./styles";

function App() {
  const [loading, setLoading] = useState(true);
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
    return <LogoIcon color="primary" />;
  }

  return (
    <Routes>
      <Route path="/home/*" element={<Home />}>
        <Route path="" element={<HomeTweets />} />
        <Route path="search" element={<TopicTweets />} />
        <Route path="tweet/:id" element={<FullTweet />} />
      </Route>
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
