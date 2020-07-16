import React from "react";
import { TweetBody } from "./components/tweet.js";

const Feed = () => {
  return (
    <div className="main-body">
      <TweetBody
        name="Karthik Kalyan"
        handle="@karthikkalyan90"
        tweet="hello world hello worldhello worldhello worldhello"
      />
    </div>
  );
};

export default Feed;
