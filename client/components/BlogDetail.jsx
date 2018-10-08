import React from 'react';
import Carousel from './Carousel';

const BlogDetail = props => {
  return (
    <div id="containerSlide">
      <div
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-top
        "
        id="blogDetail"
      >
        <Carousel />
      </div>
      <div id="symbolsCont" class="container is-fluid">
        <div id="symbols" class="notification">
          <figure onClick={props.showHTML} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/html2.png" />
            <div class="textHide">
              <p class="textInfo">HTML5</p>
            </div>
          </figure>
          <figure onClick={props.showCSS} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/css2.png" />
            <div class="textHide">
              <p class="textInfo">CSS3</p>
            </div>
          </figure>
          <figure onClick={props.showReact} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/react2.png" />
            <div class="textHide">
              <p class="textInfo"> React</p>
            </div>
          </figure>
          <figure onClick={props.showNode} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/node2.png" />
            <div class="textHide">
              <p class="textInfo">NodeJS</p>
            </div>
          </figure>
          <figure onClick={props.showPython} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/p2.png" />
            <div class="textHide">
              <p class="textInfo">Python</p>
            </div>
          </figure>
          <figure onClick={props.showJS} class="image is-128x128">
            <img id="imgBadge" class="is-rounded" src="/js2.png" />
            <div class="textHide">
              <p class="textInfo">Javascript</p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
