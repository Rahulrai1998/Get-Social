import React, { useContext } from "react";
import PostCard from "./PostCard";
import { PostListContext } from "../store/PostListProvider";

import NoData from "./NoData";
import Loader from "./Loader";

const PostList = () => {
  const { postList } = useContext(PostListContext);

  if (postList.length === 0) return <NoData />;

  console.log("New tets", postList);
  return (
    <div className="mx-auto post-list">
      {postList.isLoading && <Loader />}
      {postList.posts &&
        postList?.posts?.map((post) => <PostCard {...post} key={post.id} />)}
    </div>
  );
};

export default PostList;
