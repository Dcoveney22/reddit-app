import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSub, showSubReddit, selectUser } from "./redditSlice";
import hardData from "../../../Data/hardData";
import RedditDisplay from "./RedditDisplay";
import SubRedLink from "../ListBar/SubRedList";
import styles from "./MainPage.module.css";
import { getSubredditPosts } from "../getData/getData";
const mainData = hardData;

// const data = await getData();

export default function MainPage() {
  const subReddit = useSelector(selectSub);
  const user = useSelector(selectUser);

  // console.log(subReddit);

  const dispatch = useDispatch();

  const handleClick = async (subRed) => {
    const data = await getSubredditPosts(subRed);
    await data.map((subPost) => {
      dispatch(showSubReddit(subPost));

      console.log(subPost);
    });
  };
  console.log(subReddit);

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.leftLink}>
        <div className={styles.displayCard}>
          {mainData.map((sub) => (
            <SubRedLink
              onClick={() => handleClick(sub.subreddit)}
              key={sub.key}
              name={sub.subreddit}
            />
          ))}
        </div>
      </div>
      <div>
        {subReddit.map((sub) => (
          <div>
            <RedditDisplay
              content={sub.title}
              user={sub.author}
              text={sub.selftext}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
