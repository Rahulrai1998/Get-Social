import React from "react";
import noresults from "../assets/no-results.png";

const NoData = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <h3 className="text-center m-3">
        <img src={noresults} alt="" className="d-inline-block mx-2" />
        <small class="text-body-secondary">Nothing here...</small>
      </h3>
    </div>
  );
};

export default NoData;
