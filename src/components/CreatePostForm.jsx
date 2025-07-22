import React from "react";

const CreatePostForm = () => {
  return (
    <div className="mx-auto my-5 form-container">
      <form className="w-100">
        <div className="mb-3" aria-label="post title">
          <label htmlFor="post-userId" className="form-label">
            User ID
          </label>
          <input
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
