import React from "react";
import styles from "./HomePage.module.css";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.logoHome}>
        <NavLink to="/home">
          <img src="../../images/readdit-no-background-NEW.png" alt="" />
        </NavLink>
      </div>
    </div>
  );
}
