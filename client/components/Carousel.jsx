import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  state = {
    slideIndex: 0
  };
  render() {
    return (
      <Carousel
        slideIndex={this.state.slideIndex}
        afterSlide={slideIndex => this.setState({ slideIndex })}
      >
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">BackPack Tracker</p>
              <p class="subtitle">
                Keep track of your belongings (mobile first). Contains login and
                authentication.
              </p>
              <figure id="blogDetailImg" class="image is-4by3">
                <a
                  href="https://backpack-tracker.herokuapp.com/"
                  target="_blank"
                >
                  <img id="round" src="/Capture.png" />
                </a>
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Rubik's Cube Timer</p>
            <p class="subtitle">
              Includes graphs, historical times, sessions and bests (mobile
              first)
            </p>
            <figure id="blogDetailImg" class="image is-4by3">
              <a href="https://cubetimer102.herokuapp.com/" target="_blank">
                <img id="round" src="/cube.png" />
              </a>
            </figure>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Xero Bulk Voiding Tool</p>
            <p class="subtitle">Void invoices in bulk</p>
            <figure id="blogDetailImg" class="image is-4by3">
              <a
                href="https://github.com/leslie-alldridge/xero-bulk-void-invoice-tool-v1"
                target="_blank"
              >
                <img id="round" src="/void2.png" />
              </a>
            </figure>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">Xero Invoice Reducer</p>
            <p class="subtitle">Create summarised invoices with ease</p>
            <figure id="blogDetailImg" class="image is-4by3">
              <a
                href="https://github.com/leslie-alldridge/xero-duplicate-invoice-reducer"
                target="_blank"
              >
                <img id="round" src="/duplicate.png" />
              </a>
            </figure>
          </article>
        </div>{' '}
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}
