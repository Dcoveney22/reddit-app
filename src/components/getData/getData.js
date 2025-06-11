export const API_ROOT = "https://www.reddit.com";

export const getSubredditPosts = async (subReddit) => {
  const response = await fetch(`https://www.reddit.com/${subReddit}/hot.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};

// export async function getData() {
//   const url = "https://www.reddit.com/r/AskReddit/hot.json";

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);

//       return data;
//       // const redditData = [
//       //   {
//       //     title: data.data.children[0].data.title,
//       //   },
//       // ];
//       // console.log(redditData);
//     });
// }
