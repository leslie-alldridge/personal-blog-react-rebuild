import React from 'react';
const About = () => {
  return (
    <div>
      <div id="aboutPage" class="container">
        <div class="columns">
          <div class="column">
            <div class="tile is-ancestor">
              <div id="wideTile" class="tile is-vertical is-8">
                <div class="tile">
                  <div
                    data-aos="flip-down"
                    data-aos-duration="15000"
                    class="tile is-parent is-vertical"
                  >
                    <article
                      id="firstTile"
                      class="tile is-child notification is-primary"
                    >
                      <p class="title">About me</p>
                      <div class="content">
                        Hi there! First of all, thanks for checking out my
                        portfolio.
                        <p />
                        My strongest skills are bringing energy into a team,
                        finding more efficient ways to carry out repetitive
                        tasks and thinking of creative solutions to a problem.
                        Outside of the workplace, you'll find me at the gym,
                        practising karate, solving rubik's cubes and learning
                        something new.
                        <p />
                        I've finally found my passion after three careers. I'm
                        driven to become a full stack developer and do the best
                        work of my life. This career will offer me a place where
                        I'll never master my role and be continually learning
                        new technologies and stacks as the industry evolves.
                        <p />
                        At the moment I'm working in Technical Support for Xero
                        and have completed a developer bootcamp at Enspiral Dev
                        Academy. I'm eager to share my knowledge with my future
                        team and learn from the best developers in the industry.{' '}
                        <p />
                        <p />I will bring a great customer awareness and quality
                        of life focus to your team. I love thinking of big
                        outside the box ideas and presenting in front of an
                        audience. I'll frequently get drinks or do dishes for my
                        team to set a good example of how a team should look
                        after one another. I value honesty, caring for others,
                        hard work and timeliness.
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="tile is-ancestor">
              <div id="wideTile" class="tile is-vertical is-8">
                <div class="tile">
                  <div
                    data-aos="flip-down"
                    data-aos-duration="15000"
                    class="tile is-parent is-vertical"
                  >
                    <article
                      id="firstTile"
                      class="tile is-child notification is-primary"
                    >
                      <p class="title">About my portfolio</p>
                      <div class="content">
                        During my time at DevAcademy I decided to do a
                        reflection at the halfway point to see how far I've
                        grown in a short amount of time.
                        <p />
                        Compared to my portfolio website pre-bootcamp, I'm proud
                        to say I spent much less time on this website and
                        achieved an outcome that exceeded my expectations.
                        <p />
                        I've included more details about my reflections in the
                        readme over on GitHub (
                        <a href="https://github.com/leslie-alldridge/personal-blog-react-rebuild">
                          here
                        </a>
                        ) This website is powered by the following technologies:
                        <ul>
                          <li> React</li>
                          <li> Bulma CSS, React-Bootstrap</li>
                          <li> React Parallax</li>
                          <li> CSS 3 Animations</li>
                          <li> Node JS</li>
                          <li> Webpack</li>
                        </ul>
                        <p>
                          If you have any questions about the technologies used
                          or want to learn how I developed certain parts of this
                          page, please let me know.
                          <p />
                          <p />
                          For anyone looking at this page thinking "Wow, how'd
                          he do that?", drop me a message or email and I'll be
                          in touch.
                          <p />
                          Please note: Page will be edited to reflect my new
                          projects and blogs.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
