import React from "react";

class Technical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {" "}
        <div class="container is-fluid">
          <h2 onClick={this.props.func} id="pbTitle">
            Technical Blog Topics{" "}
            <i alt="Technical" id="arrow" class="fas fa-arrow-right arrow1" />
          </h2>

          <div class="columns">
            <div class="column">
              <section>
                <h4>React and Redux</h4>
                <p>
                  This website is 100% React and utlises both stateless and
                  stateful components. I love the way React can be so flexible
                  with its rendering and provide a simple but effective way to
                  code. I love teaching others the difference between state and
                  props and explaining the direction props goes throughout
                  multiple layers of components. React is the most challenging
                  language we learn at DevAcademy so I've taken it upon myself
                  to fall in love with React and learn everything I can about
                  it.
                </p>
              </section>
            </div>
            <div class="column">
              <section>
                <h4>Full Stack</h4>
                <p>
                  I'm now able to confidently code full stack applications and
                  this has really opened up my understanding with what full
                  stack really is. I used to struggle often with how websites
                  logged in users, saved items in a database, all while the user
                  navigated the front end. After extensive practice with
                  internal API's, SQL databases, React and Redux, I'm now
                  confident with the full stack concept. I'm taking this
                  opportunity to teach others in my cohort how to code and
                  understand full stack.
                </p>
              </section>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <section>
                <h4>My next areas of focus</h4>
                <p>
                  In the near future I'll be diving into complex data structures
                  and learning about more efficient ways to complete basic
                  tasks. For example, there's multiple ways to find a single
                  item within an array, but some ways are more efficient than
                  others when the array contains thousands of items. I was
                  inspired by a YouTube video of a Google interview, where the
                  software engineer discoved more than five ways to achieve the
                  same result.
                </p>
              </section>
            </div>
            <div class="column">
              <section>
                <h4>Technical Mindset</h4>
                <p>
                  Naturally I've been gifted a technical mindset. I love
                  breaking down problems, finding solutions outside of the box
                  and strategically implementing the solution. If someone tells
                  me that something isn't possible, I'll continue planning and
                  thinking about a solution as their comment will fuel me to
                  find the answer. In saying that, sometimes it's not possible
                  'yet', but I'll have my eyes and ears open for when it will be
                  possible.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Technical;
