import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSub,
  showSubReddit,
  selectUser,
  showSubUser,
} from "./redditSlice";
import hardData from "../../../Data/hardData";
import RedditDisplay from "./RedditDisplay";
import SubRedLink from "../ListBar/SubRedList";
import styles from "./MainPage.module.css";
import { getSubredditPosts } from "../getData/getData";
const mainData = hardData;

// const data = await getData();
export default function MainPage() {
  const subReddit = useSelector(selectSub);
  // const subUser = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleClick = async (subRed) => {
    const data = await getSubredditPosts(subRed);
    console.log(data);
    const subPostArray = [];

    await data.map((subPost) => {
      subPostArray.push(subPost);
    });

    dispatch(showSubReddit(subPostArray));
    console.log(subPostArray);
    // console.log(subPost.title);
    // console.log(subPost);
    // });
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
              id={sub.id}
            />
          ))}
        </div>
      </div>
      <div className={styles.openContainer}>
        {subReddit.map((sub) => (
          <div>
            <RedditDisplay
              content={sub.title}
              user={sub.author}
              text={sub.selftext}
              id={sub.id}
              subReddit={sub.subreddit}
              seconds={sub.created_utc}
              url={sub.url_overridden_by_dest}
              upVoteQty={sub.ups}
              permalink={sub.permalink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
