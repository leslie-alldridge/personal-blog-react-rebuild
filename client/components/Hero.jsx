import React from "react";
import { Parallax } from "react-scroll-parallax";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
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
    console.log(this.state);
  }

  render() {
    return (
      <div class="target" id="0">
        {this.state.width && this.state.width > 1087 && (
          <div id="para">
            <section className="hero is-info is-fullheight">
              <div className="hero-body">
                <div className="container">
                  <h1
                    id="title"
                    data-aos="zoom-in"
                    data-aos-duration="4000"
                    className="title"
                  >
                    Leslie Alldridge
                  </h1>
                  <h2 className="subtitle">Welcome to my online portfolio</h2>
                  <h2 className="subtitle">
                    <div id="lax">
                      <ul>
                        <Parallax offsetXMin={"420px"} offsetXMax={"-820px"}>
                          <li>Customer Focused</li>
                        </Parallax>
                        <Parallax offsetXMin={"-620px"} offsetXMax={"620px"}>
                          <li>Team Member</li>
                        </Parallax>
                        <Parallax offsetXMin={"-320px"} offsetXMax={"920px"}>
                          <li>Fast Learner</li>
                        </Parallax>
                        <Parallax offsetXMin={"620px"} offsetXMax={"-620px"}>
                          <li>Lateral Thinker</li>
                        </Parallax>
                        <Parallax offsetXMin={"-620px"} offsetXMax={"620px"}>
                          <li>Motivator</li>
                        </Parallax>
                      </ul>
                    </div>
                  </h2>
                </div>
              </div>
            </section>
          </div>
        )}
        {this.state.width && this.state.width < 1087 && (
          <div id="para">
            <section className="hero is-info is-fullheight">
              <div className="hero-body">
                <div className="container">
                  <h1>It appears that you may be browsing on mobile.</h1>
                  <a target="_blank" href="http://lesliemobile.herokuapp.com/">
                    Please click here to see my mobile friendly portfolio.
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    );
  }
}

export default Hero;
