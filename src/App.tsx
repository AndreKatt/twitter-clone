// @ts-nocheck
import { useSelector } from "react-redux";
import { createContext, useEffect, useMemo, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
// local libs
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { FullTweet } from "./layouts/FullTweet/FullTweet";
import { TopicTweets } from "./layouts/TopicTweets";
import { HomeTweets } from "./layouts/HomeTweets/HomeTweets";
import { Settings } from "./layouts/Settings/Settings";
import { useAppDispatch } from "./redux/store";
import { selectIsAuth } from "./redux/currentUser/selectors";
import { getCurrentUserByToken } from "./redux/currentUser/asyncActions";
// styles
import { LogoIcon } from "./styles";
import { getDesignTokens } from "./theme";
import { Profile } from "./layouts/Profile/Profile";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev: PaletteMode) => (prev === "light" ? "dark" : "light"));
      },
    }),
    // eslint-disable-next-line
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <LogoIcon color="primary" />
        ) : (
          <Routes>
            <Route path="/home/*" element={<Home />}>
              <Route path="" element={<HomeTweets />} />
              <Route path="search" element={<TopicTweets />} />
              <Route path="tweet/:id" element={<FullTweet />} />
              <Route path="settings" element={<Settings />} />
              <Route path=":email" element={<Profile />} />
            </Route>
            <Route path="signin" element={<SignIn />} />
          </Routes>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
