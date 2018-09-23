import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBurger: false,
      width: 0,
      height: 0
    };
    this.toggleBurger = this.toggleBurger.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  toggleBurger() {
    this.setState({ showBurger: !this.state.showBurger });
  }
  render() {
    const { showBurger } = this.state;
    return (
      <nav id="mainNav" className="navbar is-transparent is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <a id="navName" className="navbar-item" href="#">
              <i id="navIcon" className="fas fa-code" />
              Leslie Alldridge
            </a>
            {this.state.width > 1088 && (
              <a className="navbar-item is-active" href="#0">
                Home
              </a>
            )}
            {this.state.width > 1088 && (
              <div className="navbar-item is-hoverable">
                <a className="navbar-item" href="#1">
                  Portfolio
                </a>
              </div>
            )}
            {this.state.width > 1088 && (
              <div className="navbar-item is-hoverable">
                <a className="navbar-item" href="#2">
                  Blog
                </a>
              </div>
            )}
            {this.state.width > 1088 && (
              <div className="navbar-item is-hoverable">
                <a className="navbar-item" href="#3">
                  Contact
                </a>
              </div>
            )}
            {this.state.width > 1088 && (
              <div className="navbar-item is-hoverable">
                <a className="navbar-item" href="#4">
                  About
                </a>
              </div>
            )}

            <span
              onClick={this.toggleBurger}
              className={`navbar-burger burger ${
                showBurger ? "is-active" : ""
              }`}
              data-target="navbarMenuHeroA"
            >
              <span />
              <span />
              <span />
            </span>
            <div
              id="navbarMenuHeroA"
              className={`navbar-menu ${showBurger ? "is-active" : ""}`}
            >
              {this.state.width <= 1088 && (
                <div className="navbar-end">
                  {/* <div className="navbar-item is-hoverable" /> */}
                  <a className="navbar-item" href="#0">
                    Home
                  </a>
                  {/* <div className="navbar-item is-hoverable" /> */}
                  <a className="navbar-item" href="#1">
                    Portfolio
                  </a>
                  {/* <div className="navbar-item is-hoverable" /> */}
                  <a className="navbar-item" href="#2">
                    Blog
                  </a>

                  {/* <div className="navbar-item is-hoverable" /> */}
                  <a className="navbar-item" href="#3">
                    Contact
                  </a>
                  {/* <div className="navbar-item is-hoverable" /> */}
                  <a className="navbar-item" href="#4">
                    About
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
