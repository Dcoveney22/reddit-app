import React from "react";
import styles from "./ListBar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectSub, showSubReddit } from "../MainPage/redditSlice";
import hardData from "../../../Data/hardData";
import SubRedLink from "./SubRedList";

const mainData = hardData;

export default function ListBar() {
  return (
    <div>
      <NavLink to="/home">
        <p>Home</p>
      </NavLink>
    </div>
  );
}
