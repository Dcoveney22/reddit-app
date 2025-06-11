import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  subReddit: [],

  redditContent: "",
};

const redditSlice = createSlice({
  name: "subRedditData",
  initialState,
  reducers: {
    showSubReddit: (state, action) => {
      state.subReddit.push(action.payload);
    },
    showFurtherInfo: (state, action) => {
      state.redditContent = action.payload;
    },
  },
});

export const selectSub = (state) => state.subReddit.subReddit;
export const selectContent = (state) => state.subReddit.redditContent;
export const selectUser = (state) => state.subReddit.user;
export const { showSubReddit, showFurtherInfo, user } = redditSlice.actions;
export default redditSlice.reducer;
