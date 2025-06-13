import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "commentData",
  initialState,
  reducers: {
    showComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const selectComments = (state) => state.commentData.comments;
export const { showComments } = commentsSlice.actions;
export default commentsSlice.reducer;
