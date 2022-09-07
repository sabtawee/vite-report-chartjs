import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/vite.svg";

export default function SidebarComponent() {
  const EMP_NAME = JSON.parse(localStorage.getItem("EMP_NAME"));

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <img
            src={Logo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">REPORT WEIGHT</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image"></div>
            <div className="info">
              <a className="d-block">{EMP_NAME ? EMP_NAME : "GUEST"}</a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-header">REPORT</li>
              {/* <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-drafting-compass text-blue" />
                  <p>PM WEIGHT</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-drafting-compass text-red" />
                  <p>MA WEIGHT</p>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
