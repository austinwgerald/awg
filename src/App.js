import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import About from './about/about';
import Experience from './experience/experience';
import Footer from './footer/footer';
import {Jumbotron} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
            <Jumbotron>
              <h1>AUSTIN W GERALD</h1>
              <p>Software Developer</p>
            </Jumbotron>
        </div>

        <About />
        <Experience />

        <Footer />
      </div>
    );
  }
}

export default App;
