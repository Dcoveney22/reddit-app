import { configureStore } from "@reduxjs/toolkit";

import subredditReducer from "../components/MainPage/redditSlice";

export const store = configureStore({
  reducer: {
    subReddit: subredditReducer,
  },
});
