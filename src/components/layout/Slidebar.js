import React from "react";

function Slidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-start">
          <div className="sidebar-head">
            <a href="/" className="logo-wrapper" title="Home">
              <span className="sr-only">Home</span>
              <span className="icon logo" aria-hidden="true" />
              <div className="logo-text">
                <span className="logo-title">PDTS</span>
                <span className="logo-subtitle">Ai Project</span>
              </div>
            </a>
            <button
              className="sidebar-toggle transparent-btn"
              title="Menu"
              type="button"
            >
              <span className="sr-only">Toggle menu</span>
              <span className="icon menu-toggle" aria-hidden="true" />
            </button>
          </div>
          <div className="sidebar-body">
            <ul className="sidebar-body-menu">
              <li>
                <a className="active" href="/">
                  <span className="icon home" aria-hidden="true" />
                  Dashboard
                </a>
              </li>
              <li>
                <a className="show-cat-btn" href="##">
                  <span className="icon paper" aria-hidden="true" />
                  Pages
                  <span
                    className="category__btn transparent-btn"
                    title="Open list"
                  >
                    <span className="sr-only">Open list</span>
                    <span className="icon arrow-down" aria-hidden="true" />
                  </span>
                </a>
                <ul className="cat-sub-menu">
                  <li>
                    <a href="pages.html">All pages</a>
                  </li>
                  <li>
                    <a href="new-page.html">Add new page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="comments.html">
                  <span className="icon message" aria-hidden="true" />
                  Comments
                </a>
                <span className="msg-counter">7</span>
              </li>
            </ul>
            <span className="system-menu__title">system</span>
            <ul className="sidebar-body-menu">
              <li>
                <a href="appearance.html">
                  <span className="icon edit" aria-hidden="true" />
                  Appearance
                </a>
              </li>
              <li>
                <a className="show-cat-btn" href="##">
                  <span className="icon category" aria-hidden="true" />
                  Extentions
                  <span
                    className="category__btn transparent-btn"
                    title="Open list"
                  >
                    <span className="sr-only">Open list</span>
                    <span className="icon arrow-down" aria-hidden="true" />
                  </span>
                </a>
                <ul className="cat-sub-menu">
                  <li>
                    <a href="extention-01.html">Extentions-01</a>
                  </li>
                  <li>
                    <a href="extention-02.html">Extentions-02</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="show-cat-btn" href="##">
                  <span className="icon user-3" aria-hidden="true" />
                  Users
                  <span
                    className="category__btn transparent-btn"
                    title="Open list"
                  >
                    <span className="sr-only">Open list</span>
                    <span className="icon arrow-down" aria-hidden="true" />
                  </span>
                </a>
                <ul className="cat-sub-menu">
                  <li>
                    <a href="users-01.html">Users-01</a>
                  </li>
                  <li>
                    <a href="users-02.html">Users-02</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="##">
                  <span className="icon setting" aria-hidden="true" />
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <a href="##" className="sidebar-user">
            <span className="sidebar-user-img">
              <picture>
                <source
                  srcSet="./img/avatar/avatar-illustrated-01.webp"
                  type="image/webp"
                />
                <img
                  src="./img/avatar/avatar-illustrated-01.png"
                  alt="User name"
                />
              </picture>
            </span>
            <div className="sidebar-user-info">
              <span className="sidebar-user__title">Nafisa Sh.</span>
              <span className="sidebar-user__subtitle">Support manager</span>
            </div>
          </a>
        </div>
      </aside>
    </>
  );
}

export default Slidebar;
