import React from "react";
import avtr from "../assets/portfolio-dp.jpg";
const CreatePostHome = () => {
  const handleOpenModal = () => {
    $("#myModal").on("shown.bs.modal", function () {
      $("#myInput").trigger("focus");
    });
  };
  return (
    <>
      <div className="mx-auto home-create-post cursor-pointer">
        <button
          onClick={handleOpenModal}
          className="card btn active w-100 mt-3 d-flex justify-content-end flex-row"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
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

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostHome;
