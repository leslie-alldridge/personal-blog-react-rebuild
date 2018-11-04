import React from 'react';
import Me from './Me';
import Blog from './Blog';

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
                      <Me />
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
                      <Blog />
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
