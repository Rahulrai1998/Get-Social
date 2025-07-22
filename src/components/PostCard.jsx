import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/PostListProvider";

const PostCard = ({ title, body, tags, reactions, id }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div
      className="card mx-auto w-100 post-card my-3"
      style={{ width: "18rem" }}
      aria-label="post"
    >
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {reactions}
        <span className="visually-hidden">unread messages</span>
      </span>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <span className="ms-1 delete-icon" onClick={() => deletePost(id)}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{body}</p>
        <div>
          {" "}
          {tags.map((tag, i) => (
            <span
              key={i}
              className="badge rounded-pill text-bg-primary me-1 hashtag"
            >{`#${tag}`}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
