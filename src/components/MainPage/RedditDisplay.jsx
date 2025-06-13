import React from "react";
import styles from "./MainPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectContent,
  showFurtherInfo,
  selectedID,
  setSelectedID,
} from "./redditSlice";

export default function RedditDisplay(props) {
  const redditContent = useSelector(selectContent);
  const selectedId = useSelector(selectedID);
  const secondsAgo = props.seconds;

  let timeStatement = new Date(secondsAgo * 1000).toLocaleDateString("uk");

  // console.log(redditContent);
  console.log(selectedId);

  const dispatch = useDispatch();

  async function handleClick(text, id, url) {
    console.log(url);

    if (url === undefined && text === "") {
      text = "No Preview Available";
    } else if (text === "") {
      text = url;
    }
    if (props.id === selectedId) {
      dispatch(setSelectedID(""));
      dispatch(showFurtherInfo(""));
    } else {
      dispatch(setSelectedID(id));
      dispatch(showFurtherInfo(text));
    }
  }

  return (
    <div className={styles.displayContainer}>
      <div
        onClick={() => handleClick(props.text, props.id, props.url)}
        className={styles.redditDisplay}
      >
        <span className={styles.flexBoxPostInfo}>
          <h5>r/{props.subReddit}</h5>
          <p className={styles.timestamp}>posted on: {timeStatement}</p>
        </span>

        <h3>{props.content}</h3>

        {props.id === selectedId && <div>{redditContent}</div>}

        <p>u/{props.user}</p>
        <div className={styles.postButtonContainer}>
          <div className={styles.postButton}>
            <Link
              to={`/home/posts/${props.id}`}
              state={{
                content: props.text,
                id: props.id,
                user: props.user,
                title: props.content,
                seconds: props.seconds,
                subReddit: props.subReddit,
                upVoteQty: props.upVoteQty,
                permalink: props.permalink,
              }}
            >
              FULL PREVIEW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
