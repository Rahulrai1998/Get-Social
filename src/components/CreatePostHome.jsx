import React from "react";
import avtr from "../assets/portfolio-dp.jpg";
const CreatePostHome = () => {
  return (
    <div className="mx-auto home-create-post cursor-pointer">
      <button
        class="card btn active w-100 mt-3 d-flex justify-content-end flex-row"
        type="button"
        data-bs-toggle="button"
        aria-pressed="true"
      >
        <img
          src={avtr}
          alt=""
          width="36"
          height="36"
          className="rounded-circle flex-shrink-0 object-fit-cover me-2 d-inline"
        />
        <input
          disabled
          className="form-control ms-auto d-inline-block"
          placeholder="Create Post"
          aria-label="Search"
        />{" "}
      </button>
    </div>
  );
};

export default CreatePostHome;
