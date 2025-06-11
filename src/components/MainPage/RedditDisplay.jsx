import React from "react";
import styles from "./MainPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectContent, showFurtherInfo } from "./redditSlice";

export default function RedditDisplay(props) {
  const redditContent = useSelector(selectContent);
  console.log(redditContent);
  const dispatch = useDispatch();
  async function handleClick(text) {
    console.log(text);

    dispatch(showFurtherInfo(text));
  }

  return (
    <div
      onClick={() => handleClick(props.text)}
      className={styles.redditDisplay}
    >
      <p>Post Content: "{props.content}"</p>
      <p>{redditContent}</p>
      <p>User: {props.user}</p>
    </div>
  );
}
