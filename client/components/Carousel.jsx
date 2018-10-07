import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  state = {
    slideIndex: 0
  };
  render() {
    return (
      <div style={{ width: '90%', margin: 'auto' }}>
        <Carousel
          edgeEasing={true}
          autoplay={true}
          autoplayInterval={7000}
          heightMode={'max'}
          initialSlideHeight={'20'}
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
        >
          <div id="firstCar" class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">BackPack Tracker</p>
                <p class="subtitle">
                  Keep track of your belongings (mobile first). A full stack
                  application with authentication, internal API and databases.
                </p>
                <figure id="blogDetailImg" class="image is-16by9">
                  <a
                    href="https://backpack-tracker.herokuapp.com/"
                    target="_blank"
                  >
                    <img id="round" src="/new.png" />
                  </a>
                </figure>
              </article>
            </div>
          </div>
          <div id="firstCar" class="tile">
            <article class="tile is-child notification is-info">
              <p class="title">GYST - Personal Dashboard</p>
              <p class="subtitle">
                Final Group Project EDA. Fullstack with many API's (including
                Google and Spotify). Material UI, React Flex Grid, D3 Charts,
                live chat and more.
              </p>
              <figure id="blogDetailImg" class="image is-16by9">
                <a
                  href="https://github.com/leslie-alldridge/GYST-Final-Project-EDA"
                  target="_blank"
                >
                  <img id="round" src="/gyst.png" />
                </a>
              </figure>
            </article>
          </div>
          <div id="firstCar" class="tile">
            <article class="tile is-child notification is-info">
              <p class="title">Xero Bulk Voiding Tool</p>
              <p class="subtitle">
                Void invoices in bulk using the Xero API. Inspired by a
                community thread{' '}
                <a
                  target="_blank"
                  href="https://community.xero.com/business/discussion/262531"
                >
                  here
                </a>
                . Currently building a second version in React.
              </p>
              <figure id="blogDetailImg" class="image is-16by9">
                <a
                  href="https://github.com/leslie-alldridge/xero-bulk-void-invoice-tool-v1"
                  target="_blank"
                >
                  <img id="round" src="/void2.png" />
                </a>
              </figure>
            </article>
          </div>
          <div id="firstCar" class="tile">
            <article class="tile is-child notification is-info">
              <p class="title">Xero Invoice Reducer</p>
              <p class="subtitle">
                Create summarised invoices with ease. This can help customers
                who are over our recommended invoice limits, find their
                duplicates and replace it with a singular invoice. Uses Xero API
                and complex data structures.
              </p>
              <figure id="blogDetailImg" class="image is-16by9">
                <a
                  href="https://github.com/leslie-alldridge/xero-duplicate-invoice-reducer"
                  target="_blank"
                >
                  <img id="round" src="/duplicate.png" />
                </a>
              </figure>
            </article>
          </div>
          <div id="firstCar" class="tile">
            <article class="tile is-child notification is-info">
              <p class="title">Rubik's Cube Timer</p>
              <p class="subtitle">
                Includes a database with graphs, historical times, sessions and
                bests (mobile first). Consumes external API's.
              </p>
              <figure id="blogDetailImg" class="image is-16by9">
                <a href="https://cubetimer102.herokuapp.com/" target="_blank">
                  <img id="round" src="/cube.png" />
                </a>
              </figure>
            </article>
          </div>
        </Carousel>
      </div>
    );
  }
}
