import React, { Component } from 'react';
import Navigation from './components/Navigation.js';
import Carousel from './components/Carousel.js';
import Cards from './components/Cards.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Navigation />
          {/*Inline styles are used for components that only need relatively few adjustmentsr*/}
          <h1 style={{float:'left', marginLeft: '30%', fontWeight: '200', paddingBottom: '5px'}}> Information Technology Services </h1>
          <Carousel />
          <Cards />
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default App;
