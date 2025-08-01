import React from "react";
import avatarImg from "../assets/portfolio-dp.jpg";

const Sidebar = ({ selectedTab, onTabClick }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark "
      style={{ width: "220px" }}
    >
      {" "}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        {" "}
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>{" "}
        <span className="fs-4">GetSocial</span>{" "}
      </a>{" "}
      <hr />{" "}
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li className="nav-item" onClick={() => onTabClick("Home")}>
          {" "}
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        <li onClick={() => onTabClick("Profile")}>
          {" "}
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Profile" && "active"
            }`}
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Profile
          </a>{" "}
        </li>{" "}
        <li onClick={() => onTabClick("CreatePost")}>
          {" "}
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "CreatePost" && "active"
            }`}
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#table"></use>
            </svg>
            Create Post
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />{" "}
      <div className="dropdown">
        {" "}
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          <img
            src={avatarImg}
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2 object-fit-cover"
          />{" "}
          <strong>Rahul Kumar</strong>{" "}
        </a>{" "}
        <ul className="dropdown-menu text-small shadow">
          {" "}
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>{" "}
          <li>
            <hr className="dropdown-divider" />
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Sidebar;
