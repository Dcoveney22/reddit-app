import React from "react";
import styles from "./PreviewPage.module.css";

export default function CommentDisplay(props) {
  return (
    <div className={styles.borderBox}>
      <div className={styles.commentsBox}>
        <div className={styles.userDiv}>
          <h5>u/{props.user}</h5>
        </div>
        <p>{props.comment}</p>
      </div>
    </div>
  );
}
