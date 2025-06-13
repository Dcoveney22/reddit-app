import { configureStore } from "@reduxjs/toolkit";

import subredditReducer from "../components/MainPage/redditSlice";
import commentReducer from "../components/PreviewPage/commentsSlice";

export const store = configureStore({
  reducer: {
    subReddit: subredditReducer,
    commentData: commentReducer,
  },
});
