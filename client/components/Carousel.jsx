import React from 'react';
import Carousel from 'nuka-carousel';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  Thumbnail,
  Button,
  Row,
  Col
} from 'react-bootstrap';

export default class extends React.Component {
  state = {
    slideIndex: 0
  };
  render() {
    return (
      <Grid style={{ display: 'flex' }}>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="/new.png" alt="242x200">
              <h3>BackPack Tracker - Track multiple bags with ease</h3>
              <p>
                Keep track of your belongings (mobile first). A full stack
                application with authentication, internal API and databases.
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="/gyst.png" alt="242x200">
              <h3>GYST - Custom Personal Dashboard</h3>
              <p>
                Final Group Project EDA. Fullstack with many API's (including
                Google and Spotify). Material UI, React Flex Grid, D3 Charts,
                live chat and more.
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="/void2.png" alt="242x200">
              <h3> Void invoices in bulk using the Xero API.</h3>
              <p>
                Inspired by a Xero Community feature request thread. Built using
                express-handlebars early in my career, new version released
                below.
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}
