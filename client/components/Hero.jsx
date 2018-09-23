import React from "react";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <div class="target" id="0">
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
                      <li>Empathy</li>
                    </Parallax>
                    <Parallax offsetXMin={"-620px"} offsetXMax={"620px"}>
                      <li>Team Member</li>
                    </Parallax>
                    <Parallax offsetXMin={"-320px"} offsetXMax={"920px"}>
                      <li>Ability to learn</li>
                    </Parallax>
                    <Parallax offsetXMin={"620px"} offsetXMax={"-620px"}>
                      <li>Optimistic</li>
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
    </div>
  );
};

export default Hero;
