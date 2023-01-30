import React from "react";
import { Route, Routes } from "react-router-dom";

import { SignIn } from "./pages/SignIn/SignIn";
import { Home } from "./pages/Home/Home";
import { FullTweet } from "./outlets/FullTweet";
import { HomeTweets } from "./outlets/HomeTweets";
import { TopicTweets } from "./outlets/TopicTweets";

import { useHomeStyles } from "./pages/Home/theme";

function App() {
  const classes = useHomeStyles();

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
