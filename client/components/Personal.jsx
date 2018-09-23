import React from "react";
import Technical from "./Technical";
import PersonalB from "./PersonalB";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

class Personal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: true,
      technical: false
    };
    this.showPersonal = this.showPersonal.bind(this);
    this.showTechnical = this.showTechnical.bind(this);
  }

  showPersonal() {
    this.setState({
      personal: true,
      technical: false
    });
  }

  showTechnical() {
    console.log("hitte");
    this.setState({
      technical: true,
      personal: false
    });
  }

  render() {
    return (
      <div className="target" id="2">
        <div data-aos="fade-in" id="skillsContent" class="container is-fluid">
          <div class="container is-fluid">
            <div class="content">
              <Parallax offsetXMin={"-620px"} offsetXMax={"800px"}>
                <h3>Personal &amp; Technical Blogs</h3>
              </Parallax>

              <span class="progress-value green" style={{ width: 100 }} />

              <br />

              {this.state.technical && <Technical func={this.showPersonal} />}
              {this.state.personal && <PersonalB func={this.showTechnical} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
