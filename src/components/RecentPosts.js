import React from "react";
import PostCard from "./PostCard";

function RecentPosts() {
  return (
    <div className={`bg-[#EDF7FA] pb-[2.5625rem]`}>
      <p className={`leading-[3.75rem] text-dark text-[1.125rem] text-center`}>
        Recent Posts
      </p>
      <PostCard />
      <PostCard />
    </div>
  );
}

export default RecentPosts;
