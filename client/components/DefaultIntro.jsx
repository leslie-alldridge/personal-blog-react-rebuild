import React from "react";

const DefaultIntro = () => {
  return (
    <div data-aos="slide-up" id="skillsContent" class="container is-fluid">
      <div class="container is-fluid">
        <div class="content">
          <h3>Overall Skills and Ability</h3>
          <p>Please click on the badges above to see specific information.</p>
          <p>
            My passion lies with solving real world problems through code. I
            enjoy the endless learning that takes place. Historically I'd
            naturally learn everything my role could offer and look for further
            opportunities to grow. As a developer I love working in teams and
            positively adding the the expected output and motivation of the
            team. I've included a list below to describe my values and mindset.{" "}
          </p>
          <ul>
            <li>
              I value working in a positive team environment where motivation
              levels are high.
            </li>
            <li>I work best with people who are honest and hard working.</li>
            <li>Honesty and empathy are my core values.</li>
            <li>
              Helping others and washing their coffee cups when appropriate.
            </li>
          </ul>
          <blockquote id="quote">
            I'm an honest, hardworking invidividual that thrives in a team
            environment. I enjoy the challenge of learning new things and love
            to teach others.
          </blockquote>
          <h2 data-aos="zoom-out-left" data-aos-duration="9000">
            <i id="horn" class="fas fa-bullhorn" />
            Please check out my{" "}
            <a href="https://github.com/leslie-alldridge">GitHub page</a> to see
            my other projects.
          </h2>{" "}
          <p>
            I've listed some below, they all use Javascript so it has been
            omitted from the below:{" "}
          </p>
          <ul>
            <li>
              Rubik's Cube timer (mobile friendly) with SQL databases, Charts.js
              graphs, Bootstrap styling and two API sources
            </li>
            <li>
              Xero Invoice Reducer and Bulk Voiding Tools with OAuth, complex
              data structures and API calls, handlebars, express and Bootstrap
            </li>
            <li>
              Expensify with React, Redux and Firebase Authentication + Database
            </li>
            <li>Apple share pricing graph - D3.js graph and API calls</li>
            <li>
              This portfolio! 100% React based with Bulma CSS, CSS3 animations,
              React Parallax and more.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DefaultIntro;
