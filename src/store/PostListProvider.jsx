import React, { createContext, useReducer } from "react";
import { generateId } from "../utils/generateId";

export const PostListContext = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
});

const postListReducer = (state, { type, payload }) => {
  switch (type) {
    case "DELETE_POST":
      return state.filter((post) => post.id !== payload.postId);
      break;
    case "CREATE_POST":
      return [payload, ...state];
      break;
    default:
      return state;
  }
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Vote for me",
    body: "I request you all to vote for me.",
    reactions: 3,
    userId: "user-9",
    tags: ["vote", "election", "votForChange"],
  },
  {
    id: "2",
    title: "New Vacation",
    body: "On my way to explore the nature.",
    reactions: 6,
    userId: "user-1",
    tags: ["explore", "nature"],
  },
  {
    id: "3",
    title: "ManU won",
    body: "Champions league final was just excititng.",
    reactions: 10,
    userId: "user-2",
    tags: ["football", "uefa", "winners"],
  },
];

const PostListProvider = ({ children }) => {
  //WE ARE USING CONTEXT HERE FOR THE PURPOSE OF GLOBAL STATE MANAGEMENT
  const [postList, dispatch] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const createPost = (userId, title, body, tags, reactions) => {
    const postFormData = {
      id: generateId(),
      userId,
      title,
      body,
      tags,
      reactions,
    };

    console.log(postFormData);
    dispatch({
      type: "CREATE_POST",
      payload: postFormData,
    });
  };

  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext value={{ postList, createPost, deletePost }}>
      {children}
    </PostListContext>
  );
};

export default PostListProvider;
