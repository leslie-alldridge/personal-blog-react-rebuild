import React from 'react'

const Navbar = () => {
    return (
        <nav id="mainNav" className="navbar is-transparent">
  <div className="navbar-brand">
    <a id="navName" className="navbar-item" href="#">
    <i id="navIcon" className="fas fa-code"></i>
    Leslie Alldridge </a>
    <div className="navbar-burger burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="#">
        Home
      </a>
      <div className="navbar-item is-hoverable">
        <a className="navbar-item" href="#">
          Portfolio
        </a>
        
        <div className="navbar-item is-hoverable">
        <a className="navbar-item" href="#">
          Blog
        </a>
        </div>
        <div className="navbar-item is-hoverable">
        <a className="navbar-item" href="#">
          Contact
        </a>
        </div>
        <div className="navbar-item is-hoverable">
        <a className="navbar-item" href="#">
          About
        </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" 
                target="_blank" href="https://github.com/leslie-alldridge">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>
                GitHub
              </span>
            </a>
          </p>
          <p className="control">
            <a className="bd-tw-button button" target="_blank" href="https://nz.linkedin.com/in/lesliealldridge">
              <span className="icon">
                <i className="fab fa-linkedin"></i>
              </span>
              <span>
                LinkedIn
              </span>
            </a>
          </p>
        </div>
      </div> 
    </div>
  </div>
</nav>
    )
}

export default Navbar