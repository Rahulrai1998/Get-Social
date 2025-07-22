import React from "react";

const PostCard = ({ title, body }) => {
  return (
    <div
      className="card post-card"
      style={{ width: "18rem" }}
      aria-label="post"
    >
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default PostCard;
