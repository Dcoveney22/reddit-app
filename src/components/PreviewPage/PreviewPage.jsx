import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./PreviewPage.module.css";
import { getPostComments } from "../getData/getData";
import { selectComments, showComments } from "./commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import CommentDisplay from "./CommentDisplay";

export default function PreviewPage() {
  const dispatch = useDispatch();

  const commentSelector = useSelector(selectComments);

  const location = useLocation();
  console.log(location);
  const text = location.state.content;
  const user = location.state.user;
  const id = location.state.props;
  const title = location.state.title;
  const seconds = location.state.seconds;
  const subReddit = location.state.subReddit;
  const upVoteQty = location.state.upVoteQty;
  const permalink = location.state.permalink;

  async function handleClick(permalink) {
    const comments = await getPostComments(permalink);
    const commentArray = [];

    await comments.map((com) => {
      commentArray.push(com);
    });

    dispatch(showComments(commentArray));
  }

  console.log(commentSelector);

  return (
    <div className={styles.fullPreview}>
      <div className={styles.headerPreview}>
        <h5>r/{subReddit}</h5>
        <h6>Posted {seconds} seconds ago</h6>
        <h5>u/{user}</h5>
      </div>
      <div className={styles.bodyPreview}>
        <h2>{title}</h2>
        <h3>{text}</h3>
        <h4>{upVoteQty} upvotes already!</h4>
        <div className={styles.postButtonContainer}>
          <div
            className={styles.commentButton}
            onClick={() => handleClick(permalink)}
          >
            COMMENTS
          </div>
        </div>
      </div>

      {id}

      {commentSelector.map((comment) => (
        <div className={styles.commentsContainer}>
          <CommentDisplay user={comment.author} comment={comment.body} />
        </div>
      ))}
    </div>
  );
}
