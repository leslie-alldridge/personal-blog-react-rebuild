import React from "react";

const Navbar = () => {
  return (
    <nav id="mainNav" className="navbar is-transparent is-fixed-top">
      <div className="navbar-brand">
        <a id="navName" className="navbar-item" href="#">
          <i id="navIcon" className="fas fa-code" />
          Leslie Alldridge{" "}
        </a>
        {/* <div className="navbar-burger burger">
      <span></span>
      <span></span>
      <span></span>
    </div> */}
      </div>

      <div id="nav" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item is-active" href="#0">
            Home
          </a>
          <div className="navbar-item is-hoverable">
            <a className="navbar-item" href="#1">
              Portfolio
            </a>

            <div className="navbar-item is-hoverable">
              <a className="navbar-item" href="#2">
                Blog
              </a>
            </div>
            <div className="navbar-item is-hoverable">
              <a className="navbar-item" href="#3">
                Contact
              </a>
            </div>
            <div className="navbar-item is-hoverable">
              <a className="navbar-item" href="#4">
                About
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="bd-tw-button button"
                  target="_blank"
                  href="https://github.com/leslie-alldridge"
                >
                  <span className="icon">
                    <i className="fab fa-github" />
                  </span>
                  <span>GitHub</span>
                </a>
              </p>
              <p className="control">
                <a
                  className="bd-tw-button button"
                  target="_blank"
                  href="https://nz.linkedin.com/in/lesliealldridge"
                >
                  <span className="icon">
                    <i className="fab fa-linkedin" />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
