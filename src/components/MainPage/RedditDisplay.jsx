import React from "react";
import styles from "./MainPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContent,
  showFurtherInfo,
  selectedID,
  setSelectedID,
} from "./redditSlice";

export default function RedditDisplay(props) {
  const redditContent = useSelector(selectContent);
  const selectedId = useSelector(selectedID);

  // console.log(redditContent);
  console.log(selectedId);

  const dispatch = useDispatch();

  async function handleClick(text, id) {
    // const displayContent = props.id === selectedId ? redditContent : "";
    // console.log(props.id);
    dispatch(setSelectedID(id));
    dispatch(showFurtherInfo(text));
  }
  return (
    <div
      onClick={() => handleClick(props.text, props.id)}
      className={styles.redditDisplay}
    >
      <p>POST TITLE: "{props.content}"</p>

      {props.id === selectedId && <div>POST CONTENT: {redditContent}</div>}

      <p>USER: u/{props.user}</p>
    </div>
  );
}
