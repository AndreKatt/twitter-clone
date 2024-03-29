import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
// local libs
import { ColorModeProvider } from "./ColorModeContext";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { FullPublication } from "./layouts/FullPublication/FullPublication";
import { HomeTweets } from "./layouts/HomeTweets/HomeTweets";
import { Settings } from "./layouts/Settings/Settings";
import { Profile } from "./layouts/Profile/Profile";
import { Follow } from "./layouts/Follow/Follow";
import { Bookmarks } from "./layouts/Bookmarks/Bookmarks";
import { DisplaySettings } from "./layouts/DisplaySettings/DisplaySettings";
import { LanguagesSettings } from "./layouts/LanguagesSettings/LanguagesSettings";
import { ProfilePublications } from "./layouts/ProfilePublications/ProfilePublications";
import { useAppDispatch } from "./redux/store";
import { selectIsAuth } from "./redux/currentUser/selectors";
import { getCurrentUserByToken } from "./redux/currentUser/asyncActions";
import "./config/i18n/i18n";
// styles
import { LogoIcon } from "./styles";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      const { type } = await dispatch(getCurrentUserByToken());
      if (type === "currentUser/getCurrent/fulfilled") {
        setLoading(false);
        navigate("/home");
      }
      if (type === "currentUser/getCurrent/rejected") {
        setLoading(false);
        navigate("/signin");
      }
    };
    verify();
    // eslint-disable-next-line
  }, [isAuth]);

  return (
    <ColorModeProvider>
      <CssBaseline />
      {loading ? (
        <LogoIcon color="primary" />
      ) : (
        <Routes>
          <Route path="/*" element={<Home />}>
            <Route path="home" element={<HomeTweets type="home" />} />
            <Route
              path="subscriptions"
              element={<HomeTweets type="subscriptions" />}
            />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="settings" element={<Settings />} />
            <Route path="settings/display" element={<DisplaySettings />} />
            <Route path="settings/languages" element={<LanguagesSettings />} />

            <Route path=":email/" element={<Profile />}>
              <Route
                path="tweets"
                element={<ProfilePublications type="tweets" />}
              />
              <Route
                path="replies"
                element={<ProfilePublications type="replies" />}
              />
              <Route
                path="media"
                element={<ProfilePublications type="media" />}
              />
              <Route
                path="likes"
                element={<ProfilePublications type="likes" />}
              />
            </Route>

            <Route
              path=":email/following"
              element={<Follow type="following" />}
            />
            <Route
              path=":email/followers"
              element={<Follow type="followers" />}
            />
            <Route
              path="tweet/:id"
              element={<FullPublication type="tweet" />}
            />
            <Route
              path="reply/:id"
              element={<FullPublication type="reply" />}
            />
          </Route>

          <Route path="signin" element={<SignIn />} />
        </Routes>
      )}
    </ColorModeProvider>
  );
}

export default App;
