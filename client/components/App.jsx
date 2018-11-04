import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './Navbar';
import Hero from './Hero';
import Blog from './Blog';
import HTML from './HTML';
import CSS from './CSS';
import Rct from './React';
import Node from './Node';
import Python from './Python';
import JS from './JS';
import Personal from './Personal';
import DefaultIntro from './DefaultIntro';
import BlogDetail from './BlogDetail';
import Contact from './Contact';
import About from './About/About';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlVisible: false,
      cssVisible: false,
      reactVisible: false,
      nodeVisible: false,
      pythonVisible: false,
      jsVisible: false,
      hideDefault: true,
      aboutVisible: true
    };
    this.showHTML = this.showHTML.bind(this);
    this.showCSS = this.showCSS.bind(this);
    this.showReact = this.showReact.bind(this);
    this.showNode = this.showNode.bind(this);
    this.showPython = this.showPython.bind(this);
    this.showJS = this.showJS.bind(this);
  }

  showHTML() {
    this.setState(prevState => ({
      htmlVisible: !prevState.htmlVisible,
      cssVisible: false,
      reactVisible: false,
      nodeVisible: false,
      pythonVisible: false,
      jsVisible: false
    }));
  }
  showCSS() {
    this.setState(prevState => ({
      cssVisible: !prevState.cssVisible,
      htmlVisible: false,
      reactVisible: false,
      nodeVisible: false,
      pythonVisible: false,
      jsVisible: false
    }));
  }

  showReact() {
    this.setState(prevState => ({
      reactVisible: !prevState.reactVisible,
      htmlVisible: false,
      cssVisible: false,
      nodeVisible: false,
      pythonVisible: false,
      jsVisible: false
    }));
  }

  showNode() {
    this.setState(prevState => ({
      nodeVisible: !prevState.nodeVisible,
      htmlVisible: false,
      cssVisible: false,
      reactVisible: false,
      pythonVisible: false,
      jsVisible: false
    }));
  }

  showPython() {
    this.setState(prevState => ({
      pythonVisible: !prevState.pythonVisible,
      htmlVisible: false,
      cssVisible: false,
      nodeVisible: false,
      reactVisible: false,
      jsVisible: false
    }));
  }

  showJS() {
    this.setState(prevState => ({
      jsVisible: !prevState.jsVisible,
      htmlVisible: false,
      cssVisible: false,
      nodeVisible: false,
      pythonVisible: false,
      reactVisible: false
    }));
  }

  render() {
    return (
      <ParallaxProvider>
        <Navbar />
        <Hero />
        <Blog />
        <BlogDetail
          showHTML={this.showHTML}
          showCSS={this.showCSS}
          showReact={this.showReact}
          showNode={this.showNode}
          showPython={this.showPython}
          showJS={this.showJS}
        />
        {this.state.htmlVisible && <HTML />}
        {this.state.cssVisible && <CSS />}
        {this.state.reactVisible && <Rct />}
        {this.state.nodeVisible && <Node />}
        {this.state.pythonVisible && <Python />}
        {this.state.jsVisible && <JS />}
        {this.state.hideDefault && <DefaultIntro />}
        <Personal />
        <Contact />
        <About />
        <Footer />
      </ParallaxProvider>
    );
  }
}
export default App;
