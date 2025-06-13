import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.logocontainer}>
      <div className={styles.logobox}>
        <img
          className={styles.logoheader}
          src="../../images/readdit-no-background-NEW.png"
          alt=""
        />
      </div>
      <div className={styles.subheader}>
        <p>What's hot in books right now?</p>
      </div>
    </div>
  );
}
