import React, { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const toggleShow = (e) => {
    e.preventDefault();
    setToggle((pre) => {
      return !pre;
    });
  };
  return (
    <div className="nav-wrap">
      <div className="sub-nav">
        <div className="nav-logo">
          <Link to="/portfolio"></Link>
        </div>
        <div className="nav-item-list">
          <Link to="/portfolio">Project</Link>
          <Link to="/portfolio/about">About</Link>
        </div>
        <div
          className="nav-toggle"
          onClick={toggleShow}
        >
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="18"
              height="2"
              fill="#fff"
            />
            <rect
              y="7"
              width="18"
              height="2"
              fill="#fff"
            />
            <rect
              y="14"
              width="18"
              height="2"
              fill="#fff"
            />
          </svg>
        </div>
        {toggle && (
          <div className="nav-toggle-content">
            <div className="content-wrap">
              <div className="toggle-list">
                <Link
                  to="/portfolio"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  Project
                </Link>
                <Link
                  to="/portfolio/about"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  About
                </Link>
              </div>
              <div
                id="close-button"
                className="close-icon"
                onClick={toggleShow}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
