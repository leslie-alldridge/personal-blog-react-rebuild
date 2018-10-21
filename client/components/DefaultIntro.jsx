import React from 'react';

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
            team. I've included a list below to describe my values and mindset.{' '}
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
            Please check out my{' '}
            <a href="https://github.com/leslie-alldridge">GitHub page</a> to see
            my other projects.
          </h2>{' '}
          <p>
            I've listed some below, they all use Javascript so it has been
            omitted from the below:{' '}
          </p>
          <ul>
            <li>
              <b>Resources for team members I teach</b> - Continually sharing my
              knowledge with others inside and outside of the workspace.
            </li>
            <li>
              <b>Shopping cart mobile friendly boilerplate</b> - A React Redux
              boilerplate shopping cart summary that I'm hoping to add a store
              front to over Christmas.
            </li>
            <li>
              <b>Slack team bot</b> - Able to private chat and let you know
              where particular team members are. Uses Google Auth to read their
              calendars.
            </li>
            <li>
              <b>Expensify</b> - React, Redux and Firebase Authentication +
              Database
            </li>
            <li>
              <b>Apple share pricing graph</b> - D3.js graph and API calls
            </li>
            <li>
              <b>This portfolio!</b> 100% React based with Bulma CSS, CSS3
              animations, React Parallax and more.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DefaultIntro;
