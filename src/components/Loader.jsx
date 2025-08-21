import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
