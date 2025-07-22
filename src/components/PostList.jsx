import React, { useContext } from "react";
import PostCard from "./PostCard";
import { PostListContext } from "../store/PostListProvider";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.map((post) => (
        <PostCard {...post} key={post.id} />
      ))}
    </>
  );
};

export default PostList;
