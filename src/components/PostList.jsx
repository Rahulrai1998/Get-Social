import React, { useContext } from "react";
import PostCard from "./PostCard";
import { PostListContext } from "../store/PostListProvider";

import NoData from "./NoData";

const PostList = () => {
  const { postList } = useContext(PostListContext);

  if (postList.length === 0) return <NoData />;
  return (
    <div className="mx-auto post-list">
      {postList.map((post) => (
        <PostCard {...post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
