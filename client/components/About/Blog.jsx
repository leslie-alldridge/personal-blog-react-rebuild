import React from "react";
const Blog = () => {
  return (
    <div>
      <p class="title">About my portfolio</p>
      <div class="content">
        During my time at DevAcademy I decided to do a reflection at the halfway
        point to see how far I've grown in a short amount of time.
        <p />
        Compared to my portfolio website pre-bootcamp, I'm proud to say I spent
        much less time on this website and achieved an outcome that exceeded my
        expectations.
        <p />
        I've included more details about my reflections in the readme over on
        GitHub (
        <a
          target="_blank"
          href="https://github.com/leslie-alldridge/personal-blog-react-rebuild"
        >
          here
        </a>
        ) This website is powered by the following technologies:
        <ul>
          <li> React</li>
          <li> Bulma CSS, React-Bootstrap</li>
          <li> React Parallax</li>
          <li> CSS 3 Animations</li>
          <li> Node JS</li>
          <li> Webpack</li>
        </ul>
        <p>
          If you have any questions about the technologies used or want to learn
          how I developed certain parts of this page, please let me know.
          <p />
          <p />
          For anyone looking at this page thinking "Wow, how'd he do that?",
          drop me a message or email and I'll be in touch.
          <p />
          Please note: Page will be edited to reflect my new projects and blogs.
        </p>
      </div>
    </div>
  );
};
export default Blog;
