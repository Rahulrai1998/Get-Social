import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/PostListProvider";

const CreatePostForm = () => {
  const { createPost } = useContext(PostListContext);
  const userIdRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();
  const reactionsRef = useRef();

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const tags = tagsRef.current.value.split(" ");
    const reactions = reactionsRef.current.value;

    createPost(userId, title, body, tags, reactions);
  };

  return (
    <div className="mx-auto my-5 form-container">
      <form className="w-100" onSubmit={handlePostSubmit}>
        <div className="mb-3" aria-label="post title">
          <label htmlFor="post-userId" className="form-label">
            User ID
          </label>
          <input
            ref={userIdRef}
            type="text"
            className="form-control"
            id="post-userId"
            placeholder="Add user id..."
          />
        </div>
        <div className="mb-3" aria-label="post title">
          <label htmlFor="post-title" className="form-label">
            Title
          </label>
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            id="post-title"
            placeholder="Add heading..."
          />
        </div>
        <div className="mb-3" aria-label="post body">
          <label htmlFor="post-body" className="form-label">
            Body
          </label>
          <textarea
            ref={bodyRef}
            rows={5}
            className="form-control"
            id="post-body"
            placeholder="Add content..."
          />
        </div>
        <div className="mb-3" aria-label="post title">
          <label htmlFor="post-hashtags" className="form-label">
            Tags
          </label>
          <input
            ref={tagsRef}
            type="text"
            className="form-control"
            id="post-hashtags"
            placeholder="Add hashtags..."
          />
        </div>
        <div className="mb-3" aria-label="post title">
          <label htmlFor="post-reactions" className="form-label">
            Reactions
          </label>
          <input
            ref={reactionsRef}
            type="number"
            className="form-control"
            id="post-reactions"
            placeholder="Add reactions..."
          />
        </div>
        <button type="submit" className="btn btn-primary px-5">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
