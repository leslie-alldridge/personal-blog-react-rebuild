import React from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

const Blog = () => {
  return (
    <div className="target" id="1">
      <section class="hero">
        <ParallaxBanner
          layers={[
            {
              image: '/dev.jpeg',
              amount: 0.4,
              slowerScrollRate: false
            }
          ]}
          style={{
            height: '300px'
          }}
        >
          <Parallax offsetXMin={'-420px'} offsetXMax={'820px'}>
            <h1 id="blogTitle" class="title">
              Personal Porfolio
            </h1>
          </Parallax>
        </ParallaxBanner>
      </section>
    </div>
  );
};

export default Blog;
