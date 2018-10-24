import React from 'react';
import { Grid, Thumbnail, Button, Row, Col } from 'react-bootstrap';

export default class extends React.Component {
  state = {
    slideIndex: 0
  };
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail
              id="port"
              src="/new.png"
              alt="242x200"
              href="https://backpack-tracker.herokuapp.com/"
              target="_blank"
            >
              <h3>
                <b>BackPack Tracker - Track multiple bags with ease</b>
              </h3>
              <br />
              <p>
                Keep track of your belongings today. A full stack application
                with authentication, internal API and databases. Built using
                mobile first design principles.
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail
              id="port"
              src="/gyst.png"
              alt="242x200"
              href="http://gyst-dash.herokuapp.com/"
              target="_blank"
            >
              <h3>
                <b>GYST - Custom Personal Dashboard</b>
              </h3>
              <br />
              <p>
                Final Group Project EDA. Fullstack with many API's (including
                Google and Spotify). Material UI, React Flex Grid, D3 Charts,
                sockets live chat and more.
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail
              id="port"
              src="/void2.png"
              alt="242x200"
              target="_blank"
              href="https://community.xero.com/business/discussion/262531"
            >
              <h3>
                <b>Void invoices in bulk using the Xero API V1</b>
              </h3>
              <br />
              <p>
                Inspired by a Xero Community feature request thread. Built using
                express-handlebars early in my career, new version released
                below.
              </p>
            </Thumbnail>
          </Col>
        </Row>
        {/* SECOND ROW */}
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail
              id="port"
              src="/duplicate.png"
              alt="242x200"
              href="https://github.com/leslie-alldridge/xero-duplicate-invoice-reducer"
              target="_blank"
            >
              <h3>
                <b>Xero Invoice Reducer V1</b>
              </h3>
              <br />
              <p>
                Create summarised invoices with ease. This can help customers
                who are over our recommended invoice limits, find their
                duplicates and replace it with a singular invoice. Uses Xero API
                and complex data structures.
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail
              id="port"
              src="/cube.png"
              alt="242x200"
              href="https://cubetimer102.herokuapp.com/"
              target="_blank"
            >
              <h3>
                <b>Rubik's Cube Timer</b>
              </h3>
              <br />
              <p>
                Includes a database with graphs, historical times, sessions and
                bests. Consumes external API's. Constructed with mobile first
                deisgn.
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail
              id="port"
              src="/motivate.png"
              alt="242x200"
              href="https://github.com/leslie-alldridge/slackbot-motivation"
              target="_blank"
            >
              <h3>
                <b>Motivation Slack Bot</b>
              </h3>
              <br />
              <p>
                Provides users access to motivational videos, images and quotes.
                The ability to search by topic is also available. Currently
                added to Xero's workspace and widely used by the team.
              </p>
            </Thumbnail>
          </Col>
        </Row>
        {/* THIRD ROW */}
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail
              id="port"
              src="/v2void.png"
              alt="242x200"
              href="https://bulkvoidxero.herokuapp.com/"
              target="_blank"
            >
              <h3>
                <b>Xero Bulk Void Tool V2</b>
              </h3>
              <br />
              <p>
                I rebuilt my previous tool above as I felt it was outdated.
                Express handlebars works, but doesn't have the flexibility that
                React offers. Created with React, Material UI and API calls to
                Xero.
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail
              id="port"
              src="/circles.png"
              alt="242x200"
              href="https://leslie-alldridge.github.io/Fun-with-Circles/"
              target="_blank"
            >
              <h3>
                <b>Fun With Circles</b>
              </h3>
              <br />
              <p>
                A project I created early in my career. A simple HTML page with
                Paper.js and a smooth 60 frames per second animation. Endless
                fun popping bubbles.
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail
              id="port"
              src="/summary2.png"
              alt="242x200"
              href="http://dailysummaryxero.herokuapp.com/"
              target="_blank"
            >
              <h3>
                <b>Xero Invoice Reducer V2</b>
              </h3>
              <br />
              <p>
                I've rebuilt my previous app above with React and Material UI.
                This enables mobile users to navigate the web page and create
                summarized invoices on the go with minimal effort.
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}
