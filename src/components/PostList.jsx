import React, { useContext } from "react";
import PostCard from "./PostCard";
import { PostListContext } from "../store/PostListProvider";
import noresults from "../assets/no-results.png";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <div className="mx-auto post-list">
      {postList.length === 0 && (
        <h3 className="text-center m-3">
          <img src={noresults} alt="" className="d-inline-block mx-2" />
          <small class="text-body-secondary">Nothing here...</small>
        </h3>
      )}
      {postList.map((post) => (
        <PostCard {...post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
