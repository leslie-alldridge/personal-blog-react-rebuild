import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';


const BlogDetail = () => {
    return ( 
        <div id="blogDetail">
        <div class="tile is-ancestor">
  <div class="tile is-vertical is-12">
    <div class="tile">
    <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Xero Invoice Reducer</p>
          <p class="subtitle">Create summarised invoices with ease</p>
<figure id="blogDetailImg" class="image is-4by3">            
<img src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Xero Bulk Void Tool</p>
          <p class="subtitle">Void invoices in bulk</p>
<figure id="blogDetailImg" class="image is-4by3">            
<img src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
        </article>
      </div>

    <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">We all started somewhere</p>
          <p class="subtitle">Passion for learning</p>
          <figure id="blogDetailImg" class="image is-4by3">
            <img  src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
        </article>
      </div>
  </div></div>
</div>


<div class="container is-fluid">
  <div id="symbols" class="notification">
  <figure class="image is-128x128">
  <img id="imgBadge" class="is-rounded" src="/html.png"/>
  <p class="textInfo">HTML</p>
</figure>
<figure class="image is-128x128">
  <img id="imgBadge" class="is-rounded" src="/css3.png"/>
</figure>
<figure class="image is-128x128">
  <img id="imgBadge" class="is-rounded" src="/react.png"/>
</figure>
<figure class="image is-128x128">
  <img id="imgBadge" class="is-rounded" src="/node.png"/>
</figure>
<figure class="image is-128x128">
  <img id="imgBadge" class="is-rounded" src="/python.png"/>
</figure>
<figure class="image is-128x128">
  <img id="imgBadge" class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
</figure>
  </div>
</div>

<div id = "skillsContent" class="container is-fluid">
<div class="content">

<h3>Third level</h3>
  <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
  <ol>
    <li>Donec blandit a lorem id convallis.</li>
    <li>Cras gravida arcu at diam gravida gravida.</li>
    <li>Integer in volutpat libero.</li>
    <li>Donec a diam tellus.</li>
    <li>Aenean nec tortor orci.</li>
    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
    <li>Vivamus maximus ultricies pulvinar.</li>
  </ol>
  <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
  <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
  <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
  <dl>
    <dt>Web</dt>
    <dd>The part of the Internet that contains websites and web pages</dd>
    <dt>HTML</dt>
    <dd>A markup language for creating web pages</dd>
    <dt>CSS</dt>
    <dd>A technology to make HTML look better</dd>
  </dl>
  <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
  <h4>Fourth level</h4>
  <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
  

</div>
</div>
      </div>
    )
}

export default BlogDetail