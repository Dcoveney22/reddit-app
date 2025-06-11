import React from "react";
import styles from "./ListBar.module.css";

export default function SubRedLink(props) {
  return (
    <div className={styles.subRedLink} onClick={props.onClick}>
      <li>{props.name}</li>
    </div>
  );
}
