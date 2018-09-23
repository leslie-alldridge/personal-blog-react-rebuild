import React from "react";

class PersonalB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="container is-fluid">
          <h2 onClick={this.props.func} id="pbTitle">
            Personal Blog Topics{" "}
            <i alt="Technical" id="arrow" class="fas fa-arrow-right arrow1" />
          </h2>
          <div class="columns">
            <div class="column">
              <section>
                <h4>Learning to learn</h4>
                <p>
                  Learning to learn is a great skill that isn't acquired
                  naturally for most people. We can all learn, but there's true
                  power in finding what helps you learn best. I've noticed when
                  learning new concepts it no longer takes an entire day. I can
                  apply myself to the subject and in a few hours time, find
                  myself teaching others how to better understand that same
                  topic. I'm never afraid to learn new things and continually
                  reflect on my progress towards goals that I've set for
                  learning new content.
                </p>
              </section>
            </div>
            <div class="column">
              <section>
                <h4>Mindfulness</h4>
                <p>
                  Enspiral Dev Academy has taught me the importantance of
                  mindfulness in the workplace. It's not often we take five
                  minutes to just 'be' and have a clear mind. This has helped my
                  productivity and concentration levels improve so I can do my
                  best work possible. Originally I thought of it as meditation
                  and it was hard to incorporate into my daily routine. Now that
                  I understand mindfulness can be a walk at lunch, five minutes
                  outside in fresh air or solving a rubik's cube, I can continue
                  to practice mindfulness throughout my day.
                </p>
              </section>
            </div>
          </div>

          <div class="columns target" id="3">
            <div class="column">
              <section>
                <h4>Teamwork</h4>
                <p>
                  One of the most important concepts I've learned is that
                  projects rarely fail due to the technical challenge that lies
                  ahead. Having a solid team and discussing expectations before
                  starting work, is critical to success. We've had a few road
                  bumps early on where expectations and roles weren't set,
                  leading to us having nothing to present. I'm glad to have been
                  through this experience as it was valuable to reflect on.
                </p>
              </section>
            </div>
            <div className="target" id="3" class="column">
              <section>
                <h4>Goals and Reflections</h4>
                <p>
                  Writing goals and reflecting on experiences has become part of
                  my daily routine. I value planning before starting a project
                  and reflecting daily to see what I've learned or what I'm
                  having trouble with. My recent applications have utilised a
                  documented ReadMe file with reflcetions, MVP and stretch
                  goals. Using this method has helped my productivity increase
                  and I've experienced less downtime wondering where to go next,
                  as the next step is clearly defined.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PersonalB;
