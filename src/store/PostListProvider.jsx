import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { generateId } from "../utils/generateId";

export const PostListContext = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
});

const initialState = {
  posts: [],
  isLoading: false,
};

const postListReducer = (state, { type, payload }) => {
  switch (type) {
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload.postId),
      };
    case "CREATE_POST":
      return { ...state, posts: [payload, ...state.posts] };
    case "SET_LOADING":
      return { ...state, isLoading: payload };
    case "ADD_API_DATA":
      return { ...state, posts: [...payload] };
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
  const [postList, dispatch] = useReducer(postListReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const fetchPosts = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const response = await fetch("https://dummyjson.com/posts", {
          signal: controller.signal,
        });
        const data = await response.json();
        dispatch({
          type: "ADD_API_DATA",
          payload: data.posts,
        });
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };
    fetchPosts();
    return () => {
      controller.abort();
    };
  }, []);

  const createPost = useCallback(
    (userId, title, body, tags, reactions) => {
      const postFormData = {
        id: generateId(),
        userId,
        title,
        body,
        tags,
        reactions,
      };

      dispatch({
        type: "CREATE_POST",
        payload: postFormData,
      });
    },
    [dispatch]
  );

  const deletePost = useCallback(
    (postId) => {
      dispatch({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatch]
  );

  return (
    <PostListContext value={{ postList, createPost, deletePost }}>
      {children}
    </PostListContext>
  );
};

export default PostListProvider;
