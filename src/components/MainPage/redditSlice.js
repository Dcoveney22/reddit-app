import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  subReddit: [],
  user: [],
  redditContent: "",
  activeID: "",
  selectedID: "",
};

const redditSlice = createSlice({
  name: "subRedditData",
  initialState,
  reducers: {
    showSubReddit: (state, action) => {
      state.subReddit = action.payload;
      // state.activeID = action.payload.id;
      // state.user = action.payload.user;
    },
    setSelectedID: (state, action) => {
      state.selectedID = action.payload;
    },
    activeID: (state, action) => {
      state.activeID = action.payload;
    },
    showFurtherInfo: (state, action) => {
      state.redditContent = action.payload;
    },
  },
});

export const selectSub = (state) => state.subReddit.subReddit;
export const selectContent = (state) => state.subReddit.redditContent;
export const selectUser = (state) => state.user.user;
export const selectActiveID = (state) => state.subReddit.activeID;
export const selectedID = (state) => state.subReddit.selectedID;
export const {
  showSubReddit,
  showFurtherInfo,
  showSubUser,
  activeID,
  setSelectedID,
} = redditSlice.actions;
export default redditSlice.reducer;
