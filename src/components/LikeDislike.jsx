import React from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { TiThumbsUp } from "react-icons/ti";

const LikeDislike = ({ likes = "0", dislikes = "0" }) => {
  console.log(likes);
  return (
    <div className="w-20 ">
      {likes && (
        <>
          <FiThumbsUp color="green" style={{ marginLeft: "8px" }} />
          {String(likes)}
        </>
      )}
      {dislikes && (
        <>
          <FiThumbsDown color="red" style={{ marginLeft: "8px" }} />
          {String(dislikes)}
        </>
      )}
    </div>
  );
};

export default LikeDislike;
